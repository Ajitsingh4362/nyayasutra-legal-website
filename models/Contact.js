import mongoose from 'mongoose'
const ContactSchema = new mongoose.Schema({ name:String, phone:String, email:String, service:String, message:String, status:{type:String,default:'new'} },{timestamps:true})
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
