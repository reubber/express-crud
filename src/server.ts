import express, { json } from 'express'
import routes from './routes';
import cors from 'cors'


const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

// GET: listar; buscar informacoes
// POST: enviar novas informacoes
// PUT: Atualizar uma informacao existente
// DELETE: Deletar uma informacao existente

// Corpo (Request Body): Dados para criação ou atualizacao de um registro
// Route params: Identifical qual requrso eu quero deletar ou atualizar
// Query params: Paginação, filtros, ordenacao.

app.listen(3333);
