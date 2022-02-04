import Musofoto from '../../Assets/Images/muso.png' 
import './style.css'
import { Link } from 'react-router-dom';

export default function Muso() {
    return(
        <div className="hob">
            <img src={Musofoto} alt= "Alexandre Muso" />
           <h1>Inspiração além bootcamp</h1>
           <p>Além de professor de programação dedicado, Sr. Lima também já serviu de inspiração até para rap. Em rap composto por anon, e interpretado pelo 🎤 artista/Web dev Rayzor Arboleya, Sr. Lima teve sua fama como meme eternizada em rima:</p>

           <p>🎶<i>"Printa, printa, printa...
               <br/>Se cair, congela a imagem e viraliza..."</i>🎶</p>
               <div >
            <Link to="/">Voltar!</Link>    
            </div>   
        </div>
    );
}