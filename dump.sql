

CREATE TABLE IF NOT EXISTS usuarios(
	id SERIAL PRIMARY KEY,
    usuario VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultima_modificacao TIMESTAMP
);

ALTER TABLE usuarios ADD COLUMN nome VARCHAR(60) NOT NULL;
ALTER TABLE usuarios ADD COLUMN email VARCHAR(60) NOT NULL;

--funcao para atualizar a hora da coluna data_ultima_modificacao
CREATE OR REPLACE FUNCTION update_modified_column() 
RETURNS TRIGGER AS $$
BEGIN
    NEW.data_ultima_modificacao = now();
    RETURN NEW; 
END;
$$ language 'plpgsql';

--quando um registro da tabela usuarios tiver um update chama a funcao para alterar a data
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON usuarios FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();


INSERT INTO usuarios (usuario, senha, nome, email) 
VALUES ('andre', 'andre@123', 'Andre', 'andre@mail.com');

UPDATE usuarios SET nome = 'André Hoffmann' 
WHERE email = 'andre@mail.com';

SELECT * FROM usuarios;


CREATE TABLE IF NOT EXISTS produtos(
	id SERIAL PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
	custo NUMERIC(10,2) NOT NULL,
    unidade_medida VARCHAR(5) NOT NULL  
);