import connectDB from "@/db/connectDB";
import User from "@/model/schema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body || !body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const newMessage = new User({
      fullName: body.fullName,
      email: body.email,
      message: body.message,
    });

    await newMessage.save();

    
    return NextResponse.json(
      { success: true, message: "Message saved successfully" },
      { status: 200 }
    );

  } catch (e) {
    // Log the error and return the error response
    console.log("Error:", e.message);
    return NextResponse.json(
      { success: false, error: e.message },
      { status: 500 }
    );
  }
}
