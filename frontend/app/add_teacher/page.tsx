"use client";
import Link from "next/link";
import { useState } from "react";
import { useApi } from "@/hooks/useApi";

export default function Page() {
	const { post } = useApi();
	const [form, setForm] = useState({
		name: "",
		course_name: "",
		course_duration: "",
		seat: "",
	});
	const [message, setMessage] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const data = {
				name: form.name,
				course_name: form.course_name,
				course_duration: Number(form.course_duration),
				seat: Number(form.seat),
			};
			await post("/api/create", data); // endpoint should match your DRF view
			setMessage("Teacher saved successfully!");
			setForm({ name: "", course_name: "", course_duration: "", seat: "" });
		} catch (err: any) {
			setMessage("Error saving teacher: " + err.message);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-4">
				<h2>Add Teacher</h2>
				<Link
					className="font-bold text-blue-500"
					href="/"
				>
					Home
				</Link>
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-2 max-w-sm"
			>
				<input
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					required
				/>
				<input
					name="course_name"
					placeholder="Course Name"
					value={form.course_name}
					onChange={handleChange}
					required
				/>
				<input
					name="course_duration"
					placeholder="Course Duration"
					type="number"
					value={form.course_duration}
					onChange={handleChange}
					required
				/>
				<input
					name="seat"
					placeholder="Seat"
					type="number"
					value={form.seat}
					onChange={handleChange}
					required
				/>
				<button type="submit">Save</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}
