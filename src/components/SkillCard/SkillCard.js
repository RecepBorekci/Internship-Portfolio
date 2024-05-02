import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useMediaQuery } from 'react-responsive';

function SkillCard(props) {

  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isXLargeScreen = useMediaQuery({ minWidth: 993 });

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0'
    }} >
      {isSmallScreen && (<>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "#088395",
          height: '180px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px'
        }}>
          <Box sx={{ width: "110px", height: "110px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + "/" + props.image}
              alt="Skill image"
              sx={{
                width: "100%",
                width: "75px",
                margin: "2rem 2rem 0 2rem",
              }}
            />
          </Box>

          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFFFFF" }} align="center" fontSize={16}>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </>)}
      {isMediumScreen && (<>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "#088395",
          height: '200px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px'
        }}>
          <Box sx={{ width: "150px", height: "150px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + "/" + props.image}
              alt="Skill image"
              sx={{
                width: "100%",
                width: "100px",
                margin: "1.5rem 1.5rem 0 1.5rem",
              }}
            />
          </Box>

          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFFFFF" }} align="center" fontSize={18}>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </>)}
      {isLargeScreen && (<>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "#088395",
          height: '220px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '25px'
        }}>
          <Box sx={{ width: "170px", height: "170px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + "/" + props.image}
              alt="Skill image"
              sx={{
                width: "100%",
                width: "125px",
                margin: "1.5rem 1.5rem 0 1.5rem",
              }}
            />
          </Box>

          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFFFFF" }} align="center" fontSize={20}>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </>)}
      {isXLargeScreen && (<>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "#088395",
          height: '270px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px'
        }}>
          <Box sx={{ width: "200px", height: "200px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + "/" + props.image}
              alt="Skill image"
              sx={{
                width: "100%",
                width: "150px",
                margin: "2rem 2rem 0 2rem",
              }}
            />
          </Box>

          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFFFFF" }} align="center" fontSize={22}>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </>)}

    </Box>
  );
}

export default SkillCard;
