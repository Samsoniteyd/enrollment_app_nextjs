
// import { enrollees } from './save-enrollee';

import { NextResponse } from "next/server";
import { enrollees } from "../save-enrollee/route";

export async function DELETE(req, res) {
  if (req.method === 'DELETE') {
    const { enrolleeId } = await req.json;
    // const data = await req.json();

    // Remove enrollee from the in-memory storage
    const index = enrollees.findIndex(enrollee => enrollee.enrolleeId === enrolleeId);
    if (index !== -1) {
      enrollees.splice(index, 1);
      return NextResponse.json({ message: 'Enrollee deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Enrollee not found' });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}