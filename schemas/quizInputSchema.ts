import { z } from 'zod';

// Define the Zod schema
const questionInputSchema = z.object({
  content: z.string().min(30).max(1000),
  section: z.string(),
  additionalContext: z.string().optional().default("general subject"),
  numberOfQuestions: z.number().int().min(1).default(5),
  questionStyle: z.enum(['formal', 'informal', 'specific', 'general']).optional().default("formal"),
});

export default questionInputSchema