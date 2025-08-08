
import { getQuizQuestions } from '@/lib/db';

export default async function handler(req, res) {
  try {
    const questions = await getQuizQuestions();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quiz questions' });
  }
}
