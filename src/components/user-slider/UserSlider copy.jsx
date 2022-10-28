// React
import { useState, useEffect, useMemo } from "react";

// Import components
import UserCard from "../user-card/UserCard";

// Import icons
import { ReactComponent as PreviousIcon } from "../../assets/arrow-prev-24.svg";
import { ReactComponent as NextIcon } from "../../assets/arrow-next-24.svg";

// Import styles
import { Container, Button } from "./UserSlider.styles";

// Utils
import { computeMinIndex, computeMaxIndex } from "../../utils/utils";

const UserSlider = ({ color }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(0);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pageSize = 12;

  const minUserDataIndex = useMemo(
    () => computeMinIndex(currentPage, nextPage, pageSize),
    [currentPage, nextPage, pageSize]
  );

  const maxUserDataIndex = useMemo(
    () => computeMaxIndex(currentPage, nextPage, pageSize),
    [currentPage, nextPage, pageSize]
  );

  // Initial fetch
  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?page=1&results=12&seed=abc&inc=picture,name,email,phone,location`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results);
        setIsLoading(false);
      });
  }, []);

  // Next page fetch
  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?page=${nextPage}&results=12&seed=abc&inc=picture,name,email,phone,location`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("skata");
        setCurrentPage(nextPage);
        if (currentPage < nextPage) {
          currentPage > 1
            ? setUserData([...userData.slice(pageSize), ...data.results])
            : setUserData([...userData, ...data.results]);
        } else {
          setUserData([...data.results, ...userData.slice(0, pageSize - 1)]);
        }
      });
  }, [nextPage, currentPage, pageSize]);

  const prevButtonHandler = () => {
    let newIndex = currentIndex - 1;
    if (currentIndex === minUserDataIndex) {
      setCurrentIndex(newIndex);
      setNextPage(currentPage - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const nextButtonHandler = () => {
    console.log(
      `currIndex: ${currentIndex}, currentPage: ${currentPage}, minUserDataIndex: ${minUserDataIndex}, maxUserDataIndex: ${maxUserDataIndex}`
    );
    let newIndex = currentIndex + 1;
    if (newIndex === maxUserDataIndex) {
      setCurrentIndex(newIndex);
      setNextPage(currentPage + 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <Container>
      <Button onClick={prevButtonHandler} isHidden={currentIndex === 0}>
        <PreviousIcon />
      </Button>
      {!isLoading && <UserCard data={userData[currentIndex]} color={color} />}
      <Button onClick={nextButtonHandler}>
        <NextIcon />
      </Button>
    </Container>
  );
};

export default UserSlider;
