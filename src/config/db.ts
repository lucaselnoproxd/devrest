import mongoose from 'mongoose';
 
export const connectDB = async () => {
    try {
        console.log("MONGODB_URI (antes de conectar):", process.env.MONGODB_URI);
        const { connection } = await mongoose.connect("mongodb+srv://lucas:h8ii3qF0ONI9SNyN@devrestlucas305.dsvcc.mongodb.net/linktree_node_typescript");
        const url = `http://${connection.host}:${connection.port}`;
        console.log(`MongoDB connected: ${url}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}




