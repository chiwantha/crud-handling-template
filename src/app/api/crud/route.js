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

export const POST = async (request) => {
  try {
    const data = await request.formData();
    const image = data.get("image");
    console.log(...data);
    if (image instanceof File) {
      console.log("Its A File !");
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error !" },
      { status: 500 }
    );
  }
};
