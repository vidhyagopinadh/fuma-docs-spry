import { createGroq } from '@ai-sdk/groq';
import { convertToModelMessages, streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  // Check if API key is set
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({
        error: 'Groq API key is not configured. Please set the GROQ_API_KEY environment variable.',
        details: 'Get your free API key at: https://console.groq.com/keys'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const reqJson = await req.json();

  const result = streamText({
    // Using Llama 3.3 70B - fast and capable (free tier)
    // Other options: 'llama-3.1-8b-instant', 'mixtral-8x7b-32768', 'gemma2-9b-it'
    model: groq('llama-3.3-70b-versatile'),
    system: `You are a helpful AI assistant for the Sprymd documentation site.
You help users understand concepts related to the documentation content.
Be concise and helpful. If you don't know something, say so.`,
    messages: convertToModelMessages(reqJson.messages, {
      ignoreIncompleteToolCalls: true,
    }),
  });

  return result.toUIMessageStreamResponse();
}