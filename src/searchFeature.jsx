import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import {Button, Box,AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import image from "./assets/Webp.net-resizeimage.png";
import "./movieInfo.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { api_key, BASE_URL } from "./apiHook";



function SearchFeature() {
  // Variables for storing api data and filtering user requested search
  
  const [searchInfo, setSearchInfo] = useState([]);
  const [query, setQuery] = useState("");
  const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

  const url = `${BASE_URL}/search/movie?api_key=${api_key}&language=en-US&query=${query}&include_adult=false`;

  // Search Function , by fetching API Data

  const search = async (evt) => {
    if (evt.key === "Enter") {
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setSearchInfo(result.results);
          // console.log(result.results);
        });
    }
  };


  return (
  <Fade left delay={800} duration ={2000}>   
    <div className="container">
      {/* Nav Bar */}

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
              <Button href="/" color="inherit">
                Upcoming Films{" "}
              </Button>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button href="/search" color="inherit">
                Search for Movies{" "}
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Search Bar for filtering films */}
      <TextField
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        id="filled-basic"
        label="Enter A Movie Name "
        variant="filled"
        className="search_bar"
      />

      {/* Displays searched Movies */}

      <div className="mainDiv">
        <ImageList rowHeight="auto" variant="quilted">
          <ImageListItem key="Subheader" cols={5}>
            <ListSubheader className="searchImage" component="div">
              Results For : <span>{query}</span>
            </ListSubheader>
          </ImageListItem>
         
          {searchInfo.map((movie) => (
             <Fade down delay={800} duration ={2000}>  
          
            <ImageListItem key={movie.img} className="hoverImage">
              <img
                src={
                  getImage(movie.poster_path) === getImage(null)
                    ? image
                    : 
                    getImage(movie.poster_path)
                }
                alt={movie.title}
                loading="lazy"
                
              />

              <ImageListItemBar
                title={movie.original_title}
                subtitle={`Rating : ${movie.vote_average}`}
                // actionIcon={
                //   <IconButton
                //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                //     aria-label={`info about ${movie.original_title}`}
                //     onClick={() => {console.log("lolol")}
                
                  
                  
                //   }
                //   >
                //     <InfoIcon />
                //   </IconButton>
                // }
              />
            </ImageListItem>
             </Fade>
          ))}
         
        </ImageList>
      </div>
    </div>
    </Fade>

  );
}

export default SearchFeature;
