export default function ReviewInfoPageCard({
  reviewInfo,
  steamInfo,
  hltbInfo,
}) {
  return (
    <div className=" flex flex-col gap-6 sm:w-1/2 xl:w-1/3 2xl:w-1/4 self-center bg-gradient-to-br from-yellow-200 to-pink-300 dark:from-indigo-600 dark:to-amber-600 text-slate-100 p-4 h-full overflow-y-scroll hide-scroll">
      <img
        alt=""
        src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${reviewInfo.steam_id}/header.jpg`}
        className=" w-full"
      ></img>

      <div className="text-zinc-900 dark:text-zinc-100 bg-neutral-100 dark:bg-zinc-800 p-3 flex justify-between">
        <h1>{reviewInfo.game_title}</h1>
        <h1>
          {`${
            (reviewInfo.visuals +
              reviewInfo.performance +
              reviewInfo.accessibility +
              reviewInfo.engagement +
              reviewInfo.fun) /
            5
          }`}
          &#9733;
        </h1>
      </div>
      <div className="text-zinc-900 dark:text-zinc-100 flex w-full justify-between bg-neutral-100 dark:bg-zinc-800 px-3 py-6">
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">Steam Price</h2>
          <h3 className=" font-mono">{steamInfo.final_formatted}</h3>
        </div>
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">How long to beat~</h2>
          {isNaN(hltbInfo) ? (
            <h3 className=" font-mono">{hltbInfo}</h3>
          ) : (
            <h3 className=" font-mono">{hltbInfo} hours</h3>
          )}
        </div>
        <div className="grid">
          <h2 className="text-zinc-900 dark:text-zinc-100 font-mono font-bold text-xs">
            Price per hour~
          </h2>
          {isNaN(hltbInfo) || steamInfo.final === 0 ? (
            <h3 className=" font-mono">N/A</h3>
          ) : (
            <h3 className=" font-mono">
              ${(steamInfo.initial / (hltbInfo * 100)).toFixed(2)}
            </h3>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 text-zinc-900 dark:text-zinc-100 bg-neutral-100 dark:bg-zinc-800 px-3 py-6 ">
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">visuals</h2>
          <h3 className=" font-mono">{reviewInfo.visuals}&#9733;</h3>
        </div>
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">performance</h2>
          <h3 className=" font-mono">{reviewInfo.performance}&#9733;</h3>
        </div>
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">accessibility</h2>
          <h3 className=" font-mono">{reviewInfo.accessibility}&#9733;</h3>
        </div>
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">engagement</h2>
          <h3 className=" font-mono">{reviewInfo.engagement}&#9733;</h3>
        </div>
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">fun</h2>
          <h3 className=" font-mono">{reviewInfo.fun}&#9733;</h3>
        </div>
        <div className="grid">
          <h2 className=" font-mono font-bold text-xs">status</h2>
          <h3 className=" font-mono">{reviewInfo.status}</h3>
        </div>
      </div>
    </div>
  );
}
