import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './components/Loading';
import ReviewInfoPageCard from './components/ReviewInfoPageCard';
import ReviewNav from './components/ReviewNav';

export default function Review() {
  const [reviewInfo, setReviewInfo] = useState();
  const [steamInfo, setSteamInfo] = useState();
  const [hltbInfo, setHltbInfo] = useState();
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fetchReview() {
      const response = await fetch(
        `${process.env.REACT_APP_APILINK}/reviews/${id}`,
        {
          mode: 'cors',
        },
      );
      if (response.status === 200) {
        const json = await response.json(); //extract JSON from the http response
        return { review: json, response };
      } else {
        return { response };
      }
    }

    async function fetchPrice(steam_id) {
      const response = await fetch(
        `${process.env.REACT_APP_APILINK}/steam-api/${steam_id}`,
        {
          method: 'GET',
          mode: 'cors',
        },
      );
      if (response.status === 200) {
        try {
          const json = await response.json(); //extract JSON from the http response
          return { price_overview: json, response };
        } catch {
          return {
            price_overview: {
              currency: 'USD',
              discount_percent: 0,
              final: 0,
              final_formatted: 'Free',
              initial: 0,
              initial_formatted: '',
            },
            response,
          };
        }
      } else {
        return { response };
      }
    }

    async function fetchHltb(game_title) {
      const response = await fetch(
        `${process.env.REACT_APP_APILINK}/hltb-api/${game_title}`,
        {
          method: 'GET',
          mode: 'cors',
        },
      );
      if (response.status === 200) {
        const json = await response.json(); //extract JSON from the http response
        return { hltb: json, response };
      } else {
        return { response };
      }
    }

    fetchReview().then(
      function (value) {
        if (value.response.status === 200) {
          setReviewInfo(value.review);
          fetchPrice(value.review.steam_id).then(
            function (value) {
              if (value.response.status === 200) {
                setSteamInfo(value.price_overview);
              } else {
                console.log(value.response.statusText);
              }
            },
            function (error) {
              console.log(error);
            },
          );
          fetchHltb(value.review.game_title).then(
            function (value) {
              if (value.response.status === 200) {
                if (value.hltb.response.length === 0) {
                  setHltbInfo('N/A');
                } else {
                  if (value.hltb.response[0].gameplayMain === 0) {
                    setHltbInfo('N/A');
                  } else {
                    setHltbInfo(value.hltb.response[0].gameplayMain);
                  }
                }
              } else {
                console.log(value.response.statusText);
              }
            },
            function (error) {
              console.log(error);
            },
          );
        } else {
          console.log(value.response.statusText);
        }
      },
      function (error) {
        console.log(error);
      },
    );
    if (localStorage.darkMode === 'true') {
      setDarkMode(localStorage.darkMode);
      dynamicBg.current.classList.add('dark');
    }
  }, []);

  const dynamicBg = useRef();

  if (dynamicBg.current) {
    dynamicBg.current.style.backgroundImage = `url('https://cdn.cloudflare.steamstatic.com/steam/apps/${localStorage.background}/header.jpg')`;
  }

  return (
    <div
      className={` dynamic-bg h-screen w-screen bg-no-repeat bg-cover bg-center`}
      ref={dynamicBg}
    >
      <div
        className={` items-center flex flex-col w-full h-full backdrop-blur-md dark:backdrop-brightness-75`}
      >
        {reviewInfo && steamInfo && String(hltbInfo) ? (
          <ReviewInfoPageCard
            reviewInfo={reviewInfo}
            steamInfo={steamInfo}
            hltbInfo={hltbInfo}
          />
        ) : (
          <Loading />
        )}
        {reviewInfo && steamInfo && String(hltbInfo) ? (
          <ReviewNav
            darkSwitch={dynamicBg}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        ) : null}
      </div>
    </div>
  );
}
