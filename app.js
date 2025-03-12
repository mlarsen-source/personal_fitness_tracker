import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const PORT = 3000;

const workoutList = [];

app.get('/', (req, res) => {
  res.render('home');
});


app.post('/summary', (req, res) => {

  const workout = {
    type: req.body.type,
    duration: req.body.duration,
    intensity: req.body.intensity,
    date: req.body.date,
    notes: req.body.notes
  };

  workoutList.push(workout)

  res.render('summary', { workoutList });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
