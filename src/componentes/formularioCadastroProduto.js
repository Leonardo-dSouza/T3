export default function FormularioCadastroProduto(props) {
    let tema = props.tema
    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <form>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-secondary" type="submit" style={{ backgroundColor: "#32CD32", width: "100px", marginRight: "20px", marginBottom:"30px"}}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}