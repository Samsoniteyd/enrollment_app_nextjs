// pages/api/get-enrollees.js
import { NextResponse } from 'next/server';
import { enrollees } from '../save-enrollee/route';
// import { enrollees } from './save-enrollee';

export async function GET(req, res) {
  if (req.method === 'GET') {
    return NextResponse.json({ enrollees });
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}