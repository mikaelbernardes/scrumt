import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["400", "600", "800"],
	style: "normal",
	variable: "--poppins",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ScrumT",
	description:
		"ScrumT é um aplicativo desktop para o uso da metodologia ágil scrum",
	authors: {
		name: "Mikael Bernardes",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
