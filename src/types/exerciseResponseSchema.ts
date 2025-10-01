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
            },
            answer: {
                type: "string",
                description: "The correct answer text. This text must exactly match one of the strings in the 'options' array."
            },
            explanation: {
                type: "string",
                description: "A brief, clear, and comprehensive explanation detailing why the answer is correct."
            }
        },
        required: ["question", "options", "answer", "explanation"],
    },
};