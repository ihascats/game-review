import Icons from './Icons';

export default function Loading() {
  const uiIcons = Icons();
  return (
    <div className=" w-full h-screen-nav grid justify-items-center items-center">
      {uiIcons.loading}
    </div>
  );
}
