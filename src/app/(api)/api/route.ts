// pages/api/guavaAdvice.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateAdviceForGuava } from '../_actions'; // Adjust the import path as necessary

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { condition } = req.body;
    const advice = await generateAdviceForGuava(condition);
    res.status(200).json({ message: advice });
  } catch (error) {
    console.error('Failed to generate advice:', error);
    res.status(500).json({ message: 'Failed to generate advice' });
  }

  return Response.json(res);
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { condition } = req.body;
    const advice = await generateAdviceForGuava(condition);
    res.status(200).json({ advice });
  } catch (error) {
    console.error('Failed to generate advice:', error);
    res.status(500).json({ message: 'Failed to generate advice' });
  }

  return Response.json(res);
}
