"use client";

import { GridColDef } from "@mui/x-data-grid";
import { TableGrid } from "../table-grid.component";

import { lastScannedAdapter } from "@/src/adapters/last-scanned-adapter";
import { useGetAll } from "@/src/hooks/use-get-all-inbox.hook";
const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", headerClassName: "text-center", disableColumnMenu: true },
  { field: "id", headerName: "ID" },
  { field: "expirationDate", headerName: "Fecha de Expiración" },
  { field: "manufactureDate", headerName: "Fecha de Fabricación" },
  { field: "usefulLife", headerName: "Vida Útil" },
  { field: "receptionPercentage", headerName: "Porcentaje de Recepción" },
];
export const TableInbox = () => {
  const { isLoading, lastScanned } = useGetAll();

  return (
    <>
      <TableGrid
        isLoading={isLoading}
        rows={lastScannedAdapter(lastScanned)}
        columns={columns}
      />
    </>
  );
};
