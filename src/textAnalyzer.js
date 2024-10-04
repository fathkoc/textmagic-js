const natural = require('natural');
const TfIdf = natural.TfIdf;
const classifier = new natural.BayesClassifier();

class TextAnalyzer {
    // Metin özetleme
    summarize(text, numSentences = 3) {
        const sentences = text.split('.');
        const tfidf = new TfIdf();
        sentences.forEach(sentence => tfidf.addDocument(sentence));

        return sentences.slice(0, numSentences).join('.');
    }

    // Duygu analizi
    sentimentAnalysis(text) {
        const Sentiment = require('sentiment');
        const sentiment = new Sentiment();
        const result = sentiment.analyze(text);
        return result.score > 0 ? 'positive' : (result.score < 0 ? 'negative' : 'neutral');
    }

    // Anahtar kelime çıkarma
    extractKeywords(text) {
        const tokenizer = new natural.WordTokenizer();
        const tokens = tokenizer.tokenize(text);
        const tokenCounts = tokens.reduce((counts, token) => {
            counts[token] = (counts[token] || 0) + 1;
            return counts;
        }, {});
        
        const sortedTokens = Object.keys(tokenCounts).sort((a, b) => tokenCounts[b] - tokenCounts[a]);
        return sortedTokens.slice(0, 5);
    }

    // Metin sınıflandırma
    classify(text) {
        classifier.addDocument('This is news about politics', 'news');
        classifier.addDocument('Latest sports events', 'sports');
        classifier.addDocument('New movie reviews', 'entertainment');
        classifier.train();

        return classifier.classify(text);
    }
}

module.exports = TextAnalyzer;
