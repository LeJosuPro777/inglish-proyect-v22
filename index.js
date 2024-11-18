import express, { json } from 'express';
import cors from 'cors';
import mongoose, { model, Schema } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

const connectionString = process.env.MONGO_BD_URI;
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

//Esquema y modelo para la colección 'Game'
const gameSchema = new Schema({
  title: String,
  content: String,
  words: Array
});


gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v; //Elimina la propiedad __v que no nos sirve
  }
});

const Game = model('Game', gameSchema);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/memoryContent', async (request, response) => {
  try {
    const games = await Game.find({});
    response.json(games);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    response.status(500).send('Error al obtener los datos');
  }
});
app.post('/data', async (req, res) => {
  const { title, content, words } = req.body;

  try {
    // Crea una nueva instancia del modelo Game con los datos proporcionados
    const game = new Game({
      title: title,
      content: content,
      words: words,
    });

    // Guardar el nuevo juego en la base de datos
    await game.save();

    // Enviar una respuesta exitosa
    res.status(201).json({ message: 'Game created successfully!', game });

    // No es necesario cerrar la conexión aquí
    // mongoose.connection.close(); // Si quieres cerrar la conexión, deberías hacerlo en otro lugar, no aquí.
  } catch (e) {

    console.error(e);
    res.status(500).json({ message: 'An error occurred', error: e.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
