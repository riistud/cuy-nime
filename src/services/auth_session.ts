import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function authUserSession() {
  const user = await getServerSession(authOptions);
  return user?.user;
}
