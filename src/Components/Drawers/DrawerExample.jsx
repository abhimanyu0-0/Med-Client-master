import React, { useState, useRef } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
} from "@chakra-ui/react";

function DrawerExample({ isOpen, onClose }) {
  const btnRef = useRef(null);
  const [finalFocusRef, setFinalFocusRef] = useState(null);

  const handleOpen = () => {
    onClose(true);
    setFinalFocusRef(btnRef.current);
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={handleClose} finalFocusRef={finalFocusRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Email ID" />
            <Input className="mt-5" placeholder="Password" />
            <div className="mt-10">
            <Button variant="outline" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Login</Button>
            </div>
            
          </DrawerBody>
         

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={handleOpen}>
        Open
      </Button> */}
    </>
  );
}

export default DrawerExample;
