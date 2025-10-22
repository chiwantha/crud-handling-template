import { dummyUsers } from "@/constant/dummyData";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const users = dummyUsers;
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error !" },
      { status: 500 }
    );
  }
};
