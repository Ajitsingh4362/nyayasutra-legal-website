import { site } from '@/lib/constants'
const items=[['FB',site.facebook],['IG',site.instagram],['IN',site.linkedin],['YT',site.youtube],['X',site.x],['WA',site.whatsapp],['@',`mailto:${site.email}`]]
export default function SocialLinks({small=false}){
  return <div className="flex flex-wrap items-center gap-2">
    {items.filter(([,url])=>url).map(([label,url])=><a key={label} href={url} target="_blank" rel="noopener noreferrer" className={`${small?'h-8 w-8 text-xs':'h-10 w-10 text-sm'} inline-flex items-center justify-center rounded-full border border-gold-500/30 bg-white/5 font-bold text-gold-300 hover:bg-gold-500 hover:text-navy-950`}>{label}</a>)}
  </div>
}
