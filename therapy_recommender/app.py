from flask import Flask, render_template, request
from textblob import TextBlob

app = Flask(__name__)

def get_age_group(age):
    if 15 <= age <= 25:
        return '15-25'
    elif 26 <= age <= 40:
        return '26-40'
    elif 41 <= age <= 60:
        return '41-60'
    else:
        return 'other'
    @app.route("/", methods=["GET", "POST"])
    
def ind():
    if request.method == "POST":
        age = int(request.form['age'])
        text = request.form['text']
        sentiment = predict_sentiment(text)
        recommendations = recommend_therapy(age, sentiment)
        return render_template("index.html", result=recommendations, sentiment=sentiment, age=age, text=text)

    return render_template("index.html", result=None)


def classify_sentiment(text):
    polarity = TextBlob(text).sentiment.polarity
    if polarity > 0.2:
        return 'Positive'
    elif -0.2 <= polarity <= 0.2:
        return 'Neutral'
    elif -0.5 <= polarity < -0.2:
        return 'Negative - Mild'
    elif -0.8 <= polarity < -0.5:
        return 'Negative - Moderate'
    else:
        return 'Negative - Severe'

def recommend_therapy(age, sentiment):
    age_group = get_age_group(age)
    if 'Negative' not in sentiment:
        return []  # No therapy needed for neutral or positive moods

    recommendations = []

    if age_group == '15-25':
        recommendations = ['laughing.html', 'audio.html']
    elif age_group == '26-40':
        recommendations = ['reading.html', 'audio.html', 'yoga.html']
    elif age_group == '41-60':
        recommendations = ['audio.html', 'yoga.html', 'spirituality.html']
    else:
        recommendations = ['spirituality.html']

    return [f"./{file}" for file in recommendations]  # Prefix for local linking


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    age = int(request.form['age'])
    text = request.form['text']
    sentiment = classify_sentiment(text)
    result = recommend_therapy(age, sentiment)
    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
