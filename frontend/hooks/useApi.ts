"use client";
import axios from "axios";

const baseURL =
	process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") ||
	"http://127.0.0.1:8000";

export function useApi() {
	const get = async (endpoint: string) => {
		const url =
			baseURL + "/" + (endpoint.startsWith("/") ? endpoint : `/${endpoint}`);
		const response = await axios.get(url);
		if (response.status !== 200) {
			throw new Error(`GET ${endpoint} failed: ${response.statusText}`);
		}
		return response.data;
	};

	const post = async (endpoint: string, data: any) => {
		const url =
			baseURL + "/" + (endpoint.startsWith("/") ? endpoint : `/${endpoint}`);
		const response = await axios.post(url, data);
		if (response.status !== 201 && response.status !== 200) {
			throw new Error(`POST ${endpoint} failed: ${response.statusText}`);
		}
		return response.data;
	};

	const put = async (endpoint: string, data: any) => {
		const url =
			baseURL + "/" + (endpoint.startsWith("/") ? endpoint : `/${endpoint}`);
		const response = await axios.put(url, data);
		if (response.status !== 200) {
			throw new Error(`PUT ${endpoint} failed: ${response.statusText}`);
		}
		return response.data;
	};
	return { get, post, put };
}
