import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Link as ReachLink } from "react-router-dom";
import * as Yup from "yup";
import { useSignup } from "../hooks/useSignup";
import TextField from "../components/TextField";
import logo from "../assets/logo.svg";

const Signup = () => {
  const { signup, error, isPending } = useSignup();
  const [image, setImage] = useState(undefined);
  return (
    <>
    <HStack display={{ base: "flex", md: "none" }} bg={useColorModeValue("blue.100", "gray.800")} p="20px" justifyContent={"center"}>
      <Image src={logo} boxSize={{ base: "20px", md: "36px" }} />
        <ReachLink to="/">
          <Text fontWeight={"bold"} fontSize={{ base: "2xl", md: "2xl" }}>
            Project-Ticket-Tracker
          </Text>
        </ReachLink>
      </HStack>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("name required!"),
          email: Yup.string().email().required("email required!"),
          password: Yup.string().required("Password required!"),
        })}
        onSubmit={(values, actions) => {
          const vals = { ...values, avatar: image };
          actions.resetForm();
          signup(vals.name, vals.email, vals.password, vals.avatar);
          console.log(vals);
        }}
      >
        <Flex
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading
                fontFamily={"poppins"}
                fontSize={"4xl"}
                textAlign={"center"}
              >
                Sign up
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to create a new account
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              border={"2px solid #4299e1"}
              p={8}
            >
              <Stack spacing={4} as={Form}>
                {error && <Text color={"red.400"}>{error}</Text>}
                <HStack>
                  <TextField
                    name="name"
                    placeholder="Enter name"
                    autoComplete="off"
                    label="Name"
                    focusBorderColor="black"
                  />
                  <TextField
                    name="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    label="Email"
                    focusBorderColor="black"
                    type="email"
                  />
                </HStack>
                <TextField
                  name="avatar"
                  label="Avatar"
                  variant="unstyled"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <TextField
                  name="password"
                  placeholder="Enter password"
                  autoComplete="off"
                  label="Password"
                  focusBorderColor="black"
                  type="password"
                />
                <Stack spacing={10} pt={2}>
                  {!isPending && <Button
                    loadingText="Submitting"
                    size="md"
                    bgColor={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Sign up
                  </Button>}
                  {isPending && (
                    <Button
                    loadingText="Submitting"
                    size="md"
                    bgColor={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    disabled
                  >Loading</Button>
                  )}
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <ReachLink to={"/login"}>
                      <Text as={"span"} color={"blue.400"}>
                        Login
                      </Text>
                    </ReachLink>
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

export default Signup;
