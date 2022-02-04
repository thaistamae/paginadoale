import imagem from '../../Assets/Images/inter.jpg'
import {useState} from 'react'
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'

export default function Time(){

    const [numberLikes, setNumberLikes] = useState(0);

    const [colors, setColors] = useState (`red`)
    
    function handleColors(){
    const colors = ['purple','blue','green','yellow','orange','red'];

    setColors(colors[Math.floor(Math.random()*colors.length)])
  }

    function handleLikes(){
        setNumberLikes(numberLikes + 1)
    }

    return (
        <div className={styles.Time}>
            <div>
            <img src={imagem} alt="O maior time do mundo"></img>
            <div> Deus abençoe que o Alê torce pro maior time do mundo! <h1>VAMO INTER!</h1></div>
            <button className={styles.likeButton} onClick={() => {handleLikes(); handleColors()}} style={{backgroundColor: `${colors}`}}> {numberLikes} likes</button>
            <Link to="/">Voltar!</Link>    
            </div>
            <div >
            </div>   
        </div>
    )
}