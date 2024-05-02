import { Typography } from "@mui/material";
import React from "react";
import './thankYou.css';
import { useMediaQuery } from 'react-responsive';

function ThankYou() {

    const isSmallScreen = useMediaQuery({ maxWidth: 576 });
    const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
    const isXLargeScreen = useMediaQuery({ minWidth: 993 });

    return (
        <div>
            {isSmallScreen && (<>
                <Typography variant="h1" className="thank-you-font" sx={{ margin: "6rem 0" }} align="center" fontSize={45}>
                    ThankYou!
                </Typography>
            </>)}
            {isMediumScreen && (<>
                <Typography variant="h1" className="thank-you-font" sx={{ margin: "8rem 0" }} align="center" fontSize={80}>
                    ThankYou!
                </Typography>
            </>)}
            {isLargeScreen && (<>
                <Typography variant="h1" className="thank-you-font" sx={{ margin: "10rem 0" }} align="center" fontSize={100}>
                    ThankYou!
                </Typography>
            </>)}
            {isXLargeScreen && (<>
                <Typography variant="h1" className="thank-you-font" sx={{ margin: "10rem 0" }} align="center" fontSize={120}>
                    ThankYou!
                </Typography>
            </>)
            }
        </div>




    )
}

export default ThankYou;