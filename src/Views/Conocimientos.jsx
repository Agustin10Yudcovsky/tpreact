import sql from '../images/icons/sql.png'
import c from '../images/icons/c.png'
import Iconolink from '../components/Iconolink'
import web from '../images/icons/web.png'


const Conocimientos = (props) =>{
    return(
        <div className='conocimientos' id="Conocimientos">
            <br />
            <h2>Conocimientos</h2>
            <br />
            <div className='iconosconocimiento'>
                <ul>
                    <li><Iconolink icono = {c}/>
                    <p>C#</p>
                    </li>
                    <li><Iconolink icono = {sql}/>
                    <p>SQL</p>
                    </li>
                    <li><Iconolink icono = {web}/>
                    <p>Desarrollo web</p>
                    </li>
                </ul>
            </div>
            
        </div>
    )
    
}

export default Conocimientos;