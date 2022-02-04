import { Link } from "react-router-dom";
import fotodeperfil from '../../Assets/Images/image (1).png'
import './style.css'

import Photo from "../../Assets/Images/image (10).png"
import { Resume } from "../Resume/index";
import { Hobbies } from "../Hobbies/index";


export default function Home(){
    return(
    <div className="home">
        <section>
            <img scr={Photo} alt=""/>
        </section>
        <section> 
                <h1>Alexandre Lima</h1>
                <img src ={fotodeperfil} alt = "Foto do ale"/>
            <article className="article"> 
                <h2>Resume</h2>
                <p>Professor de Full stack developer na Ironhack!</p>
                <Link to="/resume">Saiba mais!</Link>
            </article>
   
            <article className="article"> 
                <h2>Do que Ale gosta?</h2>
                <p>Basket ⛹🏽‍♂️</p>
                <p>NFL 🏈</p>
                <p>Tyrion Lannister Lima 🐶</p>
                <p>Final Fantasy 🎮</p>               
                <Link to="/hobbies">Saiba mais!</Link>    
            </article>
            <article className="article">
                <h2>Time do ♥</h2>
                <p>Internacional</p>            
                <Link to ="/time">Saiba mais!</Link>
            </article>

            <article className="article">
                <h2>Muso</h2>           
                <Link to="/muso">Saiba mais!</Link>  
            </article>
</section>
</div>)}
