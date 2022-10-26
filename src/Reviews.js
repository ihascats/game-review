import { useEffect, useRef, useState } from 'react';
import Loading from './components/Loading';
import Nav from './components/Nav';
import ReviewCard from './components/ReviewCard';

export default function Reviews() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);
  const [filterReviews, setFilterReviews] = useState([]);
  const [fetchStatus, setFetchStatus] = useState();
  const [titleToggle, setTitleToggle] = useState(false);
  const darkSwitch = useRef();

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(`${process.env.REACT_APP_APILINK}/reviews`, {
        mode: 'cors',
      });
      if (response.status === 200) {
        const json = await response.json(); //extract JSON from the http response
        return { reviews: json, response };
      } else {
        return { response };
      }
    }

    fetchReviews().then(
      function (value) {
        if (value.response.status === 200) {
          setReviewsList(value.reviews);
        } else {
          if (value.response.status === 401) {
            setFetchStatus(`${value.response.status}: Unauthorized`);
          } else {
            setFetchStatus(value.response.status);
          }
        }
      },
      function (error) {
        console.log(error);
      },
    );
    if (localStorage.darkMode === 'true') {
      setDarkMode(localStorage.darkMode);
      darkSwitch.current.classList.add('dark');
    }
  }, []);

  return (
    <div ref={darkSwitch}>
      <Nav
        darkSwitch={darkSwitch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchState={searchState}
        setSearchState={setSearchState}
        titleToggle={titleToggle}
        setTitleToggle={setTitleToggle}
        reviewsList={reviewsList}
        setFilterReviews={setFilterReviews}
      />
      {fetchStatus ? (
        <h1 className=" text-center text-rose-800 font-bold text-2xl py-12">
          {fetchStatus}
        </h1>
      ) : null}
      {reviewsList.length > 0 ? null : <Loading />}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {filterReviews.length > 0 && searchState
          ? filterReviews.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                titleToggle={titleToggle}
              />
            ))
          : reviewsList.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                titleToggle={titleToggle}
              />
            ))}
      </ul>
    </div>
  );
}
