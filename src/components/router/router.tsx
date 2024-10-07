import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/home_page/home_page'));
const Projects = lazy(() => import('../../pages/projects/projects'));

export function Router() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
