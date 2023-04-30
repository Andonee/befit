import {
  RouterProvider as Router,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { Navigation } from "./Navigation";
import { Measurments } from "../features";

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
      <Route path="/" element={<div>Main</div>} />
      <Route path="measurments" element={<Measurments />} />
      <Route path="progress" element={<div>Dashboard</div>} />
      <Route path="training" element={<div>Dashboard</div>} />
    </Route>
  )
);

export const Routes = () => {
  return <Router router={routes} />;
};
