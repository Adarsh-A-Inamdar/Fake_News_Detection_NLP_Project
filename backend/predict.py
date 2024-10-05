
import pickle
import sys

# Load the model and vectorizer
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('vectorizer.pkl', 'rb') as vec_file:
    vectorizer = pickle.load(vec_file)

# Take input from command line
article_text = sys.argv[1]

# Preprocess and classify
article_tfidf = vectorizer.transform([article_text])
prediction = model.predict(article_tfidf)

# Output result
result = "Fake News" if prediction == 1 else "Real News"
print(result)
