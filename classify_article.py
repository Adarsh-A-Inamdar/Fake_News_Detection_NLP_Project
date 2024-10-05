
import pickle
import sys

# Load the model and vectorizer
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('vectorizer.pkl', 'rb') as vec_file:
    vectorizer = pickle.load(vec_file)

# Function to classify a new article
def classify_article(article_text):
    article_tfidf = vectorizer.transform([article_text])
    prediction = model.predict(article_tfidf)
    return 'Fake News' if prediction == 1 else 'Real News'

# Get the article text from command line
if __name__ == '__main__':
    article_text = sys.argv[1]
    result = classify_article(article_text)
    print(f'The article is classified as: {result}')
