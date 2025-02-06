import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Connect to MongoDB with improved logging and updated mongoose practices
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // If you're using Mongoose 6 or above, you can remove these deprecated options.
      // mongoose.set('strictQuery', false); // Optional to prevent warnings related to strict query mode
    });

    console.log(`MongoDB Connected: ${conn.connection.host}, Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure status code if the connection fails
  }
};

// Export as a named export
export { connectDB };
