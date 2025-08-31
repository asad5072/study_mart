"use client";
import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import { useParams } from "next/navigation";
import Link from "next/link";

type Course = {
	id: number;
	name: string;
	course_name: string;
	course_duration: number;
	seat: number;
};

export default function EditCoursePage() {
	const params = useParams();
	const id = params?.id as string;
	const { get } = useApi();
	const [course, setCourse] = useState<Course | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) return;
		const fetchCourse = async () => {
			try {
				const data = await get(`/api/teachers/${id}/`);
				setCourse(data);
			} catch (err) {
				setError("Failed to fetch course details");
			} finally {
				setLoading(false);
			}
		};
		fetchCourse();
	}, [id]);

	if (loading) return <div className="p-6">Loading...</div>;
	if (error) return <div className="p-6 text-red-500">{error}</div>;
	if (!course) return <div className="p-6">No course found.</div>;

	return (
		<div className="p-6 bg-white rounded shadow">
			<Link href={"/"}>Back to Home</Link>

			<p>The Id is {id}</p>
			<h1 className="text-2xl font-bold mb-4">Edit Course Page</h1>
			<div>
				<p>
					<strong>Name:</strong> {course.name}
				</p>
				<p>
					<strong>Course Name:</strong> {course.course_name}
				</p>
				<p>
					<strong>Course Duration:</strong> {course.course_duration}
				</p>
				<p>
					<strong>Seat:</strong> {course.seat}
				</p>
			</div>
			{/* Add your course editing form here */}
		</div>
	);
}
