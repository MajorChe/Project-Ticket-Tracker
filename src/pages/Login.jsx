import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {Link as ReachLink} from "react-router-dom";
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
          login(vals.email,vals.password) //using the login function from uselogin hook
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
                Login to your account
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              border={"2px solid #4299e1"}
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
                <Stack pt={6}>
                  <Text align={"center"}>
                    New user? <ReachLink to={"/signup"}><Link color={"blue.400"}>Sign up</Link></ReachLink>
                  </Text>
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