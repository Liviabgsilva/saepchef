import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import receitaRoutes from '../routes/receitaRoutes.js';
import usuarioRoutes from '../routes/usuarioRoutes.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../public')));

app.use('/receitas', receitaRoutes);
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API a funcionar com sucesso!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor a rodar na porta ${PORT}`);
});