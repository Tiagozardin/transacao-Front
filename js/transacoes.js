window.addEventListener('load', () => {
    tranferenciasDoUsuario();
});

async function tranferenciasDoUsuario(){
    //const userId = document.getElementById("idUser").value;
    const userId = localStorage.getItem("id");
    const transactions = await axios.get(`https://growdev-aula26.herokuapp.com/user/${userId}/transactions`).then((response) => response.data)
    const dados = document.getElementById('transacoes');
    const dadosFoot = document.getElementById('footerTransacoes');
   
    (transactions.user.transactions).forEach((transf) => {
        dados.innerHTML += `
        
            <tr>
                <td><a href='#' onclick='navegarTransacao("${transf.id}");'>${transf.id}</a></td>
                <td>${transf.title}</td>
                <td>${transf.value}</td>
                <td>${transf.type}</td>
                </tr>
                `;
            });
            totalFoot="";
            //console.log(transactions.balance)
            totalFoot += `
                </tr>
                    <th>#</th>
                    <th>Total de Entradas: ${transactions.balance.income}</th>
                    <th>Total de Saídas: ${transactions.balance.outcome}</th>
                    <th>Total: ${transactions.balance.total}</th>
                </tr>
                `;
                dadosFoot.innerHTML = totalFoot;
        }
        
function navegarTransacao(idTransacao) {
    console.log(idTransacao)
    localStorage.setItem("idTransacao", idTransacao);
        
    location.href = "detalheTransacao.html";
}
                

