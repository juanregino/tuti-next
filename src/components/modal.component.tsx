
import React, { useState } from "react";
import Box from "@mui/material/Box";


import Modal from "@mui/material/Modal";

interface Props {
  className?: string;
  children?: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: "h-dvh",
  bgcolor: "background.paper",
  border: "rounded-lg",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({className , children , open, handleClose }: Props ){


  return (
    <div className= {className}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {children}
        </Box>
      </Modal>
    </div>
  );
}
