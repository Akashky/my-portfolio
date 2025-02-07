export const appBarStyle = {
    background: 'rgba(10, 25, 41, 0.95)',
    backdropFilter: "blur(8px)",
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
}

export const avatarStyles = {
    width: 56,
    height: 56,
    border: '2px solid #7c4dff',
    boxShadow: '0 0 20px rgba(124, 77, 255, 0.3)'
}

export const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.paper',
    borderRadius: 4,
    overflow: 'hidden',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: 6,
    }
}

export const projectsBoxStyles = {
    height: 240,
    objectFit: 'cover',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,30,60,0.8) 0%, rgba(0,30,60,0) 100%)',
    }
}

export const servicePaperStyles = {
    p: 4,
    height: '100%',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 3,
    '&:hover': {
        boxShadow: 6,
    }
}

export const chipStyles = {
    bgcolor: 'rgba(124, 77, 255, 0.1)',
    color: 'primary.main',
}