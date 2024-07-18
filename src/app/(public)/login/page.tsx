"use client";

import { Controller, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { LoginForm } from "../../../interfaces/login.interface";
import Image from "next/image";
import nookies from "nookies";
import { toast, Toaster } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  //check if token is present
  //if yes redirect to dashboard
  const token = nookies.get(null).token;
 
  if (token) {
    // router.push('/dashboard');
    router.push("/dashboard/");
  }

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (result.ok) {
        // Manejo de login exitoso
        const response = await result.json();
        if (response.status === 200 && response.message === "Success") {
          // redirect to dashboard
          router.push("/dashboard/rf");
          toast.success("Inicio de sesión exitoso", {
            duration: 3000,
            position: "top-center",
          })
        } else {
          // Manejo de errores de login
          
          toast.error("Error: credenciales invalidas", {
            duration: 3000,
            position: "top-center",
          });
        }
      } else {
       
        // Manejo de errores de login
    
      }
    } catch (error) {
      // handle error here
      console.log(error);
      toast.error("Error de inicio de sesión");
    }
  });

  return (
    <section className="bg-gray-50 dark:bg-primary-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-svh lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <a
            href="#"
            className="flex justify-center items-center text-xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src="/tuti-logo.png"
              alt="logo"
              width={120}
              height={8}
              priority
            />
          </a>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Ingresa a tu cuenta
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={onSubmit}
            >
              <div>
                <label
                  htmlFor="user"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Correo Electronico
                </label>
                <Controller
                  name="user"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      id="user"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="****"
                      required
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Recordarme
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline text-gray-500 dark:text-gray-300"
                >
                  Olvidé contraseña
                </a>
              </div>
              <button
                type="submit"
                // onClick={onClick}
                className="w-full text-black bg-secundary-100/75 hover:bg-secundary-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-800"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
