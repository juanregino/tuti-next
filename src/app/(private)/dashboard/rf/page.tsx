"use client";
import "@/src/app/globals.css";
import "@/src/app/lib/actions";
import ExpirationDateForm from "@/src/components/rf/expiration-date-form";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface ILocation {
  locationCode: string;
  space: string;
  prefix: string;
}

interface IProductData {
  productId: string;
  ean: number;
  productCode: string;
  productDescription: string;
  cxp: string;
  quantityUxc: string;
  locations: ILocation[];
}

const initialState: IProductData = {
  productId: "",
  ean: 0,
  productCode: "",
  productDescription: "",
  cxp: "",
  quantityUxc: "",
  locations: [],
};

export default function RFPage() {
  const [data, setData] = useState<any>(initialState);
  const [exist, setExist] = useState<number>(2);
  const [loader, setLoader] = useState<Boolean>(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: { ean: "" },
  });

  const onSubmit: SubmitHandler<{ ean: string }> = async (data) => {
    try {
      setLoader(true);
      const res = {
        productId: "123456789",
        ean: 456,
        productCode: "123456789",
        description: "ajo en polvo de 500g",
        cxp: "4",
        quantityUxc: "1",
        locations: [
          {
            locationCode: "123456789",
            space: "Anden 5",
            prefix: "123456789",
          },
        ],  
      }
     
      reset({ ean: "" });
      if (!res) {
       
        setExist(1);
        setData(res);
        toast.error("Producto no existe", {
          position: "top-center",
          duration: 4000,
        });
        return;
      }
      
      setData(res);
    } catch (error: any) {
      setExist(3);
      
    } finally {
      setLoader(false);
    }
  };
   console.log(data)
  const productEANLayout = data?.ean && <td>{data.ean}</td>;
  const descriptionProductLayout = data?.productDescription && (
    <td>{data.productDescription}</td>
  );
  const productCxpLayout = data?.cxp && <td>{data.cxp}</td>;
  const productUxcLayout = data?.quantityUxc && <td>{data.quantityUxc}</td>;
  const productCodeLayout = data?.productCode && <td>{data.productCode}</td>;
  const locationLayout = data?.locations.map((location:string, index: number)  => (
    <tr key={index} className="text-3xl p-0">
      <td>{1000}</td>
      <td>{1000}</td>
    </tr>
  ));
  const productId = data?.productId;

  const productDetails =
    exist === 0 ? (
      <p>Escanee un producto</p>
    ) : exist === 1 ? (
      <p>Producto no existe</p>
    ) : exist === 2 ? (
      <>
        <table className="table-auto mb-1 sm:w-auto">
          <tbody>
            <tr className="float-none">
              <td className="align-top pe-5 text-right font-semibold">EAN:</td>
              {productEANLayout}
            </tr>
            <tr>
              <td className="align-top pe-5 text-right font-semibold">
                Descripción:
              </td>
              {descriptionProductLayout}
            </tr>
            <tr>
              <td className="align-top pe-5 text-right font-semibold">SKU:</td>
              {productCodeLayout}
            </tr>
            <tr className="w-full">
              <td className="pe-5 text-right font-semibold">CXP:</td>
              {productCxpLayout}
            </tr>
            <tr className="w-full">
              <td className="pe-5 text-right font-semibold">UXC:</td>
              {productUxcLayout}
            </tr>
          </tbody>
        </table>
        {/* Fecha de vencimiento */}
        <ExpirationDateForm productLocationId={productId} />
        {/* Ubicación */}
        <table className="table-auto w-full border-spacing-x-8 border-separate rounded border-solid border-2 border-slate-300 dark:border-slate-300 text-center px-2 pb-3">
          <tbody>
            <tr className="bg-slate-300 dark:text-black font-medium rounded -translate-y-3">
              <td className="rounded">Ubicación</td>
              <td className="rounded">Dispo</td>
            </tr>
            {locationLayout}
          </tbody>
        </table>
      </>
    ) : (
      <p>Error en la petición</p>
    );

  return (
    <div className="w-full sm:w-fit sm:mx-0 flex p-5 flex-col place-items-center rounded border-solid border-2 border-slate-300 bg-slate-50 dark:bg-primary-100 dark:border-gray-700 dark:text-white">
      <h1 className="mb-2 font-semibold">Ubicación de productos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="ean"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              className="w-full sm:w-80 mb-8 text-center rounded border-solid border-2 border-inherit focus-visible dark:text-slate-900"
              placeholder="Código de barras"
              autoFocus
              {...field}
            />
          )}
        />
      </form>
      <h1 className="mb-1 font-semibold">Detalles</h1>
      <hr className="w-full mb-2 color-gray" />
      {loader ? <Skeleton /> : productDetails}
    </div>
  );
}
