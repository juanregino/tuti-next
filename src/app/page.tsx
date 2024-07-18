import { redirect } from "next/navigation";
import nookies from "nookies";

export default function Home() {
  const accessDenied = nookies.get(null).token === undefined;
  if (accessDenied) {
    redirect('/login');
  }
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
