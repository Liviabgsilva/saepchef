import receitaService from '../services/receitaService.js';

async function listar(req, res) {
  try {
    const receitas = await receitaService.obterTodas();
    return res.status(200).json(receitas);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao procurar as receitas.',
      erro: error.message
    });
  }
}

async function obterPorId(req, res) {
  try {
    const { id } = req.params;
    const receita = await receitaService.obterPorId(id);

    if (!receita) {
      return res.status(404).json({ mensagem: 'Receita não encontrada.' });
    }

    return res.status(200).json(receita);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao procurar a receita.',
      erro: error.message
    });
  }
}

async function criar(req, res) {
  try {
    const { titulo, ingredientes, modo_preparo } = req.body;

    if (!titulo || !ingredientes || !modo_preparo) {
      return res.status(400).json({ 
        mensagem: 'Título, ingredientes e modo de preparo são obrigatórios.' 
      });
    }

    const novaReceita = await receitaService.criar({ titulo, ingredientes, modo_preparo });
    return res.status(201).json(novaReceita);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao criar a receita.',
      erro: error.message
    });
  }
}

async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const receitaAtualizada = await receitaService.atualizar(id, dadosAtualizados);

    if (!receitaAtualizada) {
      return res.status(404).json({ mensagem: 'Receita não encontrada para atualização.' });
    }

    return res.status(200).json(receitaAtualizada);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao atualizar a receita.',
      erro: error.message
    });
  }
}

async function eliminar(req, res) {
  try {
    const { id } = req.params;
    const removido = await receitaService.eliminar(id);

    if (!removido) {
      return res.status(404).json({ mensagem: 'Receita não encontrada para remoção.' });
    }

    return res.status(200).json({ mensagem: 'Receita removida com sucesso.' });
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao remover a receita.',
      erro: error.message
    });
  }
}


export {
  listar,
  obterPorId,
  criar,
  atualizar,
  eliminar
};


export default {
  listar,
  obterPorId,
  criar,
  atualizar,
  eliminar
};