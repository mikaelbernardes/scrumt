import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SigninTabContent from './tabs/signin';
import SignupTabContent from './tabs/signup';

export default function Page() {
	return (
		<div className="w-full h-screen flex gap-5">
			<section className="flex w-1/2 h-full p-5">
				<div className="w-full h-full rounded-xl bg-secondary" />
			</section>
			<section className="flex w-1/2 h-full flex-col items-center justify-center">
				<Tabs
					defaultValue="signin"
					className="w-[360px]">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="signin">Entrar</TabsTrigger>
						<TabsTrigger value="signup">Cadastrar</TabsTrigger>
					</TabsList>
					<TabsContent value="signin">
						<SigninTabContent />
					</TabsContent>
					<TabsContent value="signup">
						<SignupTabContent />
					</TabsContent>
				</Tabs>
			</section>
		</div>
	);
}
