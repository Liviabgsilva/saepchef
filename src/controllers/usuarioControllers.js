import usuarioService from '../services/usuarioService.js';

async function criar(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        mensagem: 'Nome, email e senha são de preenchimento obrigatório.'
      });
    }

    const novoUsuario = await usuarioService.criar({ nome, email, senha });
    return res.status(201).json(novoUsuario);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao criar o utilizador.',
      erro: error.message
    });
  }
}

async function login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        mensagem: 'Email e senha são obrigatórios para realizar o login.'
      });
    }

    const resultado = await usuarioService.login(email, senha);

    if (!resultado) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao efetuar o login.',
      erro: error.message
    });
  }
}

async function listar(req, res) {
  try {
    const usuarios = await usuarioService.obterTodos();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao procurar os utilizadores.',
      erro: error.message
    });
  }
}

async function obterPorId(req, res) {
  try {
    const { id } = req.params;
    const usuario = await usuarioService.obterPorId(id);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Utilizador não encontrado.' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao procurar o utilizador.',
      erro: error.message
    });
  }
}

async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const usuarioAtualizado = await usuarioService.atualizar(id, dadosAtualizados);

    if (!usuarioAtualizado) {
      return res.status(404).json({ mensagem: 'Utilizador não encontrado para atualização.' });
    }

    return res.status(200).json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao atualizar o utilizador.',
      erro: error.message
    });
  }
}

async function eliminar(req, res) {
  try {
    const { id } = req.params;
    const removido = await usuarioService.eliminar(id);

    if (!removido) {
      return res.status(404).json({ mensagem: 'Utilizador não encontrado para remoção.' });
    }

    return res.status(200).json({ mensagem: 'Utilizador removido com sucesso.' });
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao remover o utilizador.',
      erro: error.message
    });
  }
}

export {
  criar,
  login,
  listar,
  obterPorId,
  atualizar,
  eliminar
};


export default {
  criar,
  login,
  listar,
  obterPorId,
  atualizar,
  eliminar
};