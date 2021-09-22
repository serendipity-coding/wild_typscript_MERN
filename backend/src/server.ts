/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose'
import wilderRoutes from './routes/Wilder'


const app = express()



// connect db
mongoose.connect('mongodb://127.0.0.1:27017/wildersDB', {
  autoIndex: true,
})
  .then(() => console.log('connected to db'))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log("Cannot connect to the database!", err);
    process.exit();
  })

// Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Define Routes
app.use('/api/wilders', wilderRoutes)

// handle error not found
app.use((req, res) => {
  res.status(404).json({ error: 'not found ' })
})


// run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
