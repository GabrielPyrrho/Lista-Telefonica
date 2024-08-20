const API_URL = 'http://localhost:3000'


function buscarParaEditar(id) {
    input_editar_id.value = id;

    fetch(API_URL + '/contatos/' + id)
        .then(res => res.json())
        .then(res => {
            input_editar_id.value = id;
            input_editar_contato.value = res.contato;
            input_editar_numero.value = res.numero;
            input_editar_city.value = res.cidade;
        });
}

function editar() {
    event.preventDefault();  //impedindo a página de dar refresh

    //recuperando os dados do formulário 
    let dados = {
        id: input_editar_id.value,
        contato: input_editar_contato.value,
        numero: input_editar_numero.value,
        cidade: input_editar_city.value,

    };

    fetch(API_URL + '/contatos/' + input_editar_id.value, {
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(() => { atualizarLista() });

    let x = document.querySelector('[data-bs-dismiss="offcanvas"]');   //[data-bs-dismiss="offcanvas"] fechar a janela depois que edita item 

    x.dispatchEvent(new Event('click'));
}


function inserir() {
    //para a página não ser recarregada 
    event.preventDefault();

    let dados = {
        contato: input_contato.value,
        numero: parseInt(input_numero.value),
        cidade: input_cidade.value
    };

    fetch(API_URL + '/contatos/', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'   //dizer para a API o que está enviando
        }
    })
        .then(resposta => resposta.json())
        .then();

    form_add.reset();
    atualizarLista();

}


async function excluir(id) {
    let resposta = confirm('Vc tem certeza?');

    if (resposta !== true) {
        return;
    }


    await fetch(API_URL + '/contatos/' + id, {
        method: "DELETE"
    });

    atualizarLista();
}

function atualizarLista() {

    tabela_contatos.innerHTML = '';  //limpar tabela a cada vez que ela é chamada

    fetch('http://localhost:3000/contatos')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (lista) {
            lista.forEach(function (cadaContat) {
                tabela_contatos.innerHTML += `
            <tr>    
                <td>${cadaContat.id}</td>
                <td>${cadaContat.contato}</td>
                <td>${cadaContat.numero}</td>
                <td>${cadaContat.cidade}</td>

                <td>
                    <button onclick="buscarParaEditar (${cadaContat.id})" data-bs-toggle= "offcanvas" data-bs-target= "#offcanvasEditar" class= "btn btn-warning">
                        Editar
                    </button>
                
                    <button onclick="excluir(${cadaContat.id})" class="btn btn-danger">
                        Excluir
                    </button>
                </td>
            </tr>
            
            `;
            });

        })
}

atualizarLista()