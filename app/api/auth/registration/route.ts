import { NextResponse } from "next/server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prismadb from "@/lib/db";

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
      throw new Error("Something went wrong");
    }

    let dbUser = await prismadb.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      dbUser = await prismadb.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          imageSrc:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    return NextResponse.redirect("http://localhost:3000");
  } catch (error) {
    console.error("Error in registration route:", error);
    throw new Error("Something went wrong!");
  }
}
