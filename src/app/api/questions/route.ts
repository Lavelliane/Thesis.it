import { strict_output } from "@/lib/gpt";
import questionInputSchema from "@/schemas/quizInputSchema";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    const {
      content,
      section,
      additionalContext,
      numberOfQuestions,
      questionStyle,
    } = questionInputSchema.parse(body);

    const questions = await strict_output(
      `You are an AI that can simulate a panel defense in the academe. You are able to generate a pair of questions and answers. The length of the answer should not exceed 100 words. Store the pair of question and answers in a JSON array`,
      new Array(numberOfQuestions).fill(
        `Generate questions based on the following research paper section using this content: ${content}
        Additional details about this are the following:
        Research Paper Section: ${section}
        Additional Context: ${additionalContext}
        Question style: ${questionStyle}`
      ),
      {
        question: "question",
        answer: "detailed and comprehensive answer with max length of 60 words",
      }
    );

    return NextResponse.json({
        questions
    }, {status: 200})

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
