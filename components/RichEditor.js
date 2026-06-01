'use client'
import { useRef } from 'react'
export default function RichEditor({value,onChange}){
 const ref=useRef(null)
 function cmd(command,arg=null){ document.execCommand(command,false,arg); onChange(ref.current?.innerHTML||'') }
 return <div><div className="mb-2 flex flex-wrap gap-2"><button type="button" onClick={()=>cmd('bold')} className="btn-outline px-4 py-2">Bold</button><button type="button" onClick={()=>cmd('italic')} className="btn-outline px-4 py-2">Italic</button><button type="button" onClick={()=>cmd('underline')} className="btn-outline px-4 py-2">Underline</button><button type="button" onClick={()=>cmd('formatBlock','h2')} className="btn-outline px-4 py-2">Heading</button><button type="button" onClick={()=>cmd('insertUnorderedList')} className="btn-outline px-4 py-2">List</button></div><div ref={ref} contentEditable suppressContentEditableWarning className="prose-editor" onInput={e=>onChange(e.currentTarget.innerHTML)} dangerouslySetInnerHTML={{__html:value||''}} /></div>
}
