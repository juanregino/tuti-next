"use client";
import FileUploaderBox from "./file-uploader-box.component";
import BasicModal from "../modal.component"
import { useState } from "react";
import { Button } from "@mui/material";


export const DragAndDrop = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        className="!bg-primary-100 text-white   hover:bg-blue-700   font-semibold mb-5 transition duration-900 capitalize"
        onClick={handleOpen}
      >
        Cargar Archivo
      </Button>
      <BasicModal open={open} handleClose={handleClose} >
        <FileUploaderBox
          extensions={[".xlsx", ".xls"]}
          onFileUpload={function (files: File[]): void {}}
        />
      </BasicModal>
    </>
  );
}
