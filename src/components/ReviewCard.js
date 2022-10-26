import { Link } from 'react-router-dom';

export default function ReviewCard({ review, titleToggle }) {
  return (
    <li className=" w-full">
      <Link to={`/reviews/${review._id}`}>
        <img
          alt={review.game_title}
          src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${review.steam_id}/header.jpg`}
          className=" w-full"
        ></img>
        {titleToggle ? (
          <h2 className="bg-zinc-100 transition-colors dark:bg-zinc-700 text-neutral-900 dark:text-neutral-200 font-semibold px-1 overflow-clip whitespace-nowrap text-ellipsis">
            {review.game_title}
          </h2>
        ) : null}
      </Link>
    </li>
  );
}
