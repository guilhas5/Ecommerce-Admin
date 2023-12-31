import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


type Props = {
  children: React.ReactNode;
  params: { storeId: string };
}


export default async function DashboardLayout({children,params} :Props)
 {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in")
  }
  const store = await prismadb.store.findFirst({
    where: {
      id:params.storeId,
      userId: userId
    }
  })

  if (!store) {
    redirect("/")
  }

    return (

      <>
      <Navbar />
      {children}
</>
    )
  
}
