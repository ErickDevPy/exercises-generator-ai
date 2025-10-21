import { z } from "zod";

export const EXERCISE_PARAMS_SCHEMA = z.object({
    subjects: z
        .array(z.string())
        .min(1, "You must provide at least one subject.")
        .max(10, "You can't add more than 10 subjects.")
    ,

    reference: z
        .string()
        .max(100, "The Reference source cannot exceed 100 characters.")
        .nullable() 
        .transform((e) => (e === '' || e === null) ? undefined : e)
        .optional()
    ,

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