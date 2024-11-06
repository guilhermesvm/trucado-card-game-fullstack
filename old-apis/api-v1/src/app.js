import express from "express";

const app = express();
app.use(express.json()); //middleware

var jogadores = [
    {
        id:1,
        jogador: "Jogador 1"
    },
    {
        id:2,
        jogador: "Jogador 2"
    }
]

// GET Methods
app.get('/', (req, res) => {
    res.status(404).send("Could not found.");
});

app.get("/home", (req, res) => {
    res.status(200).send("Home");
});

app.get("/api/jogadores", (req, res) => {
    res.status(200).json(jogadores); //usa função json para 
});

// POST Methods
app.post("/api/jogadores", (req, res) => {
    jogadores.push(req.body);
    res.status(201).send("Adicionado com sucesso.");
});

// PUT Methods
function buscaJogador(id) {
    return jogadores.findIndex(jogador => {
        return jogador.id === Number(id);
    });
}

app.put("/api/jogadores/:id", (req, res) => {
    const index = buscaJogador(req.params.id);
    if(index == -1){
        return res.status(404).send("Jogador não encontrado.")
    }
    jogadores[index].jogador = req.body.jogador;
    res.status(200).json(jogadores[index]).send("Alterado com sucesso.");
});

// DELETE Methods
app.delete("/api/jogadores/:id", (req, res) => {
    const index = buscaJogador(req.params.id);
    jogadores.splice(index, 1);
    res.status(200).send("Removido com sucesso.")
});

export default app;