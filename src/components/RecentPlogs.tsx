"use client";
import SharedCard from '@/shared/SharedCard'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function RecentPlogs() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // sm = 600px
    return (
        <div style={{ color: "#1A1A1A" }}>
            <Typography
                variant="h4" sx={{
                    fontWeight: '600', fontSize: "1.3rem", my: 4
                }}>
                Recent blog posts
            </Typography>
            <div className='flex gap-6 my-5 flex-col lg:flex-row'>
                <SharedCard
                    image="./images/plog1.png"
                    author="Olivia Rhye"
                    date="1 Jan 2023"
                    title="UX review presentations"
                    description="How do you create compelling presentations that wow your colleagues and impress your managers?"
                    tags={["Design", "Research", "Presentation"]}
                    direction="column"
                    height='14rem'
                    cardWidth={isSmallScreen ? "auto" : "100%"}
                    lines={4}
                    gap={4}
                    width={isSmallScreen ? "100%" : "34.5rem"}
                />
                <div>
                    <SharedCard
                        image="./images/plog2.png"
                        author="Olivia Rhye"
                        date="1 Jan 2023"
                        title="UX review presentations"
                        description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
                        tags={["Design", "Research"]}
                        direction={isSmallScreen ? "column" : "row"}
                        height='14rem'
                        cardWidth={isSmallScreen ? "auto" : "100%"}
                        lines={4}
                        gap={4}
                        width={isSmallScreen ? "100%" : "23rem"}
                    />
                    <SharedCard
                        image="./images/plog3.png"
                        author="Olivia Rhye"
                        date="1 Jan 2023"
                        title="UX review presentations"
                        description="How do you create compelling presentations that wow your colleagues and impress your managers?"
                        tags={["Design", "Research"]}
                        direction={isSmallScreen ? "column" : "row"}
                        height='14rem'
                        cardWidth={isSmallScreen ? "auto" : "100%"}
                        lines={4}
                        gap={4}
                        width={isSmallScreen ? "100%" : "23rem"}
                    />
                </div>
            </div>
            <SharedCard
                image="./images/plog1.png"
                author="Olivia Rhye"
                date="1 Jan 2023"
                title="UX review presentations"
                description="A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
                tags={["Design", "Research", "Presentation"]}
                direction={isSmallScreen ? "column" : "row"}
                height='14rem'
                cardWidth={isSmallScreen ? "auto" : "100%"}
                lines={4}
                gap={4}
                width={isSmallScreen ? "100%" : "34.5rem"}
            />
        </div>
    )
}
