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
import * as Yup from "yup";
import TextField from "../components/TextField";
import SideBar from "../components/SideBar";
import { Navbar } from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { projectTicketTrackerAuth, projectTicketTrackerStorage } from "../firebase/Config";
import { useFireStore } from "../hooks/useFireStore";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const user = projectTicketTrackerAuth.currentUser;
  const { updateDocument } = useFireStore("users"); 
  const [image, setImage] = useState(undefined);
  const navigate = useNavigate();
  const [error,setError] = useState();
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <SideBar />
      <Flex direction={"column"} w="100%" bgColor={"gray.100"}>
        <Navbar />
        <Flex
          mt={"20px"}
          direction="column"
          height={"80%"}
          wrap="wrap"
          px={{ base: 2, sm: 12, md: 12 }}
        >
      <Formik
        initialValues={{ name: user.displayName, email: user.email, password: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("name required!"),
          email: Yup.string().email().required("email required!"),
          password: Yup.string().required("Password required!"),
        })}
        onSubmit={async (values, actions) => {
          const vals = { ...values, avatar: image };
          actions.resetForm();
          //update login goes here
          const uploadPath = `thumbnails/${vals.name}/${vals.avatar.name}`
          const img = await projectTicketTrackerStorage.ref(uploadPath).put(vals.avatar)
          const imgUrl = await img.ref.getDownloadURL()
          user.updateProfile({
            displayName:vals.name,
            photoURL:imgUrl
          }).then(() => {
            user.updatePassword(vals.password).then(() => {
              updateDocument(user.uid,{
                displayName:vals.name,
                photoURL:imgUrl,
                online:true,
                userid: user.uid
              })
              alert("updated successfully")
              navigate("/")
            }).catch(err => setError("unable to update! Please try again"))
          }).catch((err) => setError("unable to update! Please try again"))
          console.log(vals);
        }}
      >
        <Flex
          justifyContent={"space-between"}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading
                fontFamily={"poppins"}
                fontSize={"4xl"}
                textAlign={"center"}
              >
                Update your details
              </Heading>
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
                    isDisabled
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
                    Update details
                  </Button>
              </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Formik>
      </Flex>
      </Flex>
      </Flex>
  );
};

export default Settings;
