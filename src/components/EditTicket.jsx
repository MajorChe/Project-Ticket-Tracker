import {
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
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFireStore } from "../hooks/useFireStore";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useTicketDoc } from "../hooks/useTicketDoc";

const EditTicket = (props) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { document, error } = useTicketDoc("tickets", id);
  const { updateDocument, response } = useFireStore("tickets");
  const [ticketName, setTicketName] = useState();
  const [ticketDescription, setTicketDescription] = useState();
  const [devs, setDevs] = useState([]);
  const [timeEstimate, setTimeEstimate] = useState(0);
  const [type, setType] = useState();
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  const teamOptions = document
    ? document.project.assignedUsers.map((item) => {
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
        initialValues={{ ticketName:"" }}
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
          const editedby = document ? document.editedBy : "";
          updateDocument(id,{
            ticketName,
            ticketDescription,
            assignedDevs,
            assignedDevsID,
            timeEstimate,
            type,
            priority,
            status,
            editedBy:[...editedby,user.uid]
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
            <ModalHeader>Edit Ticket</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Ticket name</FormLabel>
                <Input
                  placeholder={document ? document.ticketName : ""}
                  name="ticketName"
                  onChange={(e) => setTicketName(e.target.value)}
                  isRequired
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Ticket Description</FormLabel>
                <Textarea
                  placeholder={document ? document.ticketDescription : ""}
                  name="ticketDescription"
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
                Update
              </Button>
              <Button onClick={props.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Formik>
    </>
  );
};

export default EditTicket;
