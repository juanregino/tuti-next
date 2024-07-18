export interface LastProductsScanned {
  id: string;
  expirationDate: string;
  manufactureDate: string;
  usefulLife: number;
  receptionPercentage: number;
}

// Función para adaptar la respuesta JSON a la interfaz LastProductsScanned
export const lastScannedAdapter = (data: any) => {
  
  return data.map((e: LastProductsScanned) => {
    return {
      id: e.id,
      expirationDate: e.expirationDate,
      manufactureDate: e.manufactureDate,
      usefulLife: e.usefulLife,
      receptionPercentage: e.receptionPercentage,
    };
  });
};