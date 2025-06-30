'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button } from '@mui/material';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 4,
            }}
        >
            <Typography variant="h3" color="error" gutterBottom>
                Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                {error.message || 'An unexpected error has occurred.'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                variant="contained"
                color="error"
                onClick={() => reset()}
                sx={{ mr: 2 }}
            >
                Try Again
            </Button>
            <Button variant="outlined" onClick={() => router.push('/')}>
                Go Home
            </Button>
            </Box>
        </Box>
    );
}
