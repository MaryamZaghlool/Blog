"use client";
import { usePosts } from "@/Context/PostsContext";
import SharedCard from "@/shared/SharedCard";
import { Button, Pagination, useMediaQuery, useTheme } from "@mui/material";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useThemeContext } from "@/Context/ThemeContext";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

export default function PostsList() {
    const { darkMode } = useThemeContext();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const router = useRouter();

    const {
        paginatedPosts,
        currentPage,
        setCurrentPage,
        postsPerPage,
        posts,
        loading,
        error,
    } = usePosts();

    const totalPages =
        posts.length > 0 ? Math.ceil(posts.length / postsPerPage) : 1;

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

    return (
        <>
            {/* 🟣 Cards */}
            <section className="flex flex-wrap justify-center gap-x-6 gap-y-0 mt-8 mb-0">
                {paginatedPosts.map((post) => (
                    <div
                        key={post.id}
                        className="mb-4"
                        style={{ width: isSmallScreen ? "100%" : "24rem" }}
                        onClick={() => router.push(`/posts/${post.id}`)}
                    >
                        <SharedCard
                            image="./images/plog3.png"
                            author="Olivia Rhye"
                            date="1 Jan 2023"
                            title={post.title}
                            description={post.body}
                            tags={["Design", "Research"]}
                            direction="column"
                            width="100%"
                            height="12.5rem"
                            lines={2}
                            fontSize="1rem"
                            cardWidth={isSmallScreen ? "100%" : "24rem"}
                            gap={isSmallScreen ? "1rem" : 0}
                        />
                    </div>
                ))}
            </section>

            {/* 🟣 Pagination Controls */}
            <div className={isSmallScreen ? "flex flex-col items-center gap-4" : "flex justify-between mb-8"}>
                {posts.length > 0 && currentPage && (
                    <>
                        <Button
                            variant="text"
                            startIcon={<ArrowLeft />}
                            sx={{
                                bgcolor: darkMode ? "#090D1F" : "white",
                                color: darkMode ? "white" : "#7B8496",
                            }}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </Button>

                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={(_, value) => setCurrentPage(value)}
                            variant="outlined"
                            shape="rounded"
                            color="secondary"
                            className="mt-4"
                            sx={{
                                "& .MuiPaginationItem-root": {
                                    bgcolor: darkMode ? "#090D1F" : "white",
                                    color: darkMode ? "white" : "#7B8496",
                                    border: "none",
                                    "&.Mui-selected": {
                                        bgcolor: darkMode ? "#7F5ECF" : "#F9F5FF",
                                        color: darkMode ? "white" : "#7F5ECF",
                                        border: "none",
                                    },
                                },
                            }}
                        />

                        <Button
                            variant="text"
                            endIcon={<ArrowRight />}
                            sx={{
                                bgcolor: darkMode ? "#090D1F" : "white",
                                color: darkMode ? "white" : "#7B8496",
                            }}
                            onClick={() =>
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </>
                )}
            </div>
        </>
    );
}
