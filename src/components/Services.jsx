import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material'
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';
import { chipStyles, servicePaperStyles } from './componentStyles';

function Services() {
    const services = [
        {
            icon: <FaCode size={40} />,
            title: "Web Development",
            description: "Building responsive, high-performance web applications with modern architectures",
            tech: ['React', 'Next.js', 'Redux', "Express", "MongoDB"]
        },
        {
            icon: <FaBrain size={40} />,
            title: "AI Integration",
            description: "Implementing machine learning models and AI-powered features",
            tech: ['TensorFlow', 'OpenAI', 'NLP', 'Computer Vision']
        },
        {
            icon: <FaLaptopCode size={40} />,
            title: "Frontend Architecture",
            description: "Crafting beautiful and intuitive user interfaces with latest frameworks.",
            tech: ['Storybook', 'Micro Frontends', 'Web Components', 'Jest']
        },
        {
            icon: <FaServer size={40} />,
            title: "Cloud Solutions",
            description: "Developing and launching cloud-based applications with modern technologies.",
            tech: ['AWS', 'Docker', 'Kubernetes', 'Serverless']
        }
    ];
    return (
        <Box id="services" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
                        What I Offer
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center', mb: 6 }}>
                        Cutting-edge solutions for modern digital challenges
                    </Typography>

                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Paper sx={servicePaperStyles}>
                                        <motion.div
                                            transition={{ duration: 2, repeat: Infinity }}
                                            style={{ display: 'inline-block' }}
                                        >
                                            <Box sx={{ color: 'primary.main', fontSize: 40, mb: 2 }}>
                                                {service.icon}
                                            </Box>
                                        </motion.div>
                                        <Typography variant="h6" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {service.description}
                                        </Typography>
                                        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {service.tech?.map((tech, i) => (
                                                <Chip key={i} label={tech} size="small" sx={chipStyles} />
                                            ))}
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Services