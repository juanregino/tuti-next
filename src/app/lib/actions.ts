'use server'

import { signIn } from "@/src/auth/custom";
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";
 
export async function deleteToken(request: NextRequest, response: NextResponse) {
  cookies().getAll()
  console.log(cookies().getAll())
}

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}