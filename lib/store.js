import { starterBlogs, starterCourses } from './constants'
import { slugify } from './slug'

const g = global.__NYAYA_MEMORY__ || (global.__NYAYA_MEMORY__ = {
  blogs: starterBlogs.map(b=>({...b, status:'published', createdAt:new Date().toISOString()})),
  courses: starterCourses.map(c=>({...c, status:'published', modules:c.modules.map(m=>({title:m, content:`This module introduces ${m} with practical notes, examples and learning material.`, videoUrl:'', pdfUrl:'', audioUrl:''})), createdAt:new Date().toISOString()})),
  gallery: [
    {title:'Supreme Court Visit', category:'Court Visits', type:'image', url:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop', description:'Professional legal journey and court practice.', size:'medium'},
    {title:'Legal Research Desk', category:'Office Photographs', type:'image', url:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop', description:'Research-based legal intelligence workspace.', size:'medium'}
  ],
  enrollments: [], contacts: []
})
export const memory = g
export function addItem(type, data){ const item={...data, slug:data.slug||slugify(data.title||data.name), createdAt:new Date().toISOString()}; memory[type].unshift(item); return item }
