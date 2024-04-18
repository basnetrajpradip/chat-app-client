import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, email, password, confirmPass, avatarId } = await req.json();
    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username: username, email: email, password: hashedPassword, avatarId: avatarId });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}
