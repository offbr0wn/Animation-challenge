import React from "react";

import "./movieInfo.scss";
import Fade from "react-reveal/Fade";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ApiHook from "./apiHook";
import IconButton from "@mui/material/IconButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

export default function MovieInfo() {
  const [upcoming, latest] = ApiHook();
 




  console.log(latest);
  return (
    <div className="container">
      {/* Nav Bar  */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="navBar">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">Upcoming Films </Button>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button href="/search" color="inherit">
                Search for Movies{" "}
              </Button>
            </Typography>
            {/* <Link to="/search"/> */}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main body of DOM with upcoming and feature components */}
      
      <div className="mainDiv">
      <Fade right delay={2000} duration ={2000}>  
        <div className="featuredDiv">
          <h2>Upcoming Movies </h2>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            transitionTime={2000}
            showStatus={false}
            showThumbs={true}
            showIndicators={true}
          >
            {upcoming.map((movie) => (
              <Card
                sx={{ maxWidth: 300, maxHeight: 1000 }}
                className="background"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={getImage(movie.poster_path)}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.original_title}
                    </Typography>
                    <Typography variant="body2">
                      Rating : {movie.vote_average}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </div>

      </Fade>

        <Fade left delay={1000} duration={2000}>
          <div className="latestDiv">
            <h2>Popular Films</h2>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              transitionTime={2000}
              showStatus={false}
              showThumbs={true}
              showIndicators={true}
            >
              {latest.map((movie) => (
                <Card
                  sx={{ maxWidth: 300, maxHeight: 1000 }}
                  className="background"
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={getImage(movie.poster_path)}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.original_title}
                      </Typography>
                      <Typography variant="body2">
                        Rating : {movie.vote_average}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              ))}
            </Carousel>
          </div>
        </Fade>
      </div>
    </div>
  );
}
