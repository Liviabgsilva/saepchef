import db from '../config/db.js';

async function buscarTodas() {
  const [linhas] = await db.query('SELECT * FROM receitas ORDER BY criado_em DESC');
  return linhas;
}

async function buscarPorId(id) {
  const [linhas] = await db.query('SELECT * FROM receitas WHERE id = ?', [id]);
  return linhas[0] || null;
}

async function criar(receita) {
  const { titulo, ingredientes, modo_preparo } = receita;

  const [resultado] = await db.query(
    'INSERT INTO receitas (titulo, ingredientes, modo_preparo) VALUES (?, ?, ?)',
    [titulo, ingredientes, modo_preparo]
  );

  return {
    id: resultado.insertId,
    titulo,
    ingredientes,
    modo_preparo
  };
}

async function atualizar(id, receita) {
  const { titulo, ingredientes, modo_preparo } = receita;

  const [resultado] = await db.query(
    'UPDATE receitas SET titulo = ?, ingredientes = ?, modo_preparo = ? WHERE id = ?',
    [titulo, ingredientes, modo_preparo, id]
  );

  if (resultado.affectedRows === 0) {
    return null;
  }

  return { id: Number(id), titulo, ingredientes, modo_preparo };
}

async function eliminar(id) {
  const [resultado] = await db.query('DELETE FROM receitas WHERE id = ?', [id]);
  return resultado.affectedRows > 0;
}


export {
  buscarTodas,
  buscarPorId,
  criar,
  atualizar,
  eliminar
};


export default {
  buscarTodas,
  buscarPorId,
  criar,
  atualizar,
  eliminar
};