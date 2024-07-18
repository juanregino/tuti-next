import { cookies } from "next/headers";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const page = req.nextUrl.searchParams.get("page");
  
  if (req.method === "GET") {
    const token = cookies().get("token")?.value;

    try {
      const response = await fetch(
        `https://apiqa-logistica.addiis.com.co/reception-scanned-products?page=${page}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          } as HeadersInit,
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return Response.json(data);
    } catch (error: any) {
      return Response.json({ message: "error, " + error.message });
    }
  } else {
    // Método no soportado
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
