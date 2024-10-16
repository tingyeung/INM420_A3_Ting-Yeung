// API Key for Merriam-Webster Dictionary
const apiKey = 'b60be605-169c-4cf3-ad27-ff746e3597ba'; // Replace with your API key
const baseUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

// Function to fetch the definition of a word
async function fetchDefinition() {
    const word = document.getElementById('wordInput').value.trim(); // Get the input word and remove extra spaces

    // Check if the input field is empty
    if (!word) {
        alert('Please enter a word.'); // Alert user if no word is entered
        return;
    }
    
    // Construct the API request URL
    const url = `${baseUrl}${word}?key=${apiKey}`;
    
    try {
        const response = await fetch(url); // Fetch data from the API
        const data = await response.json(); // Parse the JSON response
        
        console.log(data); // Log the response data for debugging

        // Check if data contains definitions
        if (data.length > 0 && data[0].shortdef) {
            // Display the first definition
            document.getElementById('definition').innerHTML = `<strong>Definition:</strong> ${data[0].shortdef[0]}`;
        } else {
            // Inform the user if no definition is found
            document.getElementById('definition').innerHTML = 'No definition found.';
        }
    } catch (error) {
        // Log error and display error message
        console.error('Error fetching data:', error);
        document.getElementById('definition').innerHTML = 'An error occurred while fetching the definition.';
    }
}
