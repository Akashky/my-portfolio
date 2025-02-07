import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import image from "../assets/images/AkashKumarYadav.jpg"
import { appBarStyle, avatarStyles } from "./componentStyles";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    

    return (
        <AppBar position="fixed" sx={appBarStyle}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <Avatar
                            src={image}
                            sx={avatarStyles}
                        />
                    </motion.div>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                        Akash Kumar Yadav
                    </Typography>
                </Box>

                {isMobile ? (
                    <IconButton color="inherit" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaHamburger />
                    </IconButton>
                ) : (
                    <Box sx={{ display: "flex", gap: 4 }}>
                        <Button color="inherit" onClick={() => scrollToSection("about")}>
                            <motion.div whileHover={{ scale: 1.05 }}>About</motion.div>
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection("services")}>
                            <motion.div whileHover={{ scale: 1.05 }}>Services</motion.div>
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection("projects")}>
                            <motion.div whileHover={{ scale: 1.05 }}>Projects</motion.div>
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection("contact")}>
                            <motion.div whileHover={{ scale: 1.05 }}>Contact</motion.div>
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
