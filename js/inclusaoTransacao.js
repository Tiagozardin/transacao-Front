function incluirTransacao() {
    // Aqui a gente busca dos dados tela e coloca em variáveis
    const titulo = document.getElementById("title").value;
    const valor =  parseInt(document.getElementById("value").value);
    const tipo = document.getElementById("type").value;

    if (!titulo) {
        alert("titulo de ser informado");
        return;
    }

    if (titulo.trim().length < 3) {
        alert('O titulo deve conter ao menos 3 caracteres');
        return;
    }

    if (!valor) {
        alert("valor deve ser informado");
        return;
      }
    

      if (!tipo) {
        alert("tipo deve ser informado");
        return;
      }

    const userId = localStorage.getItem("id");
    axios.post(`https://growdev-aula26.herokuapp.com/user/${userId}/transactions`, {
        title: titulo,
        value: valor,
        type: tipo,
    }).then((resposta) => {
        if (resposta.data) {
            alert("Registro incluído");
            location.href = "detalhe.html";
        } else {
            alert(resposta.data.message);
        }
    }).catch((erro) => {
        alert(erro.response.data.msg);
    });
}