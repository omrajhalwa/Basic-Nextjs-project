import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();


export function GET() {

    return Response.json({
        email: "omraj72470@gmail.com",
        name: "omraj"

    })
}

export async function POST(req: NextRequest) {

    const body = await req.json();
    //console.log(body);
    const response = await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
     console.log(response);
    return Response.json({
        message: "You are Signed Up!"
    })
}

