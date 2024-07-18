import { useEffect, useState } from "react";
import { LastProductsScanned } from "../adapters/last-scanned-adapter";


export const useGetAll = () => {
  const [lastScanned, setLastScanned] = useState<LastProductsScanned[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleIsLoading = (newState: boolean) => {
    setIsLoading(newState);
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      const response = await fetch("/api/products/last-scanned");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLastScanned(data.content);
    } catch (error) {
      console.error("Fetch error: ", error);
    } finally {
      handleIsLoading(false);
    }
  };

  return { isLoading, lastScanned };
};
