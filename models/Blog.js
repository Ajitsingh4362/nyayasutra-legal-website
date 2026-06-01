import mongoose from 'mongoose'
const BlogSchema = new mongoose.Schema({
  title:String, slug:{type:String,index:true,unique:true}, category:String, excerpt:String, content:String,
  featuredImage:String, imageSize:{type:String,default:'large'}, status:{type:String,default:'published'}, seoTitle:String, seoDescription:String
},{timestamps:true})
export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
