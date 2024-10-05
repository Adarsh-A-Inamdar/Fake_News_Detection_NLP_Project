
# Fake News Detection Web Application

## Overview

This project is a web application designed to classify news articles as either **real** or **fake** using **Natural Language Processing (NLP)** techniques and a machine learning model. The frontend is built using **React**, while the backend is developed using **Node.js** and **Express**. The backend interacts with a **Python** machine learning model to make predictions based on the article content.

## Features

1. **User Input:**
   - Users can input news articles or headlines into the application.
   - The application processes the text and provides a classification (Real/Fake).

2. **Fake News Classification:**
   - The application uses a machine learning model (trained using Logistic Regression) to predict whether the news is fake or real.
   - The model is built using **scikit-learn** and serialized with **pickle** for easy loading in the backend.

3. **Frontend:**
   - The frontend is built using **React**.
   - **Axios** is used to send HTTP POST requests to the backend for classification.
   
4. **Backend:**
   - The backend is built using **Node.js** and **Express**.
   - It interacts with a Python machine learning model to perform NLP-based classification.

## Project Structure

```
fake-news-detection/
│
├── backend/
│   ├── model/                # Pickled ML model (Python)
│   ├── app.js                # Node.js main server file
│   ├── predict.py            # Python script to load model and return predictions
│   ├── nlp_model.py          # Python script for training and saving the ML model
│   └── news_dataset.csv      # Sample dataset used for training (replace with actual data)
│
├── frontend/
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # React components (e.g., form, result display)
│   │   ├── App.js            # Main React component
│   │   └── index.js          # React entry point
│   └── package.json          # Frontend dependencies
│
├── README.md                 # Project details and instructions
└── requirements.txt          # Python dependencies (scikit-learn, pandas, etc.)
```

## Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fake-news-detection.git
cd fake-news-detection
```

### 2. Backend Setup (Node.js + Python)

- Navigate to the backend folder:
  ```bash
  cd backend
  ```

- Install the required Node.js dependencies:
  ```bash
  npm install
  ```

- Install the required Python dependencies:
  ```bash
  pip install -r requirements.txt
  ```

- **Train the Model** (if needed):
  ```bash
  python nlp_model.py
  ```

- **Run the Backend Server**:
  ```bash
  node app.js
  ```

### 3. Frontend Setup (React)

- Navigate to the frontend folder:
  ```bash
  cd frontend
  ```

- Install the React dependencies:
  ```bash
  npm install
  ```

- **Run the Frontend**:
  ```bash
  npm start
  ```

### 4. Access the Application

- Open your browser and navigate to `http://localhost:3000` to use the fake news detection app.
- Enter the news article text in the provided field and submit to classify it as "Fake News" or "Real News."

## Future Improvements

- Add a more sophisticated machine learning model (e.g., transformers or deep learning models).
- Enhance the user interface with better styling.
- Improve the model by using a larger and more diverse dataset for training.

## Conclusion

This project demonstrates how **NLP** and **machine learning** can be integrated into a web application for real-time fake news detection. By using **React** on the frontend and **Node.js** with **Python** on the backend, the application provides a smooth user experience while leveraging powerful NLP techniques.
