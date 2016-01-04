import mongoose from 'mongoose'

mongoose.connect(process.env.DB_Conection ? process.env.DB_Conection : 'mongodb://localhost/blogcero')

export default mongoose
