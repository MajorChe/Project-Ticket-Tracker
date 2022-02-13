import { Routes, Route } from "react-router-dom";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <SideBar />
        <Flex direction={"column"} w="100%">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
