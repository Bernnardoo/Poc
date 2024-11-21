export default function Film({ data }) {
    return (
      <div className="filminfo">
        <h2 className="subtitle">Sinopse do filme</h2>
        <p
          style={{
            fontSize: "16px",
            textAlign: "justify",
            padding: "20px",
            marginRight: "100px",
            marginLeft: "100px",
          }}
        >
          {data.sinopse}
        </p>
  
        <h3 className="subtitle">Data de Lançamento</h3>
        <p
          style={{
            fontSize: "16px",
            textAlign: "justify",
            padding: "20px",
            marginRight: "100px",
            marginLeft: "100px",
          }}
        >
          {data.dataLancamento}
        </p>

        <h4 className="subtitle">Diretor</h4>
        <p
          style={{
            fontSize: "16px",
            textAlign: "justify",
            padding: "20px",
            marginRight: "100px",
            marginLeft: "100px",
          }}
          >
            {data.direcao}
          </p>
      </div>
    );
  }