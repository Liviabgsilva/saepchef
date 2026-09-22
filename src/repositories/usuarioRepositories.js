import db from '../config/db.js';

async function buscarTodos() {
  const [linhas] = await db.query('SELECT id, nome, email, criado_em FROM usuarios ORDER BY id DESC');
  return linhas;
}

async function buscarPorId(id) {
  const [linhas] = await db.query('SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?', [id]);
  return linhas[0] || null;
}

async function buscarPorEmail(email) {
  const [linhas] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  return linhas[0] || null;
}

async function criar(usuario) {
  const { nome, email, senha } = usuario;

  const [resultado] = await db.query(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );

  return {
    id: resultado.insertId,
    nome,
    email
  };
}

async function atualizar(id, usuario) {
  const { nome, email } = usuario;

  const [resultado] = await db.query(
    'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id]
  );

  if (resultado.affectedRows === 0) {
    return null;
  }

  return { id: Number(id), nome, email };
}

async function eliminar(id) {
  const [resultado] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
  return resultado.affectedRows > 0;
}


export {
  buscarTodos,
  buscarPorId,
  buscarPorEmail,
  criar,
  atualizar,
  eliminar
};


export default {
  buscarTodos,
  buscarPorId,
  buscarPorEmail,
  criar,
  atualizar,
  eliminar
};