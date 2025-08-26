// In this.audio/tests/test_node_env.js
import thisAudio from '../index.js'; 
// Testing workflow for node...
thisAudio('./mp3.mp3').then(processedAudio => {
    console.log('Processed audio data RightPath:', processedAudio);
});

// Testing if valid Path format
thisAudio(3).then(processedAudio => {
    console.log('Processed audio data wrong Path Integer outcome:', processedAudio);
});


