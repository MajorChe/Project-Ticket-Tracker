import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { timestamp } from "../firebase/Config";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useFireStore } from "../hooks/useFireStore";
import Moment from "react-moment";

const ProjectCommentComponent = (props) => {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const { updateDocument, response } = useFireStore("projects");

  return (
    <>
      <Flex
        width={{base:"90%", md:"full"}}
        marginX={{ base: "4", md: "12" }}
        // px={{base:"2",md:"none"}}
        marginY={{ base: "4", md: "2" }}
        p="5"
        bg={useColorModeValue("gray.100", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        height="500px"
        overflowY={"scroll"}
        flexDirection={"column"}
        
      >
        {/* {comments} */}
        <Flex direction={"column"} gap="3">
          {props.document.comments.length > 0 &&
            props.document.comments.map((comment) => (
              <Box key={comment.id}>
                <Flex gap="2">
                  <Tooltip
                    label={comment.displayName}
                    bg="blue.100"
                    color="black"
                  >
                    <Avatar size={"xs"} src={comment.photoURL} />
                  </Tooltip>
                  <Text flexGrow={1} fontSize="xs">{comment.content}</Text>
                  <Text fontSize={"xs"} fontStyle="italic">
                    <Moment fromNow unix>
                      {comment.createdAt.seconds}
                    </Moment>
                  </Text>
                </Flex>
                <Divider />
                <Divider />
              </Box>
            ))}
        </Flex>
      </Flex>
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
            comments: [...props.document.comments, commentToAdd],
          });
          if (!response.error) {
            setNewComment("");
          }
        }}
      >
        <Flex as={Form} gap="3" alignSelf={{base:"center", md:"start"}} ml={{base: "5", md:"50px"}} align={"center"}>
          <Input
            type={"text"}
            placeholder="Enter comment"
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            isRequired
            bg={useColorModeValue("white", "gray.800")}
            border="2px solid red"
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
    </>
  );
};

export default ProjectCommentComponent;
