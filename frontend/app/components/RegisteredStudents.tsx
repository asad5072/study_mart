"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useApi } from "@/hooks/useApi";

export type Student = {
	id: number;
	name: string;
	course_id: number;
	course: string;
	course_name: string;
	course_duration: number;
};
const RegisteredStudent = () => {
	const [student, setStudent] = useState<Student[]>([]);
	const { get } = useApi();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const data = await get("/api/students/");
				console.log(data); // Changed endpoint to likely teachers endpoint
				setStudent(Array.isArray(data) ? data : []); // Ensure data is an array
			} catch (err) {
				setError("Failed to fetch teachers");
			} finally {
				setLoading(false);
			}
		};
		fetchStudents();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="border border-purple-200 rounded p-4 mt-6 mx-auto bg-purple-50">
			<h2 className="text-xl font-bold mb-2 text-center">Registered Student</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{student.map((student: Student) => (
					<div
						className="w-full bg-purple-100 p-4 rounded border border-purple-200"
						key={student.id}
					>
						<p>Name: {student.name}</p>
						<p>Course Name: {student.course_name}</p>
						<p>Duration: {student.course_duration}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default RegisteredStudent;
