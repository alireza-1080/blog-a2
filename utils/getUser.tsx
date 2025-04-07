import { cookies } from "next/headers";

type UserType = {
  id: string;
  email: string;
  image: string;
  role: string;
  username: string;
};

const getUser = async (): Promise<UserType | null> => {
  const cookieStore = await cookies();
  const authTokenCookie = cookieStore.get("auth_token");

  const auth_token = authTokenCookie?.value || "";

  try {
    const response = await fetch("https://blog-a2.vercel.app/api/user/get-me", {
      method: "POST",
      credentials: "include",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });

    const data = await response.json();

    const user = data.user;

    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
    return null;
  }
};

export type { UserType };
export default getUser;
