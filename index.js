import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Importar rutas
import projectRoutes from './src/routes/projects/projectsRoutes.js';
import projectDetailRoutes from './src/routes/projects-detail/projectsRoutesDetail.js';
import resumenRoutes from './src/routes/resumen/resumenRoutes.js';
import dashboardRoutes from './src/routes/dashboardResumen/dahsboardResumen.js'
// import userRoutes from './src/routes/users/userRoutes.js'
// import cleaningRoutes from './src/routes/cleanings/cleaningRoutes.js'

// Configurar variables de entorno
dotenv.config();

// Inicializar app
const app = express();
const PORT = process.env.EXPRESSPORT || 3000;

// ✅ Configurar CORS correctamente (después de crear la app)
app.use(cors({
  origin: 'http://localhost:5173', // frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware para parsear JSON
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

/**********************************/
/************ RUTAS ***************/
/**********************************/

// app.use("/users", userRoutes);
// app.use("/cleanings", cleaningRoutes);
app.use("/proyectos", projectRoutes);
app.use("/proyectos-detalle", projectDetailRoutes);
app.use("/resumen", resumenRoutes);
app.use("/dashboard", dashboardRoutes);


/**********************************/

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});