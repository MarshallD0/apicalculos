import express from 'express';
import trigRoutes from './src/routes/trigRoute';

const app = express();

// Middleware
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send('API de cálculos trigonométricos está funcionando');
});

// API Routes
app.use('/api/trigonometry', trigRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Algo salió mal',
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});