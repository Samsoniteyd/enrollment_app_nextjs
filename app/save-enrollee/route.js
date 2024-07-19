import { NextResponse } from "next/server";

// pages/api/save-enrollee.js
let enrollees = [];

export async function POST(req, res) {
  if (req.method === 'POST') {
    const data = await req.json();
    // const formData = await request.formData()
//   const firstName = data.get('firstName')
//   const lastName = data.get('lastName')
//   const email = data.get('email')
//   const enrolleeId= data.get("enrolleeId")
  
//   return Response.json({ name, email })

    console.log("here"+data)

    // Add new enrollee to the in-memory storage
    enrollees.push({ ...data});
    console.log(enrollees)


    return NextResponse.json({ message: 'Enrollee added successfully' });
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}

export { enrollees };