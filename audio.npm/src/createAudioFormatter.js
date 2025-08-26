/*
    createAudioFormatter.js
    ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ ♫ ♫ ♫ ♫ 
    🆂🆄🅸🅶🅽 
*/
// In createAudioFormatter.js

import AudioFormatterNode from './nodejs/audioFormatter.node.js';
import AudioFormatterBrowser from './browser/audioFormatter.browser.js';

/**
 * Checks if the current runtime environment is Node.js.
 * @returns {boolean} True if the environment is Node.js, false otherwise.
 */
function isNode() {
    return typeof window === 'undefined';
}

/**
 * Checks if the current runtime environment is a browser.
 * @returns {boolean} True if the environment is a browser, false otherwise.
 */
function isBrowser() {
    return typeof window !== 'undefined';
}

/**
 * Checks if the provided input is a valid path.
 * This is a very basic check and might need to be more robust.
 * @param {any} input - The input to check.
 * @returns {boolean} - True if the input is a string, false otherwise.
 */
function isPath(input) {
    return typeof input === 'string';
}

/**
 * Checks if the provided input is a valid URL.
 * @param {any} input - The input to check.
 * @returns {boolean} - True if the input is a valid URL, false otherwise.
 */
function isURL(input) {
    try {
        new URL(input);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Checks if the provided input is a Blob.
 * @param {any} input - The input to check.
 * @returns {boolean} - True if the input is a Blob, false otherwise.
 */
function isBlob(input) {
    return input instanceof Blob;
}

/**
 * Creates an instance of the appropriate AudioFormatter (Node or Browser) based on the environment and input type.
 * @param {string | Blob} audioInput - The path to the audio file or the audio Blob/URL.
 * @returns {AudioFormatterNode | AudioFormatterBrowser} An instance of the appropriate AudioFormatter.
 * @throws {Error} If the environment is unsupported or the input type is invalid.
 */
// In createAudioFormatter.js

export async function createAudioFormatter(audioInput) {
    try {
        if (isNode()) {
            if (!isPath(audioInput)) {
                console.log("Creating audio formatter for" + " ( " + audioInput + " ) " + "failed. Invalid input type.");
                throw new Error("Invalid input type:" + "( " + audioInput + " )"+ "Input must be a string path in Node.js environment.");
            }
            console.log("Creating audio formatter for " + audioInput + "...");
            return { formatter: new AudioFormatterNode(audioInput), error: null };
        } else if (isBrowser()) {
            if (!isURL(audioInput) && !isBlob(audioInput)) {
                throw new Error("Invalid input type: Input must be a URL or Blob in browser environment.");
            }
            return { formatter: new AudioFormatterBrowser(audioInput), error: null };
        } else {
            throw new Error("Unsupported environment or invalid input type.");
        }
    } catch (error) {
        return { formatter: null, error: error.message };
    }
}
