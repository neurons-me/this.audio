/* To use this code:
Make sure you're serving your page over HTTPS/SSL, 
since many browsers require a secure context for using the SpeechRecognition API.
Include this script in a page that has a button with an ID of start-button.

When the user clicks this button, speech recognition will start listening for speech.
When the user says something that is recognized as speech, 
the recognition service will attempt to recognize it.
 If the word "hello" is spoken, an alert will pop up. */
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support webkitSpeechRecognition. Try using Google Chrome.');
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false; // Set to false for single-shot recognition
    recognition.interimResults = false; // We don't want interim results
    recognition.lang = 'en-US'; // Set the language of the recognition
    recognition.maxAlternatives = 1; // We're only interested in the top match
    recognition.onstart = function() {
      console.log('Speech recognition service has started');
    };
    recognition.onresult = function(event) {
      var lastResultIndex = event.results.length - 1;
      var word = event.results[lastResultIndex][0].transcript.trim().toLowerCase();
      console.log('Recognition result received:', word);
      if (word === "hello") {
        console.log('The word "hello" has been recognized!');
        // You can run any function here to handle the event
        alert('Hello there!');
      }
    };
    recognition.onerror = function(event) {
      console.log('Recognition error:', event.error);
    };
    recognition.onend = function() {
      console.log('Speech recognition service disconnected');
      // Optionally restart the recognition service
      // recognition.start();
    };
    // Start the speech recognition
    function startRecognition() {
      recognition.start();
    }
    // Bind the function to a button or any other event
    document.querySelector('#start-button').addEventListener('click', startRecognition);
  }
  