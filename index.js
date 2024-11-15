import express, { json } from 'express';
import content from './src/content-jsons/memo-links.json' assert { "type": "json" };
import cors from 'cors'
const app = express()
const PORT = 3001
app.use(cors())
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/memoryContent', (request, response) => {
  response.json(content)
})
app.listen(PORT, () => {
  console.log(`Server Running in Port ${PORT}`);
})