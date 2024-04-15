import React, { useContext } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavbarSignedIn } from "../component/navbarSignedIn.jsx";
import { Calendar } from "../component/calendar.jsx";
import { GameCard} from "../component/cards/gameCard.jsx"
import "../../styles/main.css";

export const Main = () => {
   const { store } = useContext(Context); // Get the store from the context
   const { currentMonthReleases } = store; // Destructure getGamesList from the store
   
   console.log(currentMonthReleases);
   return(
     <div>
       <h2>List of Games of this month</h2>
       <div className="game-list row">
         {currentMonthReleases.map(game => (
           <GameCard key={game.id} game={game} className="col-3"/>
         ))}
       </div>
     </div>
   );
};