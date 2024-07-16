const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Définir le chemin du fichier JSON
const feedbackFilePath = path.join(__dirname, 'feedback.json');

app.post('/feedback', (req, res) => {
  const { name, feedback, rating } = req.body;

  const newFeedback = {
    name,
    feedback,
    rating,
    date: new Date().toISOString()
  };

  // Lire le fichier JSON
  fs.readFile(feedbackFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let feedbacks = [];
    if (data) {
      feedbacks = JSON.parse(data);
    }

    feedbacks.push(newFeedback);

    // Écrire dans le fichier JSON
    fs.writeFile(feedbackFilePath, JSON.stringify(feedbacks, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.status(200).json({ message: 'Feedback submitted successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
