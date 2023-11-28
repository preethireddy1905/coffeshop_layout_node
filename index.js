const express = require('express');
const path = require('path');
 
const app = express();
const port = 3000;
 
// Set up static files (HTML, CSS, images)
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
// Define routes
app.get('/', (req, res) => {
  res.render('index');
});
 
app.get('/menu', (req, res) => {
  res.render('menu');
});
 
app.get('/aboutus', (req, res) => {
  res.render('aboutus');
});
 
 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);});
