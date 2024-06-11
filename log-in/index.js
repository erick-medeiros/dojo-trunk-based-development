import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Configuração do body-parser para analisar solicitações JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Armazenamento temporário de usuários
let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Rota para a página inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à página inicial');
});

// Rota para o formulário de login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Rota para lidar com a submissão do formulário de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.status(200).send(`Login bem-sucedido, bem-vindo ${username}!`);
    } else {
        res.status(400).send('Credenciais inválidas. Por favor, tente novamente.');
    }
});

// Inicie o servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default server