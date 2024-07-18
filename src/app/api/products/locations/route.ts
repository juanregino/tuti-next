import { cookies } from "next/headers";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
const data = {
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
export async function GET(req: NextRequest, res: NextApiResponse) {
  const ean = req.nextUrl.searchParams.get("ean");
  if (req.method === "GET") {
    const token = cookies().get("token")?.value;
    
   return Response.json(data);
  }
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const token = cookies().get("token")?.value;
      const data = await req.json();
      const response = await fetch(`https://apiqa-logistica.addiis.com.co/reception-scanned-products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      return Response.json({
        success: responseData.success,
        message: responseData.message,
        response: responseData.response,
        status: response.status,
      });
    } catch (error: any) {
      return Response.json({ message: `error al guardar fecha de vencimiento, ${error.message}` });
    }
  } else {
    // Método no soportado
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
