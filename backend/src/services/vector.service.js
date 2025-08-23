// Import the Pinecone library
const { Pinecone } = require("@pinecone-database/pinecone");

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

const cohortChatGptIndex = pc.Index("cohort-chat-gpt");

const createMemory = async ({ vectors, metadata, messageId }) => {
  await cohortChatGptIndex.upsert([
    {
      id: messageId,
      values: vectors,
      metadata,
    },
  ]);
};

const queryMemory = async ({ queryVector, limit = 5, metadata }) => {
  const data = await cohortChatGptIndex.query({
    vector: queryVector,
    topK: limit,

    filter: metadata ? metadata : undefined,
    includeMetadata: true,
  });

  return data.matches;
};

module.exports = {
  createMemory,
  queryMemory,
};

/* ChatVerse */
