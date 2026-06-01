import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
const secret = process.env.JWT_SECRET || 'nyayasutra-dev-secret-change-me'
export function signAdmin(email){ return jwt.sign({ email, role:'admin' }, secret, { expiresIn:'7d' }) }
export function verifyAdmin(){
  try { const token = cookies().get('nyaya_admin')?.value; if(!token) return null; return jwt.verify(token, secret) } catch { return null }
}
