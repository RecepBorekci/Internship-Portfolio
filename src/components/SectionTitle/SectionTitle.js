import React from "react";
import { Box, Typography } from "@mui/material";
import './sectionTitle.css';

import { useMediaQuery } from 'react-responsive';

function SectionTitle(props) {

    const isSmallScreen = useMediaQuery({ maxWidth: 576 });
    const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
    const isXLargeScreen = useMediaQuery({ minWidth: 993 });

    return (
        <div>
            {isSmallScreen && (<>
                <Box sx={{ padding: "0.5rem 0" }}>
                    <Typography variant="h3" className="title" fontSize="1.8rem ">
                        {props.name}
                    </Typography>
                </Box>

            </>)}
            {isMediumScreen && (<>
                <Box sx={{ padding: "1rem 0" }}>
                    <Typography variant="h3" className="title" fontSize="3rem ">
                        {props.name}
                    </Typography>
                </Box>

            </>)}
            {isLargeScreen && (<>
                <Box sx={{ padding: "1.5rem 0" }}>
                    <Typography variant="h3" className="title" fontSize="3.5rem ">
                        {props.name}
                    </Typography>
                </Box>

            </>)}
            {isXLargeScreen && (<>
                <Box sx={{ padding: "2rem 0" }}>
                    <Typography variant="h3" className="title" fontSize="4.5rem ">
                        {props.name}
                    </Typography>
                </Box>

            </>)}
        </div>

    );
}

export default SectionTitle;