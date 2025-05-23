// filepath: d:\Project\NEXTJS\analytics-hub-project\src\app\page.tsx  
import { redirect } from "next/navigation";  
import { getServerSession } from "next-auth";  
import { authOptions } from "@/lib/auth";  
  
export default async function Home() {  
  const session = await getServerSession(authOptions);  
  
  // Redirect authenticated users to home, unauthenticated users to login  
  if (session) {  
    redirect('/home');  
  } else {  
    redirect('/login');  
  }  
  
  // The below code will never execute, but is needed for TypeScript  
  return null;  
}  
