"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const sendFiles = async (formdata: FormData) => {
  const token = cookies().get("token")?.value;

  try {
    const { data: response } = await axios.post(
      "http://5.78.79.130:8082/orders/excel/upload",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    );

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};
