import mongoose from 'mongoose'
const EnrollmentSchema = new mongoose.Schema({ name:String, phone:String, email:String, courseTitle:String, courseSlug:String, message:String, status:{type:String,default:'new'} },{timestamps:true})
export default mongoose.models.Enrollment || mongoose.model('Enrollment', EnrollmentSchema)
