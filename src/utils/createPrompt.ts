interface CreatePromptParams {
    subject: string;
    reference?: string;
    history: string[];
    difficulty: string;
    exercisesNumber: number;
}

export function createPrompt({ subject, reference, history, difficulty, exercisesNumber }: CreatePromptParams): string {
    let optionalCriteria = '';

    if (reference) {
        optionalCriteria += `\n**4. Style Reference:** The questions should mimic the style and complexity of the "${reference}".`;
    }

    if (history.length > 0) {
        optionalCriteria += `\n**5. Constraint - Avoid Duplicates:** Do not generate questions that are conceptually identical to the following questions already presented to the user:\n- ${history.join('\n- ')}`;
    }

    const prompt = `You are an expert AI assistant specializing in creating high-quality educational content. Your task is to generate a set of multiple-choice questions based on the criteria below.

---
### CRITERIA
---
**1. Core Subject:** ${subject}
**2. Difficulty Level:** ${difficulty}
**3. Target Number of Questions:** ${exercisesNumber} (This is a target, not a strict requirement. See the critical instruction below).${optionalCriteria}
---
### CRITICAL INSTRUCTION: OUTPUT SIZE MANAGEMENT
---
**Your absolute priority is to generate a complete and valid JSON response.** The 4096 token output limit is a hard constraint.
- You **must** proactively stop generating new questions if you estimate that adding another one will cause the total output to exceed the 4096 token limit.
- It is **mandatory** to return fewer questions than the target if necessary to respect the token limit. An incomplete or truncated JSON response is considered a failure.

---
### OUTPUT FORMAT
---
**IMPORTANT:** You must format the entire response as a single, valid JSON array of objects. Do not include any text or explanation outside of the JSON structure.

Each object in the array represents a single question and must have the following exact keys:
- \`question\`: (String) The question text.
- \`options\`: (Array of Strings) An array containing exactly four possible answers.
- \`answer\`: (String) The text of the correct answer. This must be one of the strings from the "options" array.
- \`explanation\`: (String) A brief and clear explanation of why the answer is correct.
`;

    return prompt;
}