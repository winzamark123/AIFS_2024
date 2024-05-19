import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateAdviceForGuava(condition: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant specialized in agricultural advice for farmers.',
      },
      {
        role: 'user',
        content: `What should I do if my guava tree has ${condition}?`,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  return completion.choices[0].message.content; // Adjust based on actual API response structure
}
