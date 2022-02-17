import {
  Alert,
  Button,
  Flex,
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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  // Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFireStore } from "../hooks/useFireStore";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useDoc } from "../hooks/useDoc";

const AddTicket = (props) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { doc } = useDoc("projects",id,user.uid)
  const { addDocument, response } = useFireStore("tickets");
  const [ticketName, setTicketName] = useState();
  const [ticketDescription, setTicketDescription] = useState();
  const [devs, setDevs] = useState([]);
  const [timeEstimate, setTimeEstimate] = useState(0);
  const [type, setType] = useState();
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  const teamOptions = props.document
    ? props.document.assignedUsers.map((item) => {
        return {
          value: item,
          label: item.displayName,
        };
      })
    : null;

  const ticketTypes = [
    { value: "Issue", label: "Issue" },
    { value: "Bug", label: "Bug" },
    { value: "Feature", label: "Feature" },
  ];
  const priorityTypes = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const statusTypes = [
    { value: "Completed", label: "Completed" },
    { value: "InProgress", label: "InProgress" },
    { value: "New", label: "New" },
  ];

  return (
    <>
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={() => {
          const assignedDevs = devs.map(dev => {
            return {
              displayName: dev.value.displayName,
              photoURL: dev.value.photoURL,
              id: dev.value.id
            }
          })
          const assignedDevsID = devs.map((dev) => {
            return dev.value.id;
          });
          // ticketValues is for debugging
          // const ticketVals = {
          //   projectId: id,
          //   ticketName,
          //   ticketDescription,
          //   assignedDevs,
          //   assignedDevsID,
          //   timeEstimate,
          //   type,
          //   priority,
          //   status,
          //   author:user,
          //   comments:[]
          // };
          // console.log("these are vals", ticketVals);

          if (assignedDevs.length < 1) {
            alert("Please assign devs");
            return;
          }
          if (!type) {
            alert("Please assign ticket type");
            return;
          }
          if (!priority) {
            alert("Please assign ticket priority");
            return;
          }
          if (!status) {
            alert("Please assign ticket status");
            return;
          }
          addDocument({
            projectId:id,
            project: doc,
            ticketName,
            ticketDescription,
            assignedDevs,
            assignedDevsID,
            timeEstimate,
            type,
            priority,
            status,
            authorData:[user.displayName,user.photoURL],
            authorId:user.uid,
            comments:[]
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
                <FormLabel>Ticket name</FormLabel>
                <Input
                  placeholder="Enter Ticket name"
                  name="name"
                  onChange={(e) => setTicketName(e.target.value)}
                  isRequired
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Ticket Description</FormLabel>
                <Textarea
                  placeholder="Enter Ticket description"
                  name="description"
                  onChange={(e) => setTicketDescription(e.target.value)}
                  isRequired
                />
              </FormControl>
              <Flex gap={3}>
                <FormControl mt={4}>
                  <FormLabel>Assign Devs</FormLabel>
                  <Select
                    options={teamOptions}
                    onChange={(option) => setDevs(option)}
                    isMulti
                    isSearchable
                    maxMenuHeight={"180px"}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Time Estimate (Hours)</FormLabel>
                  <NumberInput
                    defaultValue={1}
                    precision={2}
                    step={0.5}
                    onChange={(e) => setTimeEstimate(e)}
                    min={0.5}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Flex>
              {/* type priority and status drop down */}
              <Flex gap={3}>
                <FormControl mt={4}>
                  <FormLabel>Type</FormLabel>
                  <Select
                    options={ticketTypes}
                    onChange={(option) => setType(option.value)}
                    maxMenuHeight={"150px"}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    options={priorityTypes}
                    onChange={(option) => setPriority(option.value)}
                    maxMenuHeight={"150px"}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Status</FormLabel>
                  <Select
                    options={statusTypes}
                    onChange={(option) => setStatus(option.value)}
                    maxMenuHeight={"150px"}
                  />
                </FormControl>
              </Flex>
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
