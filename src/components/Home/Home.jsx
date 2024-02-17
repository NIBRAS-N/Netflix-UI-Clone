import React from "react";
import "./Home.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"



const apiKey = process.env.REACT_APP_ENV_API_KEY

const url = "https://api.themoviedb.org/3/movie"
const url2 = "https://api.themoviedb.org/3/genre/movie/list"
const imgurl = "https://image.tmdb.org/t/p/w500"
const upcoming = "upcoming"
const popular = "popular"
const nowPlaying = "now_playing"
const topRated= "top_rated"

const Cart = ({img}) =>{
  return(
    <>
    
      <img className="card"src={img} alt="" />
    
      
    </>
  );
}
const Row = ({title , ar=[]}) =>{
  return(
    <>  
      <div className="row">
        <h1>{title}</h1>
        

        <div>
          {
            ar.map((value,index)=>(
              <Cart key={index} img={`${imgurl}/${value.poster_path}`}/>
            ))
          }  
          
          
        </div>
      </div>
    </>
  );
}


function Home() {


  // console.log(process.env.api_key," lol ",apiKey)

  const [upcomingMovies , setupcomingMovies] = useState([]);
  const [movies , setMovies] = useState([]);
  const [nowPlayingmov , setnowPlayingmov] = useState([]);
  const [topRatedmov , settopRatedmov] = useState([]);
  const [genremov , setgenremov] = useState([]);
  
  useEffect(() => {
      const fetchUpcoming = async ()=>{
        const {data:{results}} = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
        // console.log(results[0].original_title)
        setupcomingMovies(results);
        
        
      }
      fetchUpcoming();
      const fetchMovies = async () =>{
        const {data:{results}} = await axios.get(`${url}/${popular}?api_key=${apiKey}`);
        setMovies(results);

      }
      fetchMovies()

      

      const fetchnowPlaying = async () =>{
        const {data:{results}} = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`);
        setnowPlayingmov(results);

      }
      fetchnowPlaying();

      const fetchtoprated = async () =>{
        const {data:{results}} = await axios.get(`${url}/${topRated}?api_key=${apiKey}`);
        settopRatedmov(results);
        // console.log(results)
        // console.log(topRatedmov)
      }
      fetchtoprated();
      
      const fetchgenred = async () =>{
        const {data:{genres}} = await axios.get(`${url2}?api_key=${apiKey}`);
        setgenremov(genres);
        // console.log(genres);
        // console.log(genremov.length);
      }
      fetchgenred();

  }, []);

  
  
  return (
    <>
        <section className="home">
            
            <div className="banner" style={
              {backgroundImage : upcomingMovies[10]? `url(${imgurl}/${upcomingMovies[10].poster_path})`:"rgb(12, 12, 12);" }
            }>
              {upcomingMovies[10] && <h1>{upcomingMovies[10].original_title}</h1>}
                {upcomingMovies[10] && <p>{upcomingMovies[10].overview}</p>}


                <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
            </div>
            
            <Row title={"Upcoming Movies"} ar={upcomingMovies}/>
            <Row title={"Popular"} ar={movies}/>
            <Row title={"Now Playing"} ar={nowPlayingmov}/>
            <Row title={"Top Rated"} ar={topRatedmov}/>


          <div className="allgenres">
            {
              genremov.map((item,index)=>(
                // console.log(item.id , "lol" , item.name)
                <div className="genre2"><Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link></div>
              ))
            }
          </div>
           
        </section>

    </>
  );
};

export default Home;
