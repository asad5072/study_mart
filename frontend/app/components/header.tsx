import Link from "next/link";
export default function Header() {
	return (
		<header className="header  bg-purple-100">
			<div className="flex items-center justify-between container mx-auto p-4">
				<Link href="/">Study Mart</Link>
				<div className="space-x-4">
					<Link href="/course">Course</Link>
					<Link href="/register">Register</Link>
				</div>
			</div>
		</header>
	);
}
