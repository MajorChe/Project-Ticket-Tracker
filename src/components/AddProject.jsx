import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, useDisclosure } from "@chakra-ui/react";
import { Form } from "formik";
import React from "react";

const AddProject = (props) => {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Project name</FormLabel>
              <Input placeholder="Enter project name" isRequired/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Project Description</FormLabel>
              <Textarea placeholder='Enter project description' isRequired/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Project Contributors</FormLabel>
              <Select placeholder='choose'>
                <option value='Ironman'>Ironman</option>
                <option value='Thor'>Thor</option>
                <option value='Hulk'>Hulk</option>
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
    </>
  );
};

export default AddProject;
