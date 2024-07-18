import {NavBar,SideBar} from "@/src/components";
export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getSession();

  return (
    <main className="flex flex-col h-screen w-full bg-[#eee]">
      <NavBar />
      <div className="flex min-h-screen  sm:w-fit">
        <SideBar />
        <div className="p-2 sm:p-4 sm:w-[80vw] mx-auto sm:m-0">{children}</div>
      </div>
    </main>
  );
}
