"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "@/Context/ThemeContext";

export default function Navbar() {
    const { darkMode, toggleMode } = useThemeContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = ["Blog", "Projects", "About", "Newsletter"];

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        bgcolor: "var(--bg-color)",
                        color: "var(--text-color)",
                        boxShadow: "none",
                        transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                >
                    <Toolbar className="justify-between">
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Maryam Zaghlool
                        </Typography>

                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <IconButton onClick={toggleMode} size="small">
                                {darkMode ? (
                                    <LightModeIcon sx={{ color: "var(--text-color)" }} />
                                ) : (
                                    <DarkModeIcon sx={{ color: "var(--text-color)" }} />
                                )}
                            </IconButton>
                        </Box>

                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton onClick={() => setMenuOpen(true)} color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {menuOpen && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        bgcolor: "var(--bg-color)",
                        color: "var(--text-color)",
                        zIndex: 1200,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        Maryam Zaghlool
                    </Typography>

                    {menuItems.map((item) => (
                        <Typography key={item} variant="body1">
                            {item}
                        </Typography>
                    ))}

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            bgcolor: darkMode ? "white" : "#090D1F",
                            borderRadius: "999px",
                            px: 2,
                            py: 1,
                        }}
                    >
                        <IconButton onClick={toggleMode} size="small">
                            {darkMode ? (
                                <LightModeIcon sx={{ color: "#090D1F" }} />
                            ) : (
                                <DarkModeIcon sx={{ color: "white" }} />
                            )}
                        </IconButton>
                    </Box>

                    <IconButton
                        onClick={() => setMenuOpen(false)}
                        sx={{ position: "absolute", bottom: 32 }}
                    >
                        <CloseIcon sx={{ color: "var(--text-color)" }} />
                    </IconButton>
                </Box>
            )}
        </>
    );
}
