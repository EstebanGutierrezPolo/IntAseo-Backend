import express from "express";
import dotenv from "dotenv";
// import userRoutes from './src/routes/users/userRoutes.js'
// import cleaningRoutes from './src/routes/cleanings/cleaningRoutes.js'
import projectRoutes from './src/routes/projects/projectsRoutes.js'
import projectDetailRoutes from './src/routes/projects-detail/projectsRoutesDetail.js'

dotenv.config();
const app = express();
const PORT = process.env.EXPRESSPORT || 3000;

app.use(express.json());

// test endpoint
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});
/**********************************/
/************USERS*****************/
/**********************************/

// app.use("/users", userRoutes);


/**********************************/
/***********CLEANINGS**************/
/**********************************/

// app.use("/cleanings", cleaningRoutes);


app.use("/proyectos", projectRoutes);
app.use("/proyectos-detalle", projectDetailRoutes);




app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});