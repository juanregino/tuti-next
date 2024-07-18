import { baseURL } from "../../baseURL";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { user, password } = await req.json();
      if (user !== "test1" || password !== "test1") {
        return Response.json({ message: "error, invalid credentials" });
      }

      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      if (!response.ok) {
        return Response.json({ message: `error, ${response.statusText}` });
      }

      const data = await response.json();

      if (data.token) {
        // Set jwt token in cookies
        cookies().set({
          name: "token",
          value: data.token,
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
          httpOnly: true,
        });
      }

      return Response.json({
        message: "Success",
        response: data,
        status: response.status,
      });
    } catch (error: any) {
      return Response.json({ message: `error, ${error.message}` });
    }
  } else {
    // Método no soportado
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
