"use client";
import { TextField, styled } from "@mui/material";
import {
  DataGrid,
  GridFilterModel,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React, { useState } from "react";
interface Props {
  isLoading: boolean;
  rows: any;
  columns: any;
}
interface SearchInputProps {
  setFilterModel: React.Dispatch<React.SetStateAction<GridFilterModel>>;
  searchFields: string[];
}

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
};

export const TableGrid = ({ isLoading, rows, columns }: Props) => {
  // Extrae los nombres de los campos de las columnas

  return (
    <>
      <div style={{ height: "100%", width: "100%", overflow: "scroll" }}>
        <DataGrid
          loading={isLoading}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20, 25]}
          checkboxSelection={false}
          rowSelection= {false}
          slots={{
            toolbar: () => <CustomToolbar />,
          }}
        />
      </div>
    </>
  );
};
