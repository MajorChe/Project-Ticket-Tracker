import {
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
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useFireStore } from "../hooks/useFireStore";

const AddProject = (props) => {
  const {user} = useAuthContext();
  const { documents, error } = useCollection("users");
  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [team, setTeam] = useState({});

  // storing the selected team members in an array with id
  const handleChange = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setTeam({
      options: value,
    });
  };

  //looping over documnets to get user id and name for select dropdown
  const Options = documents ? documents.map(userItem => {
    return <option value={userItem.id} key={userItem.id}>{userItem.displayName===user.displayName? "You" : userItem.displayName}</option>
  }) : null

  return (
    <>
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={() => {
          const vals = { projectName, projectDescription, team };
          console.log("these are vals", vals);
          props.onClose()

        }}
      >
        <Modal
          isOpen={props.isOpen}
          onClose={props.onClose}
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent as={Form}>
            <ModalHeader>Create New Project</ModalHeader>
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
                  multiple
                  style={{ height: "100px" }}
                  name="team"
                  onChange={handleChange}
                  icon="false"
                >
                  {Options}
                  {/* <option value="Ironman">Ironman</option>
                  <option value="Thor">Thor</option>
                  <option value="Hulk">Hulk</option>
                  <option value="Thor">Thor</option>
                  <option value="Hulk">Hulk</option>
                  <option value="Thor">Thor</option>
                  <option value="Hulk">Hulk</option> */}
                </Select>
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

export default AddProject;
