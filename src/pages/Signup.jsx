import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Link as ReachLink } from "react-router-dom";
import * as Yup from "yup";
import { useSignup } from "../hooks/useSignup";
import TextField from "../components/TextField";

const Signup = () => {
  const { signup, error, isPending } = useSignup();
  const [image, setImage] = useState(null);
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "", avatar: undefined }}
        validationSchema={Yup.object({
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
                  <Button
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
                  </Button>
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
