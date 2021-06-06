function incluir() {
    // Aqui a gente busca dos dados tela e coloca em variáveis
    const nome = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("age").value;

    if (!nome) {
        alert("Nome de ser informado");
        return;
    }

    if (nome.trim().length < 3) {
        alert('O nome deve conter ao menos 3 caracteres');
        return;
    }

    if (!cpf) {
        alert("CPF deve ser informado");
        return;
      }
    
      if (cpf.trim().length !== 11) {
        alert("CPF inválido");
        return;
      }

      if (!email) {
        alert("Email deve ser informado");
        return;
      }

      if (!idade) {
        alert("Idade deve ser informada");
        return;
      }


    axios.post(`https://growdev-aula26.herokuapp.com/users`, {
        name: nome,
        cpf,
        email,
        age: idade,
    }).then((resposta) => {
        if (resposta.data.success) {
            alert("Registro incluído");
            location.href = "user.html";
        } else {
            alert(resposta.data.message);
        }
    }).catch((erro) => {
        alert(erro.response.data.msg);
    });
}