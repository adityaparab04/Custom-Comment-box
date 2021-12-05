const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

app.use(static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname })
});

app.use('*', (req, res) => {
  res.status(404).json({ error: "Page Not found" })
});

app.listen(3000, () => {
    console.log("Server starting")
    console.log("Routes now running on http://localhost:3000")
});