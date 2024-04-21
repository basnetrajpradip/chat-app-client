import LoginForm from "@/components/authForm/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <LoginForm />;
}
