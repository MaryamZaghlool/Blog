"use client";
import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useThemeContext } from '@/Context/ThemeContext';

type SharedCardProps = {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  direction?: "row" | "column";
  height: string;
  width?: string;
  gap?: number | string;
  fontSize?: string | number;
  lines?: number;
  cardWidth?: string;
};

export default function SharedCard(
  {
    image,
    author,
    date,
    title,
    description,
    tags,
    link,
    direction = "column",
    height = "18.75rem",
    width,
    gap,
    fontSize,
    lines = 3,
    cardWidth = "37.5rem",
  }: SharedCardProps) {

  const { darkMode, toggleMode } = useThemeContext();
  return (
    <Card
      sx={{
        bgcolor: darkMode ? '#090D1F' : 'white',
        color: darkMode ? 'white' : 'black',
        display: "flex",
        width: cardWidth,
        boxShadow: 'none',
        flexDirection: direction,
        gap: gap,
        cursor:"pointer"
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="cover image"
        sx={{
          height: height,
          width: width,
          mb: 3,
          objectFit: "cover",
          flexShrink: 0,
          objectPosition: "center",
        }}
      />


      <CardContent sx={{ position: "relative", p: 0, flex: 1, }}>
        <Typography
          variant="body2"
          sx={{ color: "#7F5ECF", fontWeight: 600, mb: 1 }}
        >
          {author} • {date}
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700, flexGrow: 1, fontSize: fontSize, mt: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '300px'
            }}
          >
            {title}
          </Typography>

          {link && (
            <IconButton
              size="small"
              sx={{ color: "#949BAA" }}
              aria-label="open"
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          )}
        </Box>

        <Typography variant="body2" sx={{
          color: "#94a3b8", my: 2,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: lines,
          WebkitBoxOrient: "vertical",
        }}>
          {description}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                backgroundColor: getTagBg(tag),
                color: getTagColor(tag),
                fontWeight: 600,
                px: 1.5,
                py: "2px"
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

// ✅ دول بيبقوا بره الـ component
function getTagBg(tag: string) {
  switch (tag.toLowerCase()) {
    case "design":
      return "#f3e8ff";
    case "research":
      return "#e0f2fe";
    case "presentation":
      return "#fce7f3";
    case "frontend":
      return "#ffe4e6";
    case "backend":
      return "#ddf4ff";
    default:
      return "#e2e8f0";
  }
}

function getTagColor(tag: string) {
  switch (tag.toLowerCase()) {
    case "design":
      return "#7c3aed";
    case "research":
      return "#676BDB";
    case "presentation":
      return "#db2777";
    case "frontend":
      return "#be123c";
    case "backend":
      return "#0369a1";
    default:
      return "#1e293b";
  }
}
