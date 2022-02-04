import Foto from '../../Components/Foto'
import fotinha from '../../Assets/Images/image (3).png'
import { Link } from "react-router-dom";
import styles from './styles.module.css'

export default function Hobbies() {
    return(
        <div className={styles.organizar}>
            <p>Basket ⛹🏽‍♂️</p>
            <Foto className={styles.foto} picture="https://primeirobasquete.com.br/wp-content/uploads/2021/08/embiid-renova-sixers-800x500.jpg" alt="JOEL EMBIID"/>
            <p>NFL 🏈</p>
            <Foto className={styles.foto} picture="https://imagens.ebc.com.br/HxTNacwETzg4Piy9dm-P03x7SwE=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/tom_brady_nfl_aposentadoria.jpg?itok=kDLqjaNe" alt="TOMAS BREID"/>
            <p>Final Fantasy 🎮</p>
            <Foto className={styles.foto} picture="https://uploads.jovemnerd.com.br/wp-content/uploads/2016/12/v-ffxv-1210x540.jpg" alt="FINAL FANTASY"/>
            <p>Tyrion Lannister Lima 🐶</p>
            <img className={styles.foto} src={fotinha} alt="foto do dog"/>       
            <p className={styles.divzona}>
            <Link className={styles.botaozinho} to="/">Voltar!</Link>    
            </p>   
                        
        </div>
    )
}