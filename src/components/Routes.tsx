import {
  RouterProvider as Router,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { Navigation } from "./Navigation";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Navigation />
          <Outlet />
        </>
      }
      errorElement={<div>Not found</div>}
    >
      <Route path="/" element={<div>Something</div>} />
      <Route path="measurments" element={<div>Contact</div>} />
      <Route path="progress" element={<div>Dashboard</div>} />
    </Route>
  )
);

export const Routes = () => {
  return <Router router={routes} />;
};
