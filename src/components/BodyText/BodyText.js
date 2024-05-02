import React from 'react';
import { Box, Typography } from '@mui/material';

function BodyText(props) {
    return (
        <Box sx={{ color: "#BEBCBC" }}>
            <Typography variant="body" fontSize={props.fontSize}>
                {props.text}
            </Typography>
        </Box>
    )
}

export default BodyText;