'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { site } from '@/lib/constants'
import LanguageSelector from './LanguageSelector'
import SocialLinks from './SocialLinks'
const nav=[['Home','/'],['About','/about'],['Practice Areas','/practice-areas'],['Courts','/courts'],['Internship','/internship'],['Student Courses','/student-courses'],['Gallery','/gallery'],['Blog','/blog'],['Contact','/contact']]
export default function Header(){
 const [open,setOpen]=useState(false)
 return <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-navy-950/94 backdrop-blur-xl">
  <div className="border-b border-gold-500/10 py-2 text-xs text-ivory/80"><div className="container flex flex-wrap items-center justify-between gap-2"><span>New Delhi • Allahabad • Across India</span><div className="flex flex-wrap items-center gap-4"><a className="flex items-center gap-1" href={`tel:${site.phone}`}><Phone size={14}/>{site.phone}</a><a className="flex items-center gap-1" href={`mailto:${site.email}`}><Mail size={14}/>{site.email}</a></div></div></div>
  <div className="container flex items-center justify-between gap-4 py-3">
   <Link href="/" className="flex shrink-0 items-center"><Image src="/logo.png" width={210} height={80} alt="NyayaSutra Logo" className="h-14 w-auto object-contain" priority /></Link>
   <nav className="desktop-nav flex items-center gap-5 text-xs font-bold uppercase tracking-wide">{nav.map(([l,h])=><Link key={h} href={h} className="hover:text-gold-400">{l}</Link>)}</nav>
   <div className="desktop-nav flex items-center gap-3"><LanguageSelector/><SocialLinks small /></div>
   <button className="mobile-menu rounded-lg border border-gold-500/30 p-2" onClick={()=>setOpen(!open)} aria-label="Open menu">{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="mobile-menu border-t border-gold-500/20 bg-navy-900 p-4"><div className="grid gap-3">{nav.map(([l,h])=><Link onClick={()=>setOpen(false)} key={h} href={h} className="rounded-xl bg-white/5 px-4 py-3 font-semibold">{l}</Link>)}<LanguageSelector/><SocialLinks/></div></div>}
 </header>
}
