import { Link } from 'react-router-dom';
import Icons from './Icons';

export default function ReviewNav({ darkSwitch, darkMode, setDarkMode }) {
  const uiIcons = Icons();

  function changeMode() {
    if (darkSwitch.current.classList.contains('dark')) {
      darkSwitch.current.classList.remove('dark');
      setDarkMode(false);
      localStorage.darkMode = false;
    } else {
      darkSwitch.current.classList.add('dark');
      setDarkMode(true);
      localStorage.darkMode = true;
    }
  }

  return (
    <nav className=" sticky w-full h-fit bg-neutral-100 dark:bg-neutral-900 bottom-0 grid grid-cols-2 justify-items-center p-2 border-t-4 border-neutral-900 dark:border-neutral-300 sm:w-1/2 xl:w-1/3 2xl:w-1/4">
      <Link to={`/reviews`} className=" fill-neutral-500 hover:fill-yellow-500">
        {uiIcons.back}
      </Link>
      <button className="fill-neutral-500" onClick={changeMode}>
        {darkMode ? uiIcons.light : uiIcons.dark}
      </button>
    </nav>
  );
}
