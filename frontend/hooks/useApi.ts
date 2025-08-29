"use client";
import axios from "axios";

const baseURL =
	process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") ||
	"http://127.0.0.1:8000";

export function useApi() {
	// Get Method
	const get = async (endpoint: string) => {
		// Ensure endpoint starts with a slash
		const url =
			baseURL + "/api" + (endpoint.startsWith("/") ? endpoint : `/${endpoint}`);

		const response = await axios.get(url);
		if (response.status !== 200) {
			throw new Error(`GET ${endpoint} failed: ${response.statusText}`);
		}
		return response.data;
	};
	return { get };
}
