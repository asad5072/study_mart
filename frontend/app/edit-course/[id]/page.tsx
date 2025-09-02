"use client";
import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import { useParams } from "next/navigation";
import Link from "next/link";

type Course = {
	id?: number;
	name: string;
	course_name: string;
	course_duration: number;
	seat: number;
};

export default function EditCoursePage() {
	const params = useParams();
	const id = params?.id as string;
	const { get, put } = useApi();
	const [course, setCourse] = useState<Course | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!course) return;
		try {
			const data = {
				name: course.name,
				course_name: course.course_name,
				course_duration: Number(course.course_duration),
				seat: Number(course.seat),
			};
			await put(`/api/teachers/${id}/`, data); // <-- Correct endpoint for update
			setMessage("Teacher updated successfully!");
		} catch (err: any) {
			setMessage("Error updating teacher: " + err.message);
		}
	};

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
			<div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-2 max-w-sm pt-6"
				>
					<input
						name="name"
						className="border p-2 rounded"
						value={course.name}
						onChange={(event) =>
							setCourse({ ...course, name: event.target.value })
						}
						required
					/>
					<input
						name="course_name"
						className="border p-2 rounded"
						value={course.course_name}
						onChange={(event) =>
							setCourse({ ...course, course_name: event.target.value })
						}
						required
					/>
					<input
						name="course_duration"
						className="border p-2 rounded"
						type="number"
						value={course.course_duration}
						onChange={(event) =>
							setCourse({
								...course,
								course_duration: Number(event.target.value),
							})
						}
						required
					/>
					<input
						name="seat"
						className="border p-2 rounded"
						type="number"
						value={course.seat}
						onChange={(event) =>
							setCourse({ ...course, seat: Number(event.target.value) })
						}
						required
					/>
					<button
						className="bg-purple-100 border border-purple-200 py-1 rounded "
						type="submit"
					>
						Update
					</button>
				</form>
				{message && <p>{message}</p>}
			</div>
		</div>
	);
}
