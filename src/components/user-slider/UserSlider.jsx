// React
import { Fragment, useState, useEffect } from "react";

// Import components
import UserCard from "../user-card/UserCard";
import Spinner from "../spinner/Spinner";

// Portal modal
import Modal from "../modal/Modal";

// Import icons
import { ReactComponent as PreviousIcon } from "../../assets/arrow-prev-24.svg";
import { ReactComponent as NextIcon } from "../../assets/arrow-next-24.svg";

// Import styles
import { Container, LeftButton, RigthButton } from "./UserSlider.styles";

const UserSlider = ({ color }) => {
  const [index, setIndex] = useState(0);

  // Current data array index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Previous fetched data page from api
  const [prevFetchedPage, setPrevFetchedPage] = useState(1);
  // Indicates the next data page to fetch
  const [nextPageToFetch, setNextPageToFetch] = useState(-1);
  // Indicates if the user is in the first data set
  const [isFirstPage, setIsFirstPage] = useState(true);
  // New fetched data page
  // Νecessary to update the data array
  const [nextFetchedPageData, setNextFetchedPageData] = useState([]);
  // Holds the fetched data
  const [userData, setUserData] = useState([]);

  const [slideType, setSlideType] = useState("");

  // Loading indicators
  const [isFecthingData, setisFecthingData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Τhe size of the page to be Fetched
  const pageSize = 12;
  // indicates the value at which the download of the previous page should start
  const minUserDataIndex = 3;
  // indicates the value at which the download of the next page should start
  const maxUserDataIndex = 20;
  // indicates the values at which the data array (userData) should be updated
  const nextPageIndex = 23;
  const prevPageIndex = 0;

  // Initial fetch
  useEffect(() => {
    const initialFetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch first page from api
        const firstPage = await fetch(
          `https://randomuser.me/api/?page=1&results=${pageSize}&seed=abc&inc=picture,name,email,phone,location`
        )
          .then((res) => res.json())
          .then((resJson) => resJson.results);
        // Fetch seconde page from api
        const secondPage = await fetch(
          `https://randomuser.me/api/?page=2&results=${pageSize}&seed=abc&inc=picture,name,email,phone,location`
        )
          .then((res) => res.json())
          .then((resJson) => resJson.results);
        // Merge the two results
        setUserData([...firstPage, ...secondPage]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    initialFetchData();
  }, [pageSize]);

  // Next page fetch
  useEffect(() => {
    const fetchData = async () => {
      setisFecthingData(true);
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=${nextPageToFetch}&results=12&seed=abc&inc=picture,name,email,phone,location`
        ).then((res) => res.json());
        setNextFetchedPageData(response.results);
      } catch (error) {
        setIsError(true);
      }
      setisFecthingData(false);
      setIsLoading(false);
    };
    // Prevents data fetching caused by the initialization of the nextPageToFetch var
    nextPageToFetch > 0 && fetchData();
  }, [nextPageToFetch]);

  // Previous card button handler
  const prevButtonHandler = () => {
    setIndex(index - 1);
    const newIndex = currentIndex - 1;
    // checks not to go below 0 index
    if (isFirstPage && newIndex > -1) {
      setCurrentIndex(newIndex);
      setSlideType("backward");
    } // Checks the new index reached the value
    // at which the download of the previous page should start
    else if (newIndex === minUserDataIndex) {
      setCurrentIndex(newIndex);
      setSlideType("backward");
      // Updates the NextPageToFetch and PrevFetchedPage values
      if (prevFetchedPage < nextPageToFetch) {
        setNextPageToFetch(prevFetchedPage - 1);
      } else {
        setNextPageToFetch(prevFetchedPage - 2);
        setPrevFetchedPage(prevFetchedPage - 1);
      }
    } // checks the new index reached the value
    // at which the data array (userData) should be updated
    else if (newIndex === prevPageIndex) {
      if (isFecthingData) {
        setIsLoading(true);
      } else {
        // Checks if the first page has been reached
        if (prevFetchedPage + nextPageToFetch <= 3 && !isFirstPage) {
          setIsFirstPage(true);
        }
        setCurrentIndex(newIndex + pageSize);
        setSlideType("backward");
        // Update the data array of users
        // Keeps the nearest half of the previous state of userData
        setUserData([...nextFetchedPageData, ...userData.slice(0, pageSize)]);
      }
    } else {
      setSlideType("backward");
      setCurrentIndex(newIndex);
    }
  };

  // Next card button handler
  const nextButtonHandler = () => {
    setIndex(index + 1);
    const newIndex = currentIndex + 1;
    // checks the new index reached the value
    // at which the download of the next page should start
    if (newIndex === maxUserDataIndex) {
      setSlideType("forward");
      setCurrentIndex(newIndex);
      // Updates the NextPageToFetch and PrevFetchedPage values
      if (prevFetchedPage > nextPageToFetch && nextPageToFetch > 0) {
        setNextPageToFetch(prevFetchedPage + 1);
      } else {
        setNextPageToFetch(prevFetchedPage + 2);
        setPrevFetchedPage(prevFetchedPage + 1);
      }
    } // checks the new index reached the value
    // at which the data array (userData) should be updated
    else if (newIndex === nextPageIndex) {
      if (isFecthingData) {
        setIsLoading(true);
      } else {
        // Checks if the first page has passed
        if (prevFetchedPage + nextPageToFetch >= 3 && isFirstPage) {
          setIsFirstPage(false);
        }
        // Update the data array of users
        // Keeps the nearest half of the previous state of userData
        setSlideType("forward");
        setCurrentIndex(newIndex - pageSize);
        setUserData([...nextFetchedPageData, ...userData.slice(0, pageSize)]);
      }
    } else {
      setSlideType("forward");
      setCurrentIndex(newIndex);
    }
  };

  const showCard = () => {
    if (isLoading) return <Spinner />;

    return (
      <Fragment>
        {currentIndex === 0 && isFirstPage ? (
          <UserCard
            isHidden={true}
            data={userData[currentIndex]}
            color={color}
            cardType={"previous"}
            className={slideType}
          />
        ) : (
          <UserCard
            isHidden={false}
            data={userData[currentIndex - 1]}
            color={color}
            cardType={"previous"}
            slideType={slideType}
            key={currentIndex - 1}
          />
        )}
        <UserCard
          data={userData[currentIndex]}
          color={color}
          cardType={"active"}
          slideType={slideType}
          key={currentIndex}
        />
        <UserCard
          data={userData[currentIndex + 1]}
          color={color}
          cardType={"next"}
          slideType={slideType}
          key={currentIndex + 1}
        />
      </Fragment>
    );
  };

  // console.log(`index: ${index}`);
  // console.log(
  //   `curIndex: ${currentIndex}, prevPage: ${prevFetchedPage}, nexPtFetch: ${nextPageToFetch}`
  // );

  return (
    <Container>
      {/* Error modal */}
      {isError && (
        <Modal
          title={"Error"}
          message={
            "Oops...Something went wrong. Please refresh the page and try again."
          }
        />
      )}
      <LeftButton
        onClick={prevButtonHandler}
        isHidden={currentIndex === 0 && isFirstPage}
        disabled={isLoading || isError}
      >
        <PreviousIcon />
      </LeftButton>
      {!isError && showCard()}
      <RigthButton onClick={nextButtonHandler} disabled={isLoading || isError}>
        <NextIcon />
      </RigthButton>
    </Container>
  );
};

export default UserSlider;
