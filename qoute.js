const quotes = [
    "Sometimes when you lose your way in the fog, you end up in a beautiful place! Don’t be afraid of getting lost! - Mehmet Murat Ildan",
    "The weather varies between heavy fog and pale sunshine; my thoughts follow the exact same process. - Virginia Woolf",
    "When life is foggy, path is unclear, and mind is dull, remember your breath. It has the power to give you the peace. It has the power to resolve the unsolved equations of life. - Amit Ray"
];

let currentIndex = 0;

function displayQuote() {
    document.getElementById("quote").innerText = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length;
}

setInterval(displayQuote, 60000); // Change quote every 60,000 milliseconds (1 minute)
window.onload = displayQuote; // Display the first quote on page load
