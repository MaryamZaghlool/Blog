"use client";
// context/PostsContext.tsx
import React, { createContext, useEffect, useState, useContext } from "react";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type PostsContextType = {
    posts: Post[];
    paginatedPosts: Post[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    postsPerPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    getPostById: (id: number) => Post | undefined; // ✅ أضفنا دي
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                setError("Failed to fetch posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    // ✅ دالة get by id
    const getPostById = (id: number) => {
        return posts.find(post => post.id === id);
    };

    return (
        <PostsContext.Provider
            value={{
                posts,
                paginatedPosts,
                loading,
                error,
                currentPage,
                postsPerPage,
                setCurrentPage,
                getPostById, // ✅ نضفها هنا
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error("usePosts must be used within a PostsProvider");
    }
    return context;
};
