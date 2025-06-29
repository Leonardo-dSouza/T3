export default function FormularioConsumoServico(props) {
    let tema = props.tema
    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <form>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome do serviço" aria-label="Nome do serviço" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-secondary" type="submit" style={{ backgroundColor: "#32CD32", width: "100px", marginRight: "20px", marginBottom:"30px"}}>
                    Consumir
                </button>
            </form>
        </div>
    )
}