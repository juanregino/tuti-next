import { useState } from "react";
import { TableDetailsCard } from "../table-details-card.component";
import { Button } from "@mui/material";

interface CardDetailsProps {
  initialPallets: number;
}

const headers = ["Item", "Dispo", "Cantidad", "UM"];
const rows = [
  ["Ajo en polvo", "Dispo", "1", "UM"],
  ["Ajo en polvo", "Dispo", "1", "UM"],
  ["Ajo en polvo", "Dispo", "1", "UM"],
  ["Ajo en polvo", "Dispo", "1", "UM"],
];

export const CardDetailsOp = ({ initialPallets }: CardDetailsProps) => {

  const [pallets, setPallets] = useState(initialPallets);
   const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSelectSize = (size : string) => {
    setSelectedSize(size);
    console.log(selectedSize)
  };
  const hanleIncrement = () => {
    setPallets(pallets + 1);
  };
  const handleDecrement = () => {
    if (pallets === 0) return;
    setPallets(pallets - 1);
  };
  return (
    <div className="modal-content d flex flex-col justify-center items-center">
      <div className="modal-header w-full mb-4 flex justify-between">
        <h2 className="font-semibold mb-2 text-xl text-left">
          Detalles de Pedido
        </h2>
        <div className="bg-slate-700/30 rounded-md p-2 font-normal text-sm">
          Numero De Pallets:
          <span>{pallets}</span>
        </div>
      </div>
      <div className="modal-body w-full">
        <TableDetailsCard th={headers} data={rows} />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 ">
            <button
              onClick={handleDecrement}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-700 text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-primary-100 dark:hover:bg-blue-700"
            >
              -
            </button>

            <input
              type="text"
              className="text-center text-black bg-gray-200 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-[50px]"
              value={pallets}
              onChange={(e) => setPallets(Number(e.target.value))}
            />

            <button
              onClick={() => setPallets(pallets + 1)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-primary-100 dark:hover:bg-blue-700"
            >
              +
            </button>
            <div>
              <span
                className={`text-sm text-white rounded-lg border border-spacing-3 p-2 cursor-pointer ${
                  selectedSize === "XL" ? "bg-blue-600" : "bg-primary-100"
                }`}
                onClick={() => handleSelectSize("XL")}
              >
                XL
              </span>
              <span
                className={`text-sm text-white rounded-lg border border-spacing-3 p-2 cursor-pointer ${
                  selectedSize === "L" ? "bg-blue-500" : "bg-primary-100"
                }`}
                onClick={() => handleSelectSize("L")}
              >
                L
              </span>
            </div>
          </div>

          <Button
            // onClick={handleUpdate}
            className="bg-indigo-600 text-white rounded-lg px-2 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-primary-100 dark:hover:bg-blue-700"
          >
            Actualizar Pallets
          </Button>
        </div>
      </div>
    </div>
  );
};
