import {
  BrowserRouter as Router,
  Routes,
  Route as RoutePermission,
  Route,
} from "react-router-dom";

import RequireAuth from "../utils/RequireAuth";

import { ROUTE_URL } from "../constants/Route";

import Auth from "../pages/auth";
import TodoList from "../pages/todoList";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <RoutePermission
          element={
            <RequireAuth isAuthRequired={false} redirectUrl={ROUTE_URL.TODO} />
          }
        >
          <Route path={ROUTE_URL.AUTH} element={<Auth />} />
        </RoutePermission>

        <RoutePermission
          element={
            <RequireAuth isAuthRequired={true} redirectUrl={ROUTE_URL.AUTH} />
          }
        >
          <Route path={ROUTE_URL.TODO} element={<TodoList />} />
        </RoutePermission>
      </Routes>
    </Router>
  );
};

export default Routers;
