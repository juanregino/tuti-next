"use client";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import BasicModal from "../modal.component";
import { TableGrid } from "../table-grid.component";
import { CardDetailsIm } from "./card-details-im.component";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Image from "next/image";
import { useState } from "react";
interface RowData {
  id: number;
  codigo: string;
  image: string;
  tienda: string;
}
const detailsIm = [
  {
    label: "Canal",
    value: "canal 2",
  },
  {
    label: "Anden",
    value: "31063",
  },
];
const actionsIm = [
  <Button
    key={Date.now()}
    variant="contained"
    className="bg-primary-100 hover:bg-secundary-100 hover:text-black"
    size="small"
    startIcon={<Edit />}
  >
    Editar
  </Button>,
];

const rows = [
  {
    id: 1,
    codigo: "123456789",
    tienda: "Ecuador",

    image: "/tuti-logo.png",
  },
  {
    id: 100,
    codigo: "100",
    tienda: "Tuti",

    image: "/tuti-logo.png",
  },
];
export const TableInternalMovement = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  const handleOpen = (row: RowData) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setOpen(false);
  };
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", headerclassNameName: "text-center", disableColumnMenu: true },
    { field: "codigo", headerName: "Codigo" },
    {
      field: "image",
      headerName: "Imagen",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Image
            key={params.row.id}
            src={params.value}
            alt="imagen"
            width={50}
            height={50}
          />
        );
      },
    },
    { field: "tienda", headerName: "Tienda" },

    {
      field: "action",
      headerName: "Detalles",

      renderCell: (params: GridRenderCellParams) => {
        return (
          <Button
            className="!bg-primary-100 text-white hover:bg-blue-700 font-semibold transition duration-300 capitalize"
            onClick={() => handleOpen(params.row)}
          >
            Ver Detalles
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <BasicModal open={open} handleClose={handleClose}>
        {selectedRow && (
          <CardDetailsIm
            title={selectedRow.tienda}
            details={detailsIm}
            actions={actionsIm}
          />
        )}
      </BasicModal>
      <TableGrid isLoading={false} rows={rows} columns={columns} />;
    </>
  );
};
