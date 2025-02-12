import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { Box, Button, Card, CardActions, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { cardStyles, chipStyles, projectsBoxStyles } from "./componentStyles";

function Project() {
    const projects = [
        {
            title: "YouTube Analyzer",
            description: "Real-time youtube playlist analysis platform with sentiment analysis",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            tech: ['Next.js', 'TypeSript', 'ShadCNUI', 'Crawlee'],
            github: "https://github.com/Akashky/youtube-analyzer",
            demo: "#"
        },
        {
            title: "E-Commerce Platform",
            description: "Full-featured online marketplace with payment integration",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            tech: ['Next.js', 'Stripe', 'Redis', 'GraphQL'],
            github: "#",
            demo: "#"
        },
        {
            title: "Custom Compiler",
            description: "Built a custom compiler to translate high-level code into optimized machine code.",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tech: ['JavaScript', 'Judge0', 'Material UI'],
            github: "https://github.com/Akashky/code-editor",
            demo: "https://multi-lingual-compiler.netlify.app/"
        }
    ];

    return (
        <Box id="projects" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
                        Featured Projects
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center', mb: 6 }}>
                        A selection of my recent work
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card sx={cardStyles}>
                                        <Box
                                            component="img"
                                            src={project.image}
                                            alt={project.title}
                                            sx={projectsBoxStyles}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom>
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" paragraph>
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                                {project.tech?.map((tech, i) => (
                                                    <Chip key={i} label={tech} size="small" sx={chipStyles} />
                                                ))}
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ mt: 'auto', p: 2 }}>
                                            <Button
                                                size="small"
                                                href={project.demo}
                                                endIcon={<motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>
                                                    ↗
                                                </motion.div>}
                                                sx={{ color: 'primary.main' }}
                                            >
                                                Live Demo
                                            </Button>
                                            <Button
                                                size="small"
                                                href={project.github}
                                                startIcon={<FaGithub />}
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                Source Code
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Project