'use client';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupTypeSchema } from './schema';

export default function SignupTabContent() {
	const form = useForm<SignupTypeSchema>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: '',
			username: '',
			password: '',
			email: '',
			confirmPassword: '',
		},
	});

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState<boolean>(false);

	const onSubmit = (data: SignupTypeSchema) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-5 w-full">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome</FormLabel>
							<FormControl>
								<Input
									placeholder="Insira seu nome"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input
									placeholder="Insira seu e-mail"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Usuário</FormLabel>
							<FormControl>
								<Input
									placeholder="Insira seu usuário"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										placeholder="Insira sua senha"
										type={showPassword ? 'text' : 'password'}
										{...field}
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
										onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? (
											<EyeOffIcon className="w-5 h-5 text-muted-foreground" />
										) : (
											<EyeIcon className="w-5 h-5 text-muted-foreground" />
										)}
									</button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirmar senha</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										placeholder="Insira novamente sua senha"
										type={showConfirmPassword ? 'text' : 'password'}
										{...field}
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
										onClick={() =>
											setShowConfirmPassword(!showConfirmPassword)
										}>
										{showConfirmPassword ? (
											<EyeOffIcon className="w-5 h-5 text-muted-foreground" />
										) : (
											<EyeIcon className="w-5 h-5 text-muted-foreground" />
										)}
									</button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Cadastrar</Button>
			</form>
		</Form>
	);
}
