function Titulo() {
    const nombre = "Library - APP";
    if (nombre){
        return <h1>Dinamic {nombre}</h1>;
    }
    return <h1>Library APP</h1>;
}
export default Titulo;