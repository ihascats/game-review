import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Review from './Review.js';
import Reviews from './Reviews';

const RouteSwitch = () => {
  return (
    <BrowserRouter basename={'/game-review'}>
      <Routes>
        <Route path="*" element={<Navigate to={`/reviews`} replace={true} />} />
        <Route path={'/reviews'} element={<Reviews />} />
        <Route path={'/reviews/:id'} element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
