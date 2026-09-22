
CREATE TABLE tb_receita (
    id_receita SERIAL PRIMARY KEY,
    titulo_receita VARCHAR(150) NOT NULL,
    origem_receita VARCHAR(100) NOT NULL,
    id_usuario INTEGER NOT NULL,
    url_imagem VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_receita_usuario FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario) ON DELETE CASCADE
);

INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (1, 'Bolo de Cenoura', 'Brasil', 1, 'receita9.jpg', '2026-09-15 16:30:45.297272-03', '2026-09-15 16:30:45.297272-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (2, 'Moqueca de camarão', 'Bahia-Br', 3, 'receita1.jpg', '2026-09-21 15:46:53.766676-03', '2026-09-21 15:46:53.766676-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (3, 'pastel de carne', 'brasil', 2, 'receita2.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (4, 'masa', 'Brasil', 3, 'receita3.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (5, 'panqueca', 'Brasil', 2, 'receita4.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (6, 'chocolate', 'Brasil', 1, 'receita5.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (7, 'miojo', 'Brasil', 2, 'receita6.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (8, 'salada', 'Brasil', 3, 'receita7.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
INSERT INTO public.tb_receita (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at) VALUES (9, 'morango do amor', 'Brasil', 1, 'receita8.jpg', '2026-09-21 15:52:02.111617-03', '2026-09-21 15:52:02.111617-03') ON CONFLICT DO NOTHING;
