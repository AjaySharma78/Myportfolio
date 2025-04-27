const config = {
    email: String(import.meta.env.VITE_EMAIL),
    whatsapp: String(import.meta.env.VITE_WHATSAPP),
    github: String(import.meta.env.VITE_GITHUB),
    n8nLink: String(import.meta.env.VITE_N8N)
};

export default config;