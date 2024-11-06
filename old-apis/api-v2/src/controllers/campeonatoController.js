import pool from "../db.js";

export const getCampeonatos = async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query(
            "SELECT * FROM CAMPEONATOS"
        );

        res.status(200).json(result.rows);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao buscar campeonatos"});
    }
};

export const getCampeonatosId = async (req, res) => {
    try {
        const championshipId = req.params.id;
        const client = await pool.connect();
        const result = await client.query(
            `SELECT * FROM CAMPEONATOS WHERE id_campeonato = $1`, 
            [championshipId]);

        if(result.rows.length === 0){
            return res.status(404).json({message: "Campeonato não encontrado."})
        }
        res.status(200).json(result.rows);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao buscar campeonato."});
    }
};

export const postCampeonatos = async (req, res) => {
    try {
        const payload = req.body;
        const client = await pool.connect();
        const result = await client.query(`
            INSERT INTO CAMPEONATOS(formato, descricao, rank_necessario, premiacao, inscricao) 
            VALUES($1, $2, $3, $4, $5) RETURNING *`, [
                payload.formato,
                payload.descricao,
                payload.rank_necessario,
                payload.premiacao,
                payload.inscricao
            ]);

        res.status(201).json({message: "Campeonato cadastrado com sucesso."})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao cadastrar campeonato."});
    }
};

export const putCampeonatos = async (req, res) => {
    try {
        const championshipId = req.params.id;
        const payload = req.body;
        const client = await pool.connect();
        const result = await client.query(
            `UPDATE CAMPEONATOS
                SET formato = $2, descricao = $3, rank_necessario = $4, premiacao = $5, inscricao = $6
                WHERE id_campeonato = $1`, [
                    championshipId,
                    payload.formato,
                    payload.descricao,
                    payload.rank_necessario,
                    payload.premiacao,
                    payload.inscricao

                ]);
        if(result.rows.length === 0){
            return res.status(404).json({message: "Campeonato não encontrado."})
        }
        res.status(200).json({message: "Campeonato alterado com sucesso."});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao alterar campeonato."})        
    }
}

export const deleteCampeonatos = async (req, res) => {
    try {
        const championshipId = req.params.id;
        const client = await pool.connect();
        const result = await client.query(`
            DELETE FROM CAMPEONATOS WHERE id_campeonato = $1`, 
            [championshipId]);

        res.status(200).json({message: "Campeonato deletado com sucesso | Nada foi deletado."})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao deletar campeonato."})
    }
}