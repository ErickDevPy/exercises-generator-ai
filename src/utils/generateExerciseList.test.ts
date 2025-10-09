import { describe, it, expect } from 'vitest';
import { generateExerciseList } from "./generateExerciseList";
import type { Exercises } from '~/types';

describe('generateExerciseList', () => {
  const apiKey = import.meta.env.VITE_KEY_API || null;

  it('should generate exercises and verify the questions length', async () => {
    const questions: Exercises = [];
    const subjects = 'General Knowledge';
    const difficulty = 'Hard';
    const numberOfExercises = 15;
    const addQuestions = (exercises: Exercises) => {
      console.log('Number of exercises received:', exercises.length);
      questions.push(...exercises);
    };

    await generateExerciseList({ apiKey, subjects, difficulty, history: undefined, exercisesNumber: numberOfExercises, addQuestions });
    
    expect(questions).toHaveLength(numberOfExercises);
  });

  it('should generate 5 exercises for each of the 5 subjects', async () => {
    const subjects = 'Basic Algebra, Linear Equations, Quadratic Functions, Trigonometry, Calculus';
    const difficulty = 'Easy';
    const numberOfExercises = 5;

    const response = await generateExerciseList({apiKey, subjects, difficulty, history: undefined, exercisesNumber: numberOfExercises});
    
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('questions');
  });

  it('should generate 10 exercises for each of the 2 subjects', async () => {
    const subjects = 'History of Rome, World War II';
    const difficulty = 'Medium';
    const numberOfExercises = 10;

    const response = await generateExerciseList({apiKey, subjects, difficulty, history: undefined, exercisesNumber: numberOfExercises});
    
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('questions');
  });

  it('should generate exercises when using a university as reference (Harvard)', async () => {
    const subjects = 'Quantum Physics';
    const difficulty = 'Hard';
    const numberOfExercises = 2;
    const referenceInstitution = 'Harvard University, Graduate Program 2024'; 

    const response = await generateExerciseList({ apiKey, subjects, difficulty, history: undefined, exercisesNumber: numberOfExercises, reference: referenceInstitution });
    
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('questions');
  });

  
});