import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import { Project } from "./pages/Project";
import TicketItem from "./pages/TicketItem";
import TicketsList from "./pages/TicketsList";
import Settings from "./pages/Settings";
import { Users } from "./pages/Users";

const App = () => {
  const { user, loggedIn } = useAuthContext();
  const PrivateRoutes = () => {
    return user ? <Outlet /> : <Navigate to={"/login"} />;
  };

  return (
    <>
      {loggedIn && (
        <Flex direction={"column"} w="100%">
          {!user && <Navbar />}
          <Routes>
            {!user && <Route path="/signup" element={<Signup />} />}
            {!user && <Route path="/login" element={<Login />} />}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tickets" element={<TicketsList />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/ticket/:id" element={<TicketItem />} />
            </Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Flex>
      )}
    </>
  );
};

export default App;
