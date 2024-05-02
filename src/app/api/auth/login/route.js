import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { username, password } = body;
    if (username === "guest" && password === "123456") {
      return NextResponse.json({
        status: 200,
        user: {username:"guest", name:"P Hero", photoURL:"https://picsum.photos/200/300",},
        message: "Login successful.",
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Wrong username or password.",
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};
