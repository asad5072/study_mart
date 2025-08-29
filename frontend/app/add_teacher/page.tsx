import Link from "next/link";
export default function addTeacher() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex items-center justify-between gap-4">
				Add New Teacher
				<Link href="/">Back to Home</Link>
			</div>
		</div>
	);
}
