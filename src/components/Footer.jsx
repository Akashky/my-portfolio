import { Box, Container, Grid, IconButton, Typography } from "@mui/material"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

function Footer({ theme }) {
    return (
        <Box sx={{ py: 6, bgcolor: 'background.paper', borderTop: `1px solid ${theme}` }}>
            <Container>
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" color="textSecondary">
                            © {new Date().getFullYear()} Akash Kumar Yadav. All rights reserved.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
                                <IconButton
                                    href="https://github.com/Akashky"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                                >
                                    <FaGithub />
                                </IconButton>
                                <IconButton
                                    href="https://www.linkedin.com/in/yakashkumar"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                                >
                                    <FaLinkedin />
                                </IconButton>
                                <IconButton
                                    href="https://x.com/KumarAkash88831"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                                >
                                    <FaTwitter />
                                </IconButton>
                                <IconButton
                                    href="mailto:codingmind18@gmail.com"
                                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                                >
                                    <FaEnvelope />
                                </IconButton>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
Footer.propTypes = {
    theme: PropTypes.string.isRequired,
};

export default Footer