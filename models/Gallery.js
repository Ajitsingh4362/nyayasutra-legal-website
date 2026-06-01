import mongoose from 'mongoose'
const GallerySchema = new mongoose.Schema({ title:String, category:String, type:String, url:String, description:String, size:{type:String,default:'medium'} },{timestamps:true})
export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema)
