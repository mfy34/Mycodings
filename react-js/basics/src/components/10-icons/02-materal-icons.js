import React from 'react';
import { Container } from 'react-bootstrap';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { EmojiNature } from '@mui/icons-material';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

const MaterialIcons = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <h2>Material Icons</h2>
                <FlutterDashIcon fontSize='large' color='secondary' />
                <EmojiNature fontSize='large' color='benimRengim' />
            </Container>
        </ThemeProvider>
    )
};
export default MaterialIcons;