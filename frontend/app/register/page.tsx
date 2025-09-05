"use client";
import { useState } from "react";

export default function RegisterForm() {
	const [name, setName] = useState("");
	const [courseId, setCourseId] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const res = await fetch("http://localhost:8000/api/register/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, course: courseId }),
		});

		if (res.ok) {
			setMessage("Successfully Registered ✅");
		} else {
			const error = await res.json();
			setMessage(error.course || "Something went wrong ❌");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col p-4 max-w-md mt-6 mx-auto border border-purple-200 rounded bg-purple-50"
		>
			<input
				type="text"
				placeholder="Your Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="border border-purple-200 rounded p-2 mb-4"
			/>

			<input
				type="number"
				placeholder="Course ID"
				value={courseId}
				onChange={(e) => setCourseId(e.target.value)}
				className="border border-purple-200 rounded p-2 mb-4"
			/>

			<button type="submit">Register</button>
			<p>{message}</p>
		</form>
	);
}
