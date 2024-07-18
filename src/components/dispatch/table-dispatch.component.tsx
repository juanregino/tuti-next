"use client";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { TableGrid } from "../table-grid.component"
import { Button } from "@mui/material";
import { useState } from "react";
import BasicModal from "../modal.component";
interface RowData {
  id: number;
  store_number: number;
  name: string;
  route: string;
  channel: string;
  platform: string;
  vehicle: string;
  driver: string;
}
const rows = [
  {
    id: 1,
    store_number: 1,
    name: "Tuti",
    route: "Ruta 1",
    channel: "Canal 1",
    platform: "Anden 1",
    vehicle: "Vehiculo 1",
    driver: "Conductor 1",
  },
  {
    id: 100,
      store_number: 2,
      name: "Tuti",
      route: "Ruta 2",
      channel: "Canal 2",
      platform: "Anden 2", 
      vehicle: "Vehiculo 2",
      driver: "Conductor 2",
  },
];


export const TableDispatch = () => {
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
    { field: "store_number", headerName: " # Tienda" },
    { field: "name", headerName: "Nombre" },
    { field: "route", headerName: "Ruta" },
    { field: "channel", headerName: "Canal" },
    { field: "platform", headerName: "Anden" },
    {
      field: "vehicle",
      headerName: "Vehiculo",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <select className="bg-slate-200 dark:text-slate-900 font-medium text-center rounded border-solid border-2 border-slate-300 dark:border-slate-300  px-2 py-3">
            <option defaultChecked>Seleccione un Vehiculo</option>
            <option value={params.row.vehicle}>{params.row.vehicle}</option>
          </select>
        );
      },
    },
    {
      field: "driver",
      headerName: "Conductor",
      renderCell: (params: GridRenderCellParams): React.ReactNode => {
        return (
          <select className="bg-slate-200 dark:text-slate-900 font-medium text-center rounded border-solid border-2 border-slate-300 dark:border-slate-300  px-2 py-3">
            <option defaultChecked>Seleccione un Vehiculo</option>
            <option value={params.row.vehicle}>{params.row.vehicle}</option>
          </select>
        );
      },
    },
    {
      field: "action",
      headerName: "Detalles",
      width: 200,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="flex space-x-2">
            <Button className="!bg-yellow-500 text-black hover:bg-yellow-400 font-semibold transition duration-300 capitalize"
              onClick={() => handleOpen(params.row)}
            >
              Editar
            </Button>
            <Button className="!bg-primary-100 text-white hover:bg-blue-700 font-semibold transition duration-300 capitalize">
              Guardar
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <h1 className="font-semibold text-2xl text-center my-4">
        Despacho
      </h1>

     
        <BasicModal open={open} handleClose={handleClose}>
          {selectedRow && (
           <h1 > Detalles de la Pedido</h1>
          )}
        </BasicModal>

      <TableGrid isLoading={false} rows={rows} columns={columns} />
    </div>
  )
}
