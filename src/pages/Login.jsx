import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../hooks/useLogin";
import TextField from "../components/TextField";

const Login = () => {
  const { login, error, isPending } = useLogin();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("email required!"),
          password: Yup.string().required("Password required!"),
        })}
        onSubmit={(values,actions) => {
          const vals = {... values};
          actions.resetForm();
          login(vals.email,vals.password)
        }}
      >
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontFamily={"poppins"} fontSize={"4xl"}>
                Sign in to your account
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              border={"2px solid green"}
              boxShadow={"xl"}
              p={8}
            >
              <Stack spacing={4} as={Form}>
                {error && <Text color={"red"}>{error}</Text>}
                <TextField
                  name="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  label="Email"
                  focusBorderColor="black"
                />

                <TextField
                  name="password"
                  placeholder="Enter password"
                  autoComplete="off"
                  label="Password"
                  type="password"
                  focusBorderColor="black"
                />
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"center"}
                  >
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Formik>
    </>
  );
};

export default Login;
{
  /* <div className="main">
      <form className="login-form" onSubmit={handleLogin}>
      <h1>Login</h1>
      {error && (
        <p className="error">
          {error}
          <br />
          <br />
        </p>
      )}
        <label>Email:</label>
        <input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {!isPending && <button className="btn btn-2">Login</button>}
        {isPending && (
          <button className="btn btn-2" disabled>
            Loading
          </button>
        )}
      </form>
    </div> */
}
