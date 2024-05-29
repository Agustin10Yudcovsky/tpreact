import imgbinker from '../images/binker.png'
import imgabajo from '../images/cosoabajo.PNG'
import Boton from '../components/Boton'
import Iconolink from '../components/Iconolink'
import linkedin from '../images/icons/linkedin.png'
import github from '../images/icons/github.png'
const Presentacion = (params) =>{
    return(
        <div>
            <div className="presentacionimagen" id="">
                <img className="binker" src={imgbinker} alt="imagen" />
                <div className="presentaciontexto" >
                    <h3>Hola, Bienvenidos!</h3>
                    <h1>Soy Agustín Yudcovsky</h1>
                    <p>Estudiante de la escuela ORT en la orientacion de Informatica</p>
                    <p>Curso 5IA</p>
                    <div>
                        <Iconolink icono = {linkedin}/>
                        <Iconolink icono = {github}/>
                    </div>
                    <Boton class="btn btn-warning" texto="Contactame!"/>
                </div>
            </div>
            <br/>
            <img className="abajo" src={imgabajo} alt="imagen" />
        </div>
        
    )
}
 
export default Presentacion; 
