'use client'
import { useEffect } from 'react'
export default function GoogleTranslate(){
  useEffect(()=>{
    if(typeof window==='undefined') return
    window.googleTranslateElementInit = function(){
      if(window.google?.translate) new window.google.translate.TranslateElement({pageLanguage:'en', autoDisplay:false}, 'google_translate_element')
    }
    if(!document.querySelector('#google-translate-script')){
      const s=document.createElement('script'); s.id='google-translate-script'; s.src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; document.body.appendChild(s)
    }
  },[])
  return <div id="google_translate_element" className="hidden" />
}
