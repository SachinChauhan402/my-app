// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ColorGame } from './ColorGame';
import { MovieList } from './MovieList';
import { useState } from 'react';
import { AddMovie } from './AddMovie';
import { Routes, Route, Link, Navigate } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
   function SearchAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
      </Box>
    );
  }


function App() {
  const [moviesList, setmovieList] = useState([
    {
        name: "Ratatouille",
        poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
    {
        name: "The Avengers",
        rating: 8,
        summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
        
    },
    {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
     
    },
    {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 8.6,
        summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
        
    },
    {
        name: "Iron man 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 77,
        summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
       
    },
    {
        name: "Jai Bhim",
        poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        rating: 8.8,
        
    },
    {
        name: "Vikram",
        poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
        rating: 8.4,
        summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
      
    },
    {
        name: "Iron man 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
        
    },
    {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",

    },
    {
        name: "The Avengers",
        rating: 8,
        summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
 
    },
    {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 8.6,
        summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
       
    },
    {
        name: "Ratatouille",
        poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    
    },
    
]);

const [search , setSearch] = useState("");

  return (

    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Movie App
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase value={search}
              onChange={(event) => setSearch(event.target.value)}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>

    <ul>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/color-game">Color-Game</Link></li>
        <li><Link to="/movies/add">Add Movies</Link></li>
    </ul>



    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={
        <MovieList movies=
        {moviesList.filter(mv => mv.name.toLowerCase().includes(search.toLowerCase()))} />} />
        <Route path="/redirect" element={<Navigate replace to ="/color-game"/>} />
        
        <Route path="/color-game" element={<ColorGame />} />
        <Route path="/movies/add" element={ <AddMovie setmovieList= 
        { setmovieList } moviesList= {moviesList} /> } />
        <Route path="/404" element={<NotFound /> }/>
        <Route path="*" element={<Navigate raplace to = "/404"/>} />
    </Routes>
    
    </div>
  );
}

function NotFound(){
    const styles = {
        height: "400px",
        width:"400px",
        objectFit: "contain",
        paddingLeft:"300px"
    }
    return(
        <img style={ styles } src="https://img.freepik.com/premium-vector/404-page-found-giraffe-hid-its-head-tree-web-surfing-web-page-search-error_652761-150.jpg?w=740" alt="404 page"/>
        
    )
}

function Home() {
    return(
        <div>
            <h1>Welcome to the Home page 😍😂😒😣</h1>
        </div>
    )
}

function About() {
    return(
        <div>
            <h1>hello, Welcome to the About page 🐒🦍⭐</h1>
        </div>
    )
}


export default App;
