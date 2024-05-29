import ja from '../images/ja.png'

const Informacion = (params) =>{
return(
    <div className="informacion" id="Educacion"> 
        <div>
            <h1>Hola! Soy Agustín Yudcovsky</h1>
            <p> Soy estudiante de la Escuela ORT desde 2019, cuando entré en séptimo grado. Elegí la especializacion de informática, 
            ya que simpre me interesé por todo lo relacionado con la tecnología.</p>
            <br />
            <h5>Edad: 17 años</h5>
            <br />
            <h5>Email: agustinyuco9@gmail.com</h5>
            <br />
            <p>Mis conocimientos en educación me ayudan a expresar mis ideas e intenciones de forma clara.
               En cuanto al trabajo en equipo, siempre trato de hacer todo lo posible para ayudar y busco lo mejor para el proyecto. </p>
        </div>

        <div>
            <img src={ja} alt="foto Agustin Yudcovsky" />
            <i class="fi fi-brands-linkedin"></i>
        </div>
    </div>
)
}

export default Informacion;