import mongoose from 'mongoose'
const LessonSchema = new mongoose.Schema({ title:String, content:String, videoUrl:String, pdfUrl:String, audioUrl:String }, {_id:false})
const CourseSchema = new mongoose.Schema({
  title:String, slug:{type:String,index:true,unique:true}, description:String, thumbnail:String, introVideo:String, pdfUrl:String, audioUrl:String, imageSize:{type:String,default:'medium'}, status:{type:String,default:'published'}, modules:[LessonSchema]
},{timestamps:true})
export default mongoose.models.Course || mongoose.model('Course', CourseSchema)
