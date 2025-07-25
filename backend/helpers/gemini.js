import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GEMINI_SECRET;
const ai = new GoogleGenAI({apiKey});

async function gemini0(prompt) {
  console.log("hai aku function gemini")
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `prompt: ${prompt} \n  format: html-like \n no \`\`\``,
  });
  console.log(response.text);
  return response.text
}
console.log(gemini0,"hai aku gemini dari gemini.js")
export default gemini0