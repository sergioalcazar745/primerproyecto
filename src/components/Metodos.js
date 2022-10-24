function Metodos(){
    var ejemplo = "Soy una variable de ejemplo...";
    var estilo = {
        color: "white",
        backgroundColor: "red"
    }

    const mostrarMensaje = () => {
        console.log("Botón pulsado...");
        ejemplo = "Nuevo valor!!!";
        console.log(ejemplo);
    }

    const dobleNumero = (numero) =>{
        console.log(numero * 2);
    }

    return (
        <div>
            <h1 style={estilo}>Ejemplo de métodos</h1>
            <h2 style={{color:"blue"}}>{ejemplo}</h2>
            <button onClick={()=>mostrarMensaje()}>Pulsame</button>
            <button onClick={()=>dobleNumero(7)}>Doble 7</button>
            <button onClick={()=>dobleNumero(15)}>Doble 15</button>
        </div>
    )
}

export default Metodos;