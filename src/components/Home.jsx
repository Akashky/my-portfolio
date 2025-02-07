import { Box, Container, Typography, Button, Grid, CssBaseline, useTheme, styled, Avatar, ThemeProvider, createTheme } from "@mui/material";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import image from "../assets/images/AkashKumarYadav.jpg";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Project from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7c4dff',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#0a1929',
            paper: '#001e3c',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#b3b3b3',
        },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
    },
});

const StyledHero = styled(Box)(() => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #001e3c 30%, #0a1929 90%)",
    position: "relative",
    overflow: "hidden",
    paddingTop: '80px',
}));

const FloatingImage = styled(motion.div)({
    position: 'absolute',
    right: '10%',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    border: '4px solid #7c4dff',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(124, 77, 255, 0.4)',
});

const Home = () => {
    const theme = useTheme();

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/AkashKrYadav.pdf";
        link.download = "Akash_Kumar_Yadav_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleContactMe = () => {
        window.open("mailto:codingmind18@gmail.com", "_blank");
    };


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />

            <StyledHero id="home">
                <Container>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: theme.palette.primary }}>
                                    Hi, I&apos;m Akash 👋
                                </Typography>
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        2000,
                                        'AI Enthusiast',
                                        2000,
                                        'Tech Blogger',
                                        2000,
                                        'Open Source Contributor',
                                        2000,
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '2rem', color: theme.palette.text.main }}
                                />
                                <Typography variant="body1" sx={{ mt: 3, lineHeight: 1.7 }}>
                                    Passionate developer specializing in building robust web applications with modern technologies.
                                    Currently focused on AI integration and scalable cloud solutions.
                                </Typography>
                                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        startIcon={<FaDownload />}
                                        component={motion.div}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={handleDownloadResume}
                                    >
                                        Download CV
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        startIcon={<FaEnvelope />}
                                        component={motion.div}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={handleContactMe}
                                    >
                                        Contact Me
                                    </Button>
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FloatingImage
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Avatar
                                    variant="square"
                                    src={image}
                                    sx={{
                                        width: 400,
                                        height: 400,
                                        objectFit: 'cover',
                                    }}
                                />
                            </FloatingImage>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
            <About id="about" />
            <Services id="services" />
            <Project id="projects" />
            <Contact id="contact" />
            <Footer theme={theme.palette.divider} />

        </ThemeProvider>
    );
};

export default Home;