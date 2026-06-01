import { v2 as cloudinary } from 'cloudinary'
import { ok, fail } from '@/lib/apiResponse'
import { verifyAdmin } from '@/lib/auth'
export async function POST(req){
  if(!verifyAdmin()) return fail('Unauthorized',401)
  const fd=await req.formData(); const file=fd.get('file'); const folder=fd.get('folder') || 'nyayasutra';
  if(!file) return fail('No file provided')
  if(!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) return fail('Cloudinary environment variables are missing. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET.')
  cloudinary.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,api_key:process.env.CLOUDINARY_API_KEY,api_secret:process.env.CLOUDINARY_API_SECRET})
  const arrayBuffer=await file.arrayBuffer(); const buffer=Buffer.from(arrayBuffer)
  const result=await new Promise((resolve,reject)=>{ cloudinary.uploader.upload_stream({folder, resource_type:'auto', transformation:[{quality:'auto', fetch_format:'auto'}]}, (err,res)=> err?reject(err):resolve(res)).end(buffer) })
  return ok({url:result.secure_url, publicId:result.public_id, resourceType:result.resource_type})
}
