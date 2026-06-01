'use client'
import { useState } from 'react'
import { languages } from '@/lib/constants'
function setCookie(name,value){ document.cookie = `${name}=${value};path=/;max-age=31536000` }
export default function LanguageSelector(){
  const [lang,setLang]=useState('en')
  function change(code){
    setLang(code)
    setCookie('googtrans', `/en/${code}`)
    if(typeof window !== 'undefined') window.location.reload()
  }
  return <select value={lang} onChange={e=>change(e.target.value)} className="rounded-full border border-gold-500/30 bg-navy-900 px-3 py-2 text-sm text-ivory">
    {languages.map(([code,label])=><option key={code} value={code}>{label}</option>)}
  </select>
}
