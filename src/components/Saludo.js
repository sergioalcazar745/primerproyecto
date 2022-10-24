function Saludo(props){
    var dato = "Mañana será miércoles"
    //Se obtiene en orden que se lo has pasado
    var {nombre, edad} = props;
    // prop.nombre, props.edad
    return (
    <div>
        <h1>Mi primer martes de React</h1>    
        <h2>Otro mensaje, {nombre}, edad {edad}</h2>
        <p>{dato}</p>   
    </div> 
    );
}

export default Saludo;