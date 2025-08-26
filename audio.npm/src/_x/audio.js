//audio.js
class AudioAnalyzer {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount); // For frequency data
    }

    load(src) {
        const request = new XMLHttpRequest();
        request.open('GET', src, true);
        request.responseType = 'arraybuffer';
        
        request.onload = () => {
            this.audioContext.decodeAudioData(request.response, (buffer) => {
                const source = this.audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(this.analyser);
                this.analyser.connect(this.audioContext.destination);
                source.start(0);
            });
        };
        request.send();
    }

    getFrequencyData() {
        this.analyser.getByteFrequencyData(this.dataArray);
        return this.dataArray;
    }
}

// Example usage:
const analyzer = new AudioAnalyzer();
analyzer.load('path_to_your_audio_file.mp3');

// Later, you can retrieve frequency data for analysis
const frequencyData = analyzer.getFrequencyData();
