import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import QuizmateAi from './pages/QuizmateAi';
import Answer from './pages/Answer';
import MainLayout from './layout/MainLayout';
import AnswerExpanded from './pages/AnswerExpanded';
import UploadedImage from './pages/UploadedImage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/'  element={<MainLayout />}>
        <Route index element={<QuizmateAi />} />
        <Route path='/upload' element={<UploadedImage />} />
        <Route path='/answer' element={<Answer />} />
        <Route path='/answer-expand' element={<AnswerExpanded />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
   

  return <RouterProvider router={router} />;
}

export default App

