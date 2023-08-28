import { strict_output } from '@/lib/gpt';
import questionInputSchema from '@/schemas/quizInputSchema';
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const POST = async (req: Request, res: Response) => {
	try {
		const body = await req.json();
		const { content, section, additionalContext, numberOfQuestions, questionStyle } = questionInputSchema.parse(body);

		const questions = await strict_output(
			`You are a helpful AI that is able to generate ${numberOfQuestions} pairs of questions and answers, the length of the answer should not exceed 50 words. Store the pair of question and answers in a JSON array`,
			new Array(numberOfQuestions).fill(
				`You are to generate a random hard open-ended question about ${content}. Find loopholes and unaddressed keypoints in the content.`
			),
			{
				question: 'question',
				answer: 'possible answer to question with max length of 20 words',
			}
		);

		return NextResponse.json(
			{
				questions,
			},
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof ZodError) {
			return NextResponse.json(
				{
					error: error.issues,
				},
				{
					status: 400,
				}
			);
		}
	}
};
