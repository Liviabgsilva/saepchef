import express from 'express';
import usuarioController from '../controllers/usuarioControllers.js';

const router = express.Router();

router.post('/login', usuarioController.login);
router.post('/', usuarioController.criar);
router.get('/', usuarioController.listar);
router.get('/:id', usuarioController.obterPorId);
router.put('/:id', usuarioController.atualizar);
router.delete('/:id', usuarioController.eliminar);

export default router;