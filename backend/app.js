
const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Handle POST request to classify news article
app.post('/classify', (req, res) => {
  const articleText = req.body.article;
  
  // Python options to call the predict.py script
  let options = {
    mode: 'text',
    pythonOptions: ['-u'],
    args: [articleText]
  };

  // Run the Python script
  PythonShell.run('predict.py', options, function (err, result) {
    if (err) throw err;
    
    // Send the prediction result back to the frontend
    res.json({ prediction: result[0] });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
