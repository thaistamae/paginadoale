import foto from '../../Assets/Images/imagemdojoe.jpg' 
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Resume() {
    return(
        <div className={styles.principal}>
            <img src={foto} alt= "Alexandre Resume Headshot" />
           <h1>Alexandre Lima</h1>
           <p>Young full stack developer focused on quality software development that transforms user experience into something simple, fluid, intuitive and dinamic.</p>


           <h2>Skills</h2>
           <ul>
                <li>React.js</li>
                <li>React Native</li>
                <li>Node.js</li>
            </ul>
            
            <div >
            <Link to="/">Voltar!</Link>    
            </div>   
    
        </div>
    )
}