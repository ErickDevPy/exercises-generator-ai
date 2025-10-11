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
### CRITICAL INSTRUCTIONS
---
**1. JSON Integrity is Paramount:** Your absolute highest priority is to output a single, valid, and perfectly formed JSON array. The entire response must start with \`[\` and end with \`]\`.
**2. Graceful Completion:** The requested number of questions is a target, not a strict requirement. It is **much more important** to generate fewer questions and provide a complete JSON array than to attempt to meet the target and produce incomplete or malformed output.
**3. Self-Correction:** If you sense you are approaching your output limit, complete the current question object you are writing, correctly close the JSON array with a \`]\`, and then stop. Do not start a new question if you cannot finish it.

---
### GENERATION CRITERIA
---
**1. Core Subject:** ${subject}
**2. Difficulty Level:** ${difficulty}
**3. Target Number of Questions:** ${exercisesNumber}${optionalCriteria}
---
### OUTPUT FORMAT
---
**IMPORTANT:** Your entire response must be the JSON array itself. Do not include any text, explanations, or markdown formatting outside of the JSON structure.

Each object in the array represents a single question and must have the following exact keys:
- \`question\`: (String) The question text.
- \`options\`: (Array of Strings) An array containing exactly four possible answers.
- \`answer\`: (String) The text of the correct answer. This must be one of the strings from the "options" array.
- \`explanation\`: (String) A brief and clear explanation of why the answer is correct.
`;

    return prompt;
}