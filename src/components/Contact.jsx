import { useState } from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then(() => {
                setSuccessMessage("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
            })
            .catch(() => {
                setSuccessMessage("Failed to send message. Try again!");
            })
            .finally(() => {
                setLoading(false);
                setSuccessMessage("");
                setErrors({});
            });
    };

    return (
        <Box id="contact" sx={{ py: 10, bgcolor: "background.default" }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 2 }}>
                        Let&apos;s Connect
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", mb: 6 }}>
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </Typography>

                    <Grid container spacing={12}>
                        {/* Contact Form */}
                        <Grid item xs={12} md={12}>
                            <Paper sx={{ p: 4, borderRadius: 4, bgcolor: "background.paper" }}>
                                <motion.form
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    onSubmit={handleSubmit}
                                >
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                variant="outlined"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                error={!!errors.name}
                                                helperText={errors.name}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Email"
                                                variant="outlined"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                error={!!errors.email}
                                                helperText={errors.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                variant="outlined"
                                                multiline
                                                rows={6}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                error={!!errors.message}
                                                helperText={errors.message}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                fullWidth
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? "Sending..." : "Send Message"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </motion.form>

                                {/* Success Message */}
                                {successMessage && (
                                    <Typography
                                        sx={{ textAlign: "center", mt: 3, color: "green", fontWeight: "bold" }}
                                    >
                                        {successMessage}
                                    </Typography>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Contact;
