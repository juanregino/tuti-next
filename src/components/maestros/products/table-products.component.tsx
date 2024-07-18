"use client";
import BasicModal from "@/src/components/modal.component"
import { TableGrid } from "@/src/components/table-grid.component"
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { FormAddProduct } from "./form-add-product.component";
import { Button } from "@mui/material";
import { useState } from "react";
interface Product {
  id: number;
  name: string;
  code: number;
  ean: number;
  uxc: string;
  cxp: string;
  observation: string;
  productType: { name: string };
  unitOfMeasure: { name: string };
}
const columns: GridColDef[] = [
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "code", headerName: "Codigo", width: 110 },
  { field: "ean", headerName: "EAN", width: 110 },
  { field: "uxc", headerName: "UXC", width: 150 },
  { field: "cxp", headerName: "CXP", width: 150 },
  { field: "observation", headerName: "Observacion", width: 200 },
  {
    field: "productType",
    headerName: "Tipo de Producto",
    width: 150,
    valueGetter: (params: GridRenderCellParams) => params.row?.productType?.name || "",
  },
  {
    field: "unitOfMeasure",
    headerName: "Unidad de Medida",
    width: 150,
    valueGetter: (params: GridRenderCellParams) => params.row?.unitOfMeasure?.name || "",
  },
]; 
const rows: Product[] = [
  {
    id: 1,
    name: "Ajo en polvo",
    code: 123,
    ean: 456,
    uxc: "4",
    cxp: "55",
    observation: "ajo en polvo de 500g",
    productType: { name: "Tipo A" },
    unitOfMeasure: { name: "Unidad A" },
  },
  // Más filas aquí...
];

export const TableProducts = () => {

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
  return (
    <div>
      
      <Button
        className="!bg-primary-100 text-white   hover:bg-blue-700   font-semibold mb-5 transition duration-900 capitalize"
        onClick={handleOpen}
      >
       Agregar Producto
      </Button>
      <BasicModal open={open} handleClose={handleClose} >
        <FormAddProduct handleClose={handleClose} />
      </BasicModal>
      <TableGrid isLoading={false} rows={rows} columns={columns} />
    </div>
  );
}
