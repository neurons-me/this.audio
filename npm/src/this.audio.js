/* ♫ ♫ ♫ ♫ ♫ ♫ ♫ ♫ 
this.audio.js
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ.
🆂🆄🅸🅶🅽♫ ♫ ♫ ♫ /*
/**
 * @file this.audio
 */
import { createAudioFormatter } from './createAudioFormatter.js';

/**
 * Asynchronously processes an audio file, returning structured data or an error object.
 * @param {string} audioFilePath - The path or URL to the audio file.
 * @returns {Promise<Object>} A promise that resolves to an object indicating success or failure, with data or an error message.
 */
async function Audio(audioFilePath) {
    let { formatter, error } = await createAudioFormatter(audioFilePath);
    // If there's an error in creating the formatter, return it immediately
    if (error) {
        return { success: false, error };
    }

    try {
        // Process the audio file using the appropriate formatter
        const processedAudio = await formatter.process();
        return { success: true, data: processedAudio };
    } catch (processingError) {
        // Catch and return any errors that occur during processing
        return { success: false, error: processingError.message };
    }
}

console.log("this .Audio");
export default Audio;

