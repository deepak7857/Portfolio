const mongoose  = require('mongoose');


const connectDB  = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB Connected: ${connect.connection.host}`)
    } 
    catch (err) {
      console.error(err.message);
      process.exit(1); 
    }
  }
    export default connectDB;
