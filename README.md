
# Fake News Detection Using NLP

## Project Overview

This project aims to classify news articles as either **real** or **fake** using **Natural Language Processing (NLP)** techniques and machine learning algorithms. The primary goal is to detect misleading or unreliable information by analyzing the content of news articles.

## Dataset

The dataset used in this project is the **Kaggle Fake News Dataset**, which contains news articles labeled as either **real** or **fake**. The dataset consists of the following features:
- **Title:** Headline of the article
- **Text:** Main content of the article
- **Label:** Label indicating whether the news is fake (1) or real (0)

## Project Workflow

1. **Data Collection:**
   - Dataset is obtained from Kaggle and consists of labeled real and fake news articles.

2. **Data Preprocessing:**
   - Tokenization, stop-word removal, and lemmatization to process the textual data.
   - TF-IDF vectorization to convert text into a numerical format suitable for machine learning.

3. **Exploratory Data Analysis (EDA):**
   - Visualizations to explore the distribution of real and fake articles.
   - Word clouds and frequency analysis for key terms in real vs fake news.

4. **Model Building:**
   - Multiple machine learning models were used to classify the articles, including:
     - Logistic Regression
     - Naive Bayes
     - Support Vector Machine (SVM)
     - Random Forest
   - Feature extraction was performed using **TF-IDF**.

5. **Model Evaluation:**
   - Performance of the models was evaluated using **accuracy**, **precision**, **recall**, **F1 score**, and a **confusion matrix**.

6. **Conclusion:**
   - The project demonstrated that NLP and machine learning can be effectively used to detect fake news.
   - Future improvements can include experimenting with more complex models and larger datasets.

## Project Files

- **Fake_News_Detection_NLP_Presentation.pptx**: Presentation summarizing the project.
- **Fake_News_Detection_NLP_Report.docx**: Detailed report on the methodology, implementation, and results.
- **Project Code**: Python code used to preprocess data, build models, and evaluate performance.
- **README.md**: This file.

## How to Run the Project

1. Install the required Python libraries:
   ```bash
   pip install -r requirements.txt
   ```
   
2. Run the preprocessing and model training script:
   ```bash
   python fake_news_detection.py
   ```

3. You can use the saved model to classify new articles by running:
   ```bash
   python classify_article.py --article "your_news_article_here"
   ```

## Conclusion

This project highlights how machine learning and NLP can be leveraged to tackle the growing problem of fake news. By building a model that can distinguish between real and fake articles, we can take a step toward combating misinformation.
