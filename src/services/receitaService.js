import receitaRepository from '../repositories/receitaRepositories.js';

async function obterTodas() {
  return await receitaRepository.buscarTodas();
}

async function obterPorId(id) {
  const receita = await receitaRepository.buscarPorId(id);
  if (!receita) {
    return null;
  }
  return receita;
}

async function criar({ titulo, ingredientes, modo_preparo }) {
  const dadosFormatados = {
    titulo: titulo.trim(),
    ingredientes: ingredientes.trim(),
    modo_preparo: modo_preparo.trim()
  };

  return await receitaRepository.criar(dadosFormatados);
}

async function atualizar(id, dadosAtualizados) {
  const receitaExistente = await receitaRepository.buscarPorId(id);
  if (!receitaExistente) {
    return null;
  }

  const receitaParaAtualizar = {
    titulo: dadosAtualizados.titulo?.trim() || receitaExistente.titulo,
    ingredientes: dadosAtualizados.ingredientes?.trim() || receitaExistente.ingredientes,
    modo_preparo: dadosAtualizados.modo_preparo?.trim() || receitaExistente.modo_preparo
  };

  return await receitaRepository.atualizar(id, receitaParaAtualizar);
}

async function eliminar(id) {
  const receitaExistente = await receitaRepository.buscarPorId(id);
  if (!receitaExistente) {
    return false;
  }

  return await receitaRepository.eliminar(id);
}


export {
  obterTodas,
  obterPorId,
  criar,
  atualizar,
  eliminar
};


export default {
  obterTodas,
  obterPorId,
  criar,
  atualizar,
  eliminar
};