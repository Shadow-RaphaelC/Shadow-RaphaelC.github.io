// Copy button for the email

// Take the copy button from the html page by it's Id
const copyBtn = document.getElementById("copy-btn");

// Does the button exist?
if (copyBtn) {
    // Runs this function every time the button is clicked
    copyBtn.addEventListener("click", async () => {
        // Wait for the navigator to write the email into the clipboard
        await navigator.clipboard.writeText("raphc.official.business@gmail.com");
    
        const isFrench = document.body.classList.contains("fr");
        // Place the string "Copied!" into the content of the button
        copyBtn.textContent = isFrench ? "Copié !" : "Copied!";
    
        // Wait for 2000ms and then reset the button's text back to "Copy"
        setTimeout(() => {
            copyBtn.textContent = isFrench ? "Copier" : "Copy";
        }, 2000);
    });
}

// Take the language button from the html page by it's Id
const langBtn = document.getElementById("lang-btn");

// Creates a function called setLang with lang as a paramater
function setLang(lang) {
    // Adds the fr class if the condition is true and removes it if it's false
    document.body.classList.toggle("fr", lang === "fr");

    // Updates the language so screen readers and Google knows what language is showing
    document.documentElement.lang = lang;

    // Changes the text content of the button to the right language
    langBtn.textContent = lang === "fr" ? "EN" : "FR";

    // Adds the right language to the copy button
    if (copyBtn) {
        copyBtn.textContent = lang === "fr" ? "Copier" : "Copy";
    }

    try {
        // Saves the language choice in the browser
        localStorage.setItem("lang", lang);
    } catch {}
}

let savedLang = null;

try {
    // Gets the language the user picked last time, if any
    savedLang = localStorage.getItem("lang");
} catch {}

// Saves what the broswer language is for the user
const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";

// Uses the saved choice if there is none, it checks the browser's language
setLang(savedLang || browserLang);

// Adds a listener to the click of said button
langBtn.addEventListener("click", () => {
    // Checks which language is which and changes the class depending on the answer
    const isFrench = document.body.classList.contains("fr");
    setLang(isFrench ? "en" : "fr");
});