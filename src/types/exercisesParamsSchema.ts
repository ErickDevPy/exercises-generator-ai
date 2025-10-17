import { z } from "zod";

export const EXERCISE_PARAMS_SCHEMA = z.object({
    subjects: z
        .string()
        .min(4, "The Subjects field must have at least 4 characters.")
        .max(100, "The Subjects field cannot exceed 100 characters."),

    reference: z
        .string()
        .max(100, "The Reference source cannot exceed 100 characters.")
        .nullable() 
        .transform((e) => (e === '' || e === null) ? undefined : e)
        .optional(),

    difficulty: z.enum(['easy', 'medium', 'hard'], { 
        message: "Please select a valid difficulty.", 
    }),

    exercisesNumber: z.coerce
        .number({
            error: "The number of exercises is required.",
        })
        .int("Must be an integer.")
        .positive("The number of exercises must be greater than zero.")
        .max(100, "Maximum of 100 exercises per subject.")
        
        .refine((val) => val > 0, {
            message: "The number of exercises must be greater than zero.",
        })
});

export type ExerciseParamsData = z.infer<typeof EXERCISE_PARAMS_SCHEMA>;

export type ExerciseParamsInput = z.input<typeof EXERCISE_PARAMS_SCHEMA>;