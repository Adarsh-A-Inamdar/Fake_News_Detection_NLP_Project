
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [article, setArticle] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/classify', { article });
      setResult(response.data.prediction);
    } catch (error) {
      console.error("There was an error processing the article!", error);
    }
  };

  return (
    <div>
      <h1>Fake News Detection</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          rows="10" cols="50"
          placeholder="Enter news article here"
        ></textarea>
        <button type="submit">Classify</button>
      </form>
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
