export default function FormularioCadastroCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <form>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Data de emissão CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Data de emissão RG" aria-label="Data de emissão RG" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-secondary" type="submit" style={{ backgroundColor: "#32CD32", width: "100px", marginRight: "20px", marginBottom:"30px"}}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}