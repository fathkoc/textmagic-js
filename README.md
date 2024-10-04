
# **TextMagic JS**

**TextMagic JS** is a lightweight JavaScript library designed to perform basic text analysis operations such as summarization, sentiment analysis, keyword extraction, and text classification. It utilizes simple algorithms such as Naive Bayes and TF-IDF for these tasks.

## **Features**

- **Text Summarization:** Extracts the most relevant sentences from the text.
- **Sentiment Analysis:** Detects whether the sentiment of the text is positive, negative, or neutral.
- **Keyword Extraction:** Identifies the most frequent words in the text.
- **Text Classification:** Classifies the text into categories like "news", "sports", and "entertainment."

## **Installation**

To install the library, run the following command:

```bash
npm install textmagic-js
```

## **Usage**

### 1. **Text Summarization**

Summarize the text by extracting the most relevant sentences.

```javascript
const TextAnalyzer = require('textmagic-js');

const analyzer = new TextAnalyzer();
const text = "This is the first sentence. This is the second sentence. This is the third sentence.";

console.log(analyzer.summarize(text, 2));  // Will return the top 2 sentences.
```

### 2. **Sentiment Analysis**

Analyzes the sentiment of the given text and returns the sentiment as positive, negative, or neutral.

```javascript
const sentiment = analyzer.sentimentAnalysis("I love this! It makes me happy.");
console.log(sentiment);  // Will return 'positive'.
```

### 3. **Keyword Extraction**

Extracts the top 5 keywords from the given text.

```javascript
const keywords = analyzer.extractKeywords("Artificial Intelligence is a branch of computer science.");
console.log(keywords);  // Will return an array of the most frequent words.
```

### 4. **Text Classification**

Classifies the text into predefined categories such as "news", "sports", or "entertainment" using Naive Bayes classifier.

```javascript
const category = analyzer.classify("The football match was exciting.");
console.log(category);  // Will return the predicted category (e.g., 'sports').
```

## **How It Works**

- **Text Summarization:** Uses the TF-IDF algorithm to determine the most important sentences based on their term frequency.
- **Sentiment Analysis:** Uses the `sentiment` package to analyze the sentiment of the text.
- **Keyword Extraction:** Tokenizes the text into words and calculates the frequency of each word to determine the most frequent keywords.
- **Text Classification:** Uses a Naive Bayes classifier to predict the category of the text based on training data.

## **Limitations**

This library uses basic algorithms and techniques, making it suitable for lightweight applications. However, it may not provide the accuracy of more advanced NLP models powered by machine learning.
