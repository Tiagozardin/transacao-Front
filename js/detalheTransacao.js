window.addEventListener('load', () => {
    const id = localStorage.getItem("id");
    const idTransacao = localStorage.getItem("idTransacao");

    axios.get(`https://growdev-aula26.herokuapp.com/user/${id}/transactions/${idTransacao}`)
        .then((resposta) => {
            const { title, value, type} = resposta.data;

            document.getElementById("title").value = title;
            document.getElementById("value").value = value;
            document.getElementById("type").value = type;
        }
        );
});

function atualizarTransacao() {
    const id = localStorage.getItem("idTransacao");
    const titulo = document.getElementById("titulo").value;
    const valor = document.getElementById("valor").value;
    const tipo = document.getElementById("tipo").value;

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

    axios.put(`https://growdev-aula26.herokuapp.com/user/${id}/transactions/${idTransacao}`, {
        title: titulo,
        value: valor,
        type: tipo,
    }).then((resposta) => {
        if (resposta.data) {
            alert("Registro alterado");
            location.href = "detalhe.html";
        } else {
            alert(resposta.data.message);
        }
    }).catch((erro) => {
        alert(erro.response.data.msg);
    });
}

function excluirTransacao() {
    const id = localStorage.getItem("id");
    const idTransacao = localStorage.getItem("idTransacao");

    axios.delete(`https://growdev-aula26.herokuapp.com/user/${id}/transactions/${idTransacao}`)
        .then((resposta) => {
            if (resposta.data) {
                alert("Registro Excluído");
                location.href = "detalhe.html";
            } else {
                alert(resposta.data.message);
            }
        }).catch((erro) => {
            alert(erro.response.data.msg);
        });
}
