const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

const generateAIResponse = async prompt => {
  //   const response = await ai.chat.completions.create({
  //     model: "gemini-1.5-pro",
  //     messages: [{ role: "user", content: prompt }],
  //     maxTokens: 100,
  //     temperature: 0.5,
  //     topP: 0.95,
  //     stopSequences: ["\n"],
  //     responseFormat: "text",
  //   });
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
};



const generateVector = async (content) => {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: content,
    config: {
      outputDimensionality: 768,
    }
  });

  return response.embeddings;
}


module.exports = {
  generateAIResponse,
  generateVector,
};
