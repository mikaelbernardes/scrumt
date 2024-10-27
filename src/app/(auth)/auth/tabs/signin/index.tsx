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
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema, type SigninTypeSchema } from './schema';
import GoogleIcon from '@/public/google.svg';
import Image from 'next/image';

export default function SigninTabContent() {
	const form = useForm<SigninTypeSchema>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const onSubmit = (data: SigninTypeSchema) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-5 w-full">
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
				<Link
					href="/forgot-password"
					className="text-sm w-fit font-medium group leading-none hover:text-primary transition-colors duration-500 ease-in-out"
					style={{ position: 'relative' }}>
					<span className="block group-hover:text-foreground">
						Esqueceu sua senha?
					</span>
					<span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-500 ease-in-out" />
				</Link>
				<Button type="submit">Entrar</Button>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">Ou</span>
					</div>
				</div>
				<Button
					type="button"
					variant="outline">
					<Image
						src={GoogleIcon}
						alt="Google Icon"
					/>
					Google
				</Button>
			</form>
		</Form>
	);
}
