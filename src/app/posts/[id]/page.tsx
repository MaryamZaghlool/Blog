"use client";

import { useParams } from "next/navigation";
import { Post, usePosts } from "@/Context/PostsContext";
import SharedCard from "@/shared/SharedCard";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

export default function PostDetails() {
    const { id } = useParams();
    const { getPostById } = usePosts();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const postData = getPostById(Number(id));
        if (postData) {
            setPost(postData);
        }
        setLoading(false);
    }, [id, getPostById]);

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <Box sx={{ mt: 4 }}>
                <SharedCard
                    image="/images/plog3.png"
                    author="Olivia Rhye"
                    date="1 Jan 2023"
                    title={post?.title ?? ""}
                    description={post?.body ?? ""}
                    tags={["Design", "Research"]}
                    direction="column"
                    height='30rem'
                    cardWidth="100%"
                    width="100%"
                />
            </Box>
        </div>
    );
}
