import usuarioRepository from '../repositories/usuarioRepositories.js';
import bcrypt from 'bcryptjs';

async function criar({ nome, email, senha }) {
  const usuarioExistente = await usuarioRepository.buscarPorEmail(email);
  if (usuarioExistente) {
    throw new Error('Já existe um utilizador registado com este email.');
  }

  const salt = await bcrypt.genSalt(10);
  const senhaHash = await bcrypt.hash(senha, salt);

  return await usuarioRepository.criar({
    nome,
    email,
    senha: senhaHash
  });
}

async function login(email, senhaEnviada) {
  const usuarioDoBanco = await usuarioRepository.buscarPorEmail(email);

  if (!usuarioDoBanco) {
    return null; 
  }

  const senhaValida = await bcrypt.compare(senhaEnviada, usuarioDoBanco.senha);

  if (!senhaValida) {
    return null; 
  }

  const { senha: _, ...usuarioSemSenha } = usuarioDoBanco;

  return {
    mensagem: 'Login efetuado com sucesso!',
    usuario: usuarioSemSenha
  };
}

async function obterTodos() {
  return await usuarioRepository.buscarTodos();
}

async function obterPorId(id) {
  return await usuarioRepository.buscarPorId(id);
}

async function atualizar(id, dadosAtualizados) {
  const usuarioExistente = await usuarioRepository.buscarPorId(id);
  if (!usuarioExistente) return null;

  return await usuarioRepository.atualizar(id, dadosAtualizados);
}

async function eliminar(id) {
  const usuarioExistente = await usuarioRepository.buscarPorId(id);
  if (!usuarioExistente) return false;

  return await usuarioRepository.eliminar(id);
}

export {
  criar,
  login,
  obterTodos,
  obterPorId,
  atualizar,
  eliminar
};


export default {
  criar,
  login,
  obterTodos,
  obterPorId,
  atualizar,
  eliminar
};