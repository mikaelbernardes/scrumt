import { z } from 'zod';

export const signupSchema = z.object({
	name: z.string().min(1, 'Campo obrigatório'),
	email: z.string().min(1, 'Campo obrigatório'),
	username: z.string().min(1, 'Campo obrigatório'),
	password: z.string().min(1, 'Campo obrigatório'),
	confirmPassword: z.string().min(1, 'Campo obrigatório'),
});

export type SignupTypeSchema = z.infer<typeof signupSchema>;
