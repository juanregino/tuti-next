"use client";
import BasicModal from '@/src/components/modal.component';
import { TableGrid } from '@/src/components/table-grid.component'
import { GridColDef } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { FormAddStore } from './form-add-store.component';
import { Button } from '@mui/material';

interface Stores {
  id: number;
  name: string;
  code: string;
  address: string;
  city: string;
  observation: string;
  priority: string;
  ruc: string;
  zone: string;
}
const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Nombre" },
  { field: "code", headerName: "Codigo" },
  { field: "address", headerName: "Direccion" },
  { field: "city", headerName: "Ciudad" },
  { field: "observation", headerName: "Observacion" },
  { field: "priority", headerName: "Prioridad" },
  { field: "ruc", headerName: "RUC" },
  { field: "zone", headerName: "Zona" },
];
const rows: Stores[] = [
  {
    id: 1,
    name: "Tuti",
    code: "123456789",
    address: "Calle 123",
    city: "Guayaquil",
    observation: "Tienda de tuti",
    priority: "Importante",
    ruc: "123456789",
    zone: "Ecuador",
  },
];
export const TableStores = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        className="!bg-primary-100 text-white   hover:bg-blue-700   font-semibold mb-5 transition duration-900 capitalize"
        onClick={handleOpen}
      >
        Agregar Tienda
      </Button>
      <BasicModal open={open} handleClose={handleClose} >
        <FormAddStore
          zones={[]}
         
          onSubmit={function (store: any): void {}}
          handleClose={handleClose}
        />
      </BasicModal>
      <TableGrid isLoading={false} rows={rows} columns={columns} />
    </div>
  );
}
