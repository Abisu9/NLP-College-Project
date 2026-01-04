// Positive and Negative words
const positiveWords = ["good", "great", "happy", "love", "excellent"];
const negativeWords = ["bad", "sad", "hate", "terrible", "worst"];

// Function to analyze sentiment
function analyzeSentiment(text) {
    let score = 0;

    // Remove punctuation and split words
    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(" ");

    for (let i = 0; i < words.length; i++) {
        if (positiveWords.includes(words[i])) score++;
        if (negativeWords.includes(words[i])) score--;
    }

    if (score > 0) return "Positive";
    if (score < 0) return "Negative";
    return "Neutral";
}

// DOM Elements
const opinionInput = document.getElementById("opinionInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const sentimentText = document.getElementById("sentimentText");
const resultSection = document.getElementById("resultSection");
const sentimentDisplay = document.getElementById("sentimentDisplay");

// Button actions
submitBtn.addEventListener("click", () => {
    const text = opinionInput.value.trim();

    if (text === "") {
        alert("Please enter text");
        return;
    }

    const sentiment = analyzeSentiment(text);
    sentimentText.innerText = sentiment;

    // Update color class
    sentimentDisplay.className = "sentiment-badge " + sentiment.toLowerCase();

    // Show result
    resultSection.classList.remove("hidden");
});

clearBtn.addEventListener("click", () => {
    opinionInput.value = "";
    resultSection.classList.add("hidden");
});
