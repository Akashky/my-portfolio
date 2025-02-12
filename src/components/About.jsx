import { Box, Container, Grid, Typography } from '@mui/material'
import { motion } from "framer-motion";

function About() {
    const skills = [
        { name: "React", level: 100 },
        { name: "JavaScript", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Express.js", level: 75 }
    ];
    return (
        <Box id="about" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
                        About Me
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                Who Am I?
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                I&apos;m a Full Stack Developer with 4+ years of experience in building enterprise-level applications.
                                Specialized in MERN stack development with a focus on performance optimization and clean architecture.
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                When I&apos;m not coding, I contribute to open-source projects and write technical articles about modern
                                web development practices and AI integration.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                Technical Skills
                            </Typography>
                            {skills.map((skill) => (
                                <Box key={skill.name} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="body1">{skill.name}</Typography>
                                        <Typography variant="body1">{skill.level}%</Typography>
                                    </Box>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Box
                                            sx={{
                                                height: 8,
                                                bgcolor: 'primary.main',
                                                borderRadius: 4,
                                            }}
                                        />
                                    </motion.div>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default About