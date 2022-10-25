import Icons from './Icons';

export default function Nav({
  darkSwitch,
  darkMode,
  setDarkMode,
  searchState,
  setSearchState,
}) {
  const uiIcons = Icons();
  function changeMode() {
    if (darkSwitch.current.classList.contains('dark')) {
      darkSwitch.current.classList.remove('dark');
      setDarkMode(false);
    } else {
      darkSwitch.current.classList.add('dark');
      setDarkMode(true);
    }
  }

  return (
    <nav className=" grid grid-cols-2 bg-neutral-300 h-14 items-center px-2 dark:bg-neutral-800">
      <h1 className="font-mono text-2xl text-neutral-800 dark:text-neutral-200">
        GReview
      </h1>
      <div className=" flex justify-end gap-3">
        <button className="fill-neutral-500" onClick={changeMode}>
          {darkMode ? uiIcons.light : uiIcons.dark}
        </button>
        <input
          onFocus={() => setSearchState(true)}
          placeholder="Search..."
          className="w-full md:w-4/5 xl:w-1/2 bg-transparent border-b-2 border-neutral-600 dark:border-neutral-300 text-neutral-800 dark:text-neutral-200 outline-none focus:border-blue-500 dark:focus:border-blue-500"
        ></input>
        {searchState ? (
          <button
            onClick={() => setSearchState(false)}
            className="fill-red-600"
          >
            {uiIcons.cancelSearch}
          </button>
        ) : null}
      </div>
    </nav>
  );
}
