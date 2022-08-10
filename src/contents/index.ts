import type { PlasmoContentScript } from "plasmo";
import { driver } from "~extractor";


export const config: PlasmoContentScript = {
    matches: ["<all_urls>"],
    all_frames: true
}

console.log("Content Script is running")


driver()