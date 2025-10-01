interface CreatePromptParams {
    subject: string;
    reference?: string;
    history?: string[];
    difficulty: string;
    exercisesNumber: number;
}

export function createPrompt({ subject, reference, history, difficulty, exercisesNumber }: CreatePromptParams) {
    let optionalCriteria = '';

    if (reference) {
        optionalCriteria += `\n**4. Style Reference:** The questions should mimic the style and complexity of the "${reference}".`;
    }

    if (history && history.length > 0) {
        optionalCriteria += `\n**5. Constraint - Avoid Duplicates:** Do not generate questions that are conceptually identical to the following questions already presented to the user:\n- ${history.join('\n- ')}`;
    }

    const prompt = `You are an expert AI assistant specializing in creating high-quality educational content. Your task is to generate a set of multiple-choice questions based on the criteria below.

    ---
    ### CRITERIA
    ---
    **1. Core Subject:** ${subject}
    **2. Difficulty Level:** ${difficulty}
    **3. Number of Questions to Generate:** ${exercisesNumber}${optionalCriteria}
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