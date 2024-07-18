"use client";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { TableGrid } from "../table-grid.component";
import BasicModal from "../modal.component";
import { CardDetailsOp } from "./card-details-op.component";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
interface RowData {
  id: number;
  numero_pedido: number;
  image: string;
  codigo_de_tienda: string;
  fecha: string;
  pallets: number;
  estado: string;
}

const rows: RowData[] = [
  {
    id: 1,
    numero_pedido: 1,
    image: "/tuti-logo.png",
    codigo_de_tienda: "123456789",
    fecha: "2023-01-01",
    pallets: 5,
    estado: "Pendiente",
  },
  {
    id: 2,
    numero_pedido: 2,
    image: "/tuti-logo.png",
    codigo_de_tienda: "123456789",
    fecha: "2023-01-01",
    pallets: 1,
    estado: "Entregado",
  },
];
export const TableOp = () => {
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
    { field: "numero_pedido", headerName: "N° Pedido" },
    {
      field: "image",
      headerName: "Imagen",
      renderCell: (params: GridRenderCellParams) => {
        return <Image src={params.value} alt="imagen" width={50} height={50} />;
      },
    },
    { field: "codigo_de_tienda", headerName: "Código de Tienda", width: 200 },
    { field: "fecha", headerName: "Fecha" },
    {
      field: "pallet",
      headerName: "Pallets",

      renderCell: (params: GridRenderCellParams) => {
        return <span className="text-md text-black">{params.row.pallets}</span>;
      },
    },

    { field: "estado", headerName: "Estado", width: 100 },

    {
      field: "action",
      headerName: "Detalles",
      width: 200,
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
        {selectedRow && <CardDetailsOp initialPallets={selectedRow.pallets} />}
      </BasicModal>
      <TableGrid isLoading={false} rows={rows} columns={columns} />
    </>
  );
};
