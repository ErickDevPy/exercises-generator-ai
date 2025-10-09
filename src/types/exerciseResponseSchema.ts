export const EXERCISE_RESPONSE_SCHEMA = {
    type: "array", 
    description: "A complete list of generated multiple-choice questions.",
    items: {
        type: "object",
        properties: {
            question: {
                type: "string",
                description: "The full text of the question or problem."
            },
            options: {
                type: "array",
                description: "An array containing exactly four strings representing the multiple-choice options.",
                items: { type: "string" },
                minItems: 4,
                maxItems: 4,
            },
            answer: {
                type: "string",
                description: "The correct answer text. This text must exactly match one of the strings in the 'options' array."
            },
            explanation: {
                type: "string",
                description: "A brief and ultra-concise explanation of the calculation steps. Limit the explanation to a maximum of 3 sentences (or approximately 50 words) to save tokens. Do NOT include any self-correction or conversational filler."
            }
        },
        required: ["question", "options", "answer", "explanation"],
    },
};