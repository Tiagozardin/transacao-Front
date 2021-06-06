
window.addEventListener('load', ()=>{
    //Todos os elementod dom e scripts estão disponíveis
    axios.get('https://growdev-aula26.herokuapp.com/users')
        .then(resposta => {
            imprimirDados(resposta.data.data);
        });
    
});


function imprimirDados(data){
    const dados = document.getElementById("dados");

    let novoConteudo = "";
    data.forEach((user) => {
        // Linha de um usuário
        novoConteudo += `
            <tr>
                <td><a href='#' onclick='navegar("${user.id}");'>${user.id}</a></td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.cpf}</td>
                <td> ${user.age}</td>
            </tr>
        `;
    });
    dados.innerHTML = novoConteudo;
}

function navegar(id) {
    localStorage.setItem("id", id);

    location.href = "detalhe.html";
}



