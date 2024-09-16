import pool from "../db.js";

export const getUsuarios = async (req, res) => {
    try {
        const client = await pool.connect(); //
        const result = await client.query(
            "SELECT * FROM Usuarios"
        );

        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar usuários." });
    }
};

export const getUsuarioId = async (req, res) => {
    try {
        const userId = req.params.id;
        const client = await pool.connect(); //
        const result = await client.query(
            `SELECT * FROM Usuarios WHERE id_usuario = $1`,
            [userId]);

        if(result.rows.length === 0){
            return res.status(404).json({message: "Usuário não encontrado."})
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar usuário." });
    }
}; 

export const postUsuarios = async (req, res) => { //Usar serial no sql
    try {
        const payload = req.body;
        const client = await pool.connect();
        const result = await client.query(
            `INSERT INTO USUARIOS(id_usuario, nome, email, password)
            VALUES ($1, $2, $3, $4) RETURNING *`, [
                payload.id,
                payload.nome,
                payload.email,
                payload.password
            ]);

            res.status(201).json({message: "Usuário cadastrado com sucesso."});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }
};

export const putUsuarioId = async (req, res) => {
    try {
        const userId = req.params.id;
        const payload = req.body;
        const client = await pool.connect();
        const result = await client.query(
            `UPDATE Usuarios 
                SET nome = $2, password = $3, email = $4
                WHERE id_usuario = $1 
                 `, [
                    userId,
                    payload.nome,
                    payload.password,
                    payload.email,
                 ]);
        res.status(200).json({message: "Usuário alterado com sucesso."})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao alterar usuário."})
    }
};

export const deleteUsuarioId = async (req, res) => {
    try {
        const userId = req.params.id;
        const client = await pool.connect();
        const result = await client.query(
            `DELETE FROM Usuarios WHERE id_usuario = $1`, 
            [userId]);

        res.status(200).json({message: "Usuário deletado com sucesso | Nada foi deletado."});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao deletar usuário."})
    }
};
