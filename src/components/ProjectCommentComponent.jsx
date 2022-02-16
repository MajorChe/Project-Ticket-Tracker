import {
  Box,
  Button,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { timestamp } from "../firebase/Config";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { useFireStore } from "../hooks/useFireStore";

const ProjectCommentComponent = (props) => {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const { updateDocument, response } = useFireStore("projects");
  console.log("for comments",props.document)
  return (
    <Box
      width={"350px"}
      marginX={{ base: "2", md: "12" }}
      marginY={{ base: "2", md: "2" }}
      p="5"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      height="500px"
      overflowY={"scroll"}
      display="flex"
    >
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={() => {
          const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: uuidv4(),
          };
          console.log(commentToAdd);
          updateDocument(props.document.id, {
            comments:[...props.document.comments, commentToAdd]
          });
          if(!response.error) {
            setNewComment("");
          }
        }}
      >
        <Flex as={Form} gap="3" alignSelf={"flex-end"}>
          <Input
            type={"text"}
            placeholder="Enter comment"
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            isRequired
          />
          <Button
            fontSize={"sm"}
            px="5"
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
            alignSelf={"center"}
          >
            Comment
          </Button>
        </Flex>
      </Formik>
    </Box>
  );
};

export default ProjectCommentComponent;
