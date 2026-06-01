'use client'
import { useState } from 'react'
import { Upload } from 'lucide-react'
export default function Uploader({folder='nyayasutra', label='Upload File', onUploaded}){
 const [status,setStatus]=useState('')
 async function upload(e){ const file=e.target.files?.[0]; if(!file) return; setStatus('Uploading...'); const fd=new FormData(); fd.append('file',file); fd.append('folder',folder); const res=await fetch('/api/upload',{method:'POST',body:fd}); const data=await res.json(); if(data.success){ setStatus('Uploaded successfully'); onUploaded?.(data.url,data) } else { setStatus(data.message || 'Upload failed. Add Cloudinary ENV variables.') } }
 return <div><label className="label">{label}</label><label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-gold-500/40 bg-white/5 p-5 text-center text-sm text-ivory/75 hover:bg-white/10"><Upload size={18}/> Choose file<input type="file" className="hidden" onChange={upload}/></label>{status&&<p className="mt-2 text-xs text-gold-300">{status}</p>}</div>
}
