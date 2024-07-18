
export interface orderProducts {
  id: string;
  productLocation: {
    product: {
      id: string;
      ean: string;
      code: string;
      description: string;
    };
    warehouseLocation: {
      id: string;
      code: string;
      description: string;
      sector: string;
      space: string;
    };
  };
  expirationDate: string;
  manufactureDate: string;
}

export const orderProductsAdapter = (data: orderProducts[]) => {
  return data.map((e) => {
    console.log(e)
    return {
      
      id: e.id,
      sku: e.productLocation.product.code,
      ean: e.productLocation.product.ean,
      description: e.productLocation.product.description,
      location: e.productLocation.warehouseLocation.code,
      space: e.productLocation.warehouseLocation.space,
      expiration: e.expirationDate,
      // dispo: e.productLocation.product.locations.prefrix,
    };
  });
};