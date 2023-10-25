import React, { useState } from 'react';
import Fside from './Fside';
import Fhead from './Fhead';
const VideoGallery = () => {
  const [videos] = useState([

    {
      id: 2,
      title: 'Football',
      url: 'https://player.vimeo.com/external/576604452.sd.mp4?s=c2d550e2935a08260aed3ec592a5961b28b20034&profile_id=164&oauth2_token_id=57447761',
      description:'Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team’s goal without using their hands or arms. The team that scores more goals wins. Football is the world’s most popular ball game in numbers of participants and spectators.',
    },
    {
      id: 3,
      title: 'Basketball',
      url: 'https://player.vimeo.com/external/510625981.sd.mp4?s=950365a21fa0c2c9514734daf5c6c498fdc34a99&profile_id=164&oauth2_token_id=57447761',
      description:'Basketball, game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent’s goal, an elevated horizontal hoop and net called a basket.',
    },
    {
      id:4,
      title:'Tennis',
      url:'https://player.vimeo.com/external/559418981.sd.mp4?s=04af5ff63f5eaea1c824cfc892aa2ac33147b88f&profile_id=164&oauth2_token_id=57447761',
      description:'Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponents court. The object of the game is to manoeuvre the ball in such a way that the opponent is not able to play a valid return',
    }
    ,
    {
      id:5,
      title:'Baseball',
      url:'https://player.vimeo.com/external/451079238.sd.mp4?s=2b18762a105d980b4b8aab62278f097699bf8aa7&profile_id=164&oauth2_token_id=57447761',
      description:'Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher, throws a ball that a player on the batting team, called the batter, tries to hit with a bat. ',
    },
    {
      id:6,
      title:'Volleyball',
      url:'https://player.vimeo.com/external/492116322.sd.mp4?s=9bb79f8d33a6529279bd93004e7bd9743e1ee6bd&profile_id=164&oauth2_token_id=57447761',
      description:'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other teams court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the programme at the Atlanta 1996 Summer Olympics. The adapted version of volleyball at the Summer Paralympic Games is sitting volleyball.',
    },
    {
      id:7,
      title:'Hockey',
      url:'https://player.vimeo.com/external/580662597.sd.mp4?s=24e0f6e8f675d840ba0c6400d7b1890d3bbae59f&profile_id=164&oauth2_token_id=57447761',
      description:'Hockey is a term used to denote a family of various types of both summer and winter team sports which originated on either an outdoor field, sheet of ice, or dry floor such as in a gymnasium. While these sports vary in specific rules, numbers of players, apparel, and playing surface, they share broad characteristics of two opposing teams using a stick to propel a ball or disk into a goal.',
    }
    ,
    {
      id:8,
      title:'cricket',
      url:'https://player.vimeo.com/progressive_redirect/playback/856014007/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=20b76c33d72cb855c79204f049cb3fdf751313905710e746e92bc39743458744',
      description:'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter .',
    }
    // Add more video objects as needed
  ]);


    return (

      <div className="app2">
        <Fside />
        <div className="app-main">
          
          <Fhead />
          <div className="video-gallery-container">
          <h1 style={{ fontSize: '50px', fontFamily: "Footlight MT Light"}}>GALLERY</h1>
          <div className="video-gallery">
            {videos.map((video, index) => (
              <div key={video.id} className={`video ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="video-player">
                  <video controls autoPlay width="400" height="300">
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="video-description">
                  <h3 style={{fontSize: '30px',fontFamily: "Footlight MT Light"}}>{video.title}</h3><br></br>
                  <p >{video.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoGallery;
  