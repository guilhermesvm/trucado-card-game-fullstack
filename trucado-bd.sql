CREATE TABLE USUARIOS(
	id_usuario NUMERIC NOT NULL PRIMARY KEY,	
	nome VARCHAR(60) NOT NULL,
	password VARCHAR(12) NOT NULL,
	email VARCHAR(120) NOT NULL
);

INSERT INTO USUARIOS(id_usuario, nome, email, password) VALUES(5, 'Guilherme', 'guilherme@qa.com', '12345');

select * from usuarios
----------------------------------------------------------

CREATE TABLE CAMPEONATOS(
	id_campeonato SERIAL NOT NULL PRIMARY KEY,
	formato VARCHAR(14) NOT NULL,
	descricao VARCHAR(200) NOT NULL,
	rank_necessario INTEGER NOT NULL,
	premiacao VARCHAR(200),
	inscricao VARCHAR(200)
);

SELECT * FROM CAMPEONATOS

INSERT INTO CAMPEONATOS(formato, descricao, rank_necessario) VALUES('Duplas', 'Venha jogar', 1);

SELECT * FROM CAMPEONATOS WHERE id_campeonato = 2