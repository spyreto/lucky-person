// React
import { useState, useEffect } from "react";

// Import components
import UserCard from "../user-card/UserCard";

// Import icons
import { ReactComponent as PreviousIcon } from "../../assets/arrow-prev-24.svg";
import { ReactComponent as NextIcon } from "../../assets/arrow-next-24.svg";

// Import styles
import { Container, Button } from "./UserSlider.styles";

const UserSlider = ({ color }) => {
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
  const nextPageIndex = 24;
  const prevPageIndex = -1;

  // Initial fetch
  useEffect(() => {
    const initialFetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=1&results=24&seed=abc&inc=picture,name,email,phone,location`
        ).then((res) => res.json());
        setUserData(response.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    initialFetchData();
  }, []);

  // Next page fetch
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
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
    const newIndex = currentIndex - 1;
    // checks not to go below 0 index
    if (isFirstPage && newIndex > 0) {
      setCurrentIndex(newIndex);
    } // Checks the new index reached the value
    // at which the download of the previous page should start
    else if (newIndex === minUserDataIndex) {
      setCurrentIndex(newIndex);
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
        // Update the data array of users
        // Keeps the nearest half of the previous state of userData
        setUserData([...nextFetchedPageData, ...userData.slice(0, pageSize)]);
      }
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // Next card button handler
  const nextButtonHandler = () => {
    const newIndex = currentIndex + 1;
    // checks the new index reached the value
    // at which the download of the next page should start
    if (newIndex === maxUserDataIndex) {
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
        setCurrentIndex(newIndex - pageSize);
        setUserData([...nextFetchedPageData, ...userData.slice(0, pageSize)]);
      }
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // console.log(
  //   `curP: ${prevFetchedPage}, currI: ${currentIndex}, nextP: ${nextPageToFetch}`
  // );

  return (
    <Container>
      <Button
        onClick={prevButtonHandler}
        isHidden={currentIndex === 0 && isFirstPage}
      >
        <PreviousIcon />
      </Button>
      {isLoading ? (
        <p>skata</p>
      ) : (
        <UserCard data={userData[currentIndex]} color={color} />
      )}
      <Button onClick={nextButtonHandler}>
        <NextIcon />
      </Button>
    </Container>
  );
};

export default UserSlider;
