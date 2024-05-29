const Link = (params) =>{
    return <a className={params.class} href={params.link}>{params.texto}</a>
}

export default Link;