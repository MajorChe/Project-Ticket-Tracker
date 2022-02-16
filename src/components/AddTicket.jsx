import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  // Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useFireStore } from "../hooks/useFireStore";
import Select from "react-select";

const AddTicket = (props) => {
  const {user} = useAuthContext();
  const { documents, error } = useCollection("users");
  const {addDocument, response} = useFireStore("projects");
  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [team, setTeam] = useState({});

  const Options = documents ? documents.map(item => {
    return ({value: item.displayName, id: item.userid, avatar: item.photoURL, label: item.displayName})
  }) : null;

  return (
    <>
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={() => {
          const vals = { projectName, projectDescription, team };
          console.log("these are vals", vals);
          addDocument({
            projectName,
            projectDescription,
            team,
            createdBy: user.uid
          });
          props.onClose();

        }}
      >
        <Modal
          isOpen={props.isOpen}
          onClose={props.onClose}
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent as={Form}>
            <ModalHeader>Add Ticket</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Project name</FormLabel>
                <Input
                  placeholder="Enter project name"
                  name="name"
                  onChange={(e) => setProjectName(e.target.value)}
                  isRequired
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Project Description</FormLabel>
                <Textarea
                  placeholder="Enter project description"
                  name="description"
                  onChange={(e) => setProjectDescription(e.target.value)}
                  isRequired
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Project Contributors</FormLabel>
                <Select 
                  options={Options}
                  onChange={setTeam}
                  isMulti
                  isSearchable
                  maxMenuHeight={"180px"}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={props.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Formik>
    </>
  );
};

export default AddTicket;
