import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = useContentStore();

	useEffect(() => {
		const getTrendingContent = async () => {
			const res = await axios.get(`https://netflix-clone-vdcs.onrender.com/api/v1/${contentType}/trending`);
			setTrendingContent(res.data.content);
		};

		getTrendingContent();
	}, [contentType]);

	return { trendingContent };
};
export default useGetTrendingContent;
