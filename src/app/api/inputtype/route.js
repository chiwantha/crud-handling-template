import { saveImage } from "@/utils/saveImage";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing for file uploads
  },
};

export const POST = async (request) => {
  try {
    const form = await request.formData();

    const name = form.get("name");
    const file = form.get("file");

    if (file instanceof File) {
      console.log("This Is File !");
      saveImage(file, name, "/uploads/inputtype");
    }

    return NextResponse.json(
      {
        success: "Input Okay !",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: "Internale Server Error !",
      },
      { status: 500 }
    );
  }
};
