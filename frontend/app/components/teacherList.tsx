"use client";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

export type Teacher = {
	id: number;
	name: string;
	course_name: string;
	course_duration: number;
	seat: number;
};

const TeacherList = () => {
	const { get } = useApi();
	const [teachers, setTeachers] = useState<Teacher[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchTeachers = async () => {
			try {
				const data = await get(""); // Changed endpoint to likely teachers endpoint
				setTeachers(Array.isArray(data) ? data : []); // Ensure data is an array
			} catch (err) {
				setError("Failed to fetch teachers");
			} finally {
				setLoading(false);
			}
		};
		fetchTeachers();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	return (
		<div>
			<p className="text-xl font-semibold">Teacher List</p>
			<div>
				{teachers.map((teacher: Teacher) => (
					<div key={teacher.id}>
						<p>Name: {teacher.name}</p>
						<p>Seat: {teacher.seat}</p>
						<p>Course Name: {teacher.course_name}</p>
						<p>Course Duration: {teacher.course_duration}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default TeacherList;
