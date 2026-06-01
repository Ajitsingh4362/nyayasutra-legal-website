import { NextResponse } from 'next/server'
import { signAdmin } from '@/lib/auth'
export async function POST(req){
  const { email, password } = await req.json()
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@nyayasutra.org'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  if(email !== adminEmail || password !== adminPassword) return NextResponse.json({success:false,message:'Invalid credentials'}, {status:401})
  const res = NextResponse.json({success:true,message:'Admin login successful'})
  res.cookies.set('nyaya_admin', signAdmin(email), { httpOnly:true, sameSite:'lax', secure: process.env.NODE_ENV === 'production', path:'/', maxAge:60*60*24*7 })
  return res
}
