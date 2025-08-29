import TeacherList from "./components/teacherList";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex items-start justify-between gap-4">
				<TeacherList />
				<Link href="/add_teacher">Add Teacher</Link>
			</div>
		</div>
	);
}
