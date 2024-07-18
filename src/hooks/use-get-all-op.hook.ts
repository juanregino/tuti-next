import axios from "axios";
import { useEffect, useState } from "react";
import { orderProducts } from "../adapters/op-adapter";

export const useGetAll = () => {
  const [orderProducts, setOrderProducts] = useState<orderProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleIsLoading = (newState: boolean) => {
    setIsLoading(newState);
  };

  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    const response = await axios.get("/api/products/last-scanned");
    const { content } = response.data;
    setOrderProducts(content);
    handleIsLoading(false);
  };
  return { isLoading, orderProducts };
};
