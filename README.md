```markdown
# Lista Telefônica - CRUD

Este é um projeto simples de Lista Telefônica que implementa as funcionalidades básicas de um CRUD (Create, Read, Update, Delete) usando um servidor JSON.

## Funcionalidades

- **Criar**: Adicione novos contatos à lista telefônica.
- **Ler**: Visualize todos os contatos da lista telefônica.
- **Atualizar**: Edite as informações de um contato existente.
- **Excluir**: Remova contatos da lista telefônica.

## Requisitos

- Node.js
- json-server (instalado globalmente ou via NPX)

## Instalação

1. Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/GabrielPyrrho/Lista-Telefonica.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-diretorio
   ```

3. Instale as dependências necessárias (se houver):

   ```bash
   npm install
   ```

## Uso

1. No terminal, execute o seguinte comando para iniciar o servidor JSON:

   ```bash
   npx json-server db.json --port 3000
   ```

   Certifique-se de estar na pasta do projeto ao executar este comando.

2. A aplicação estará disponível em `http://localhost:3000` e você poderá realizar operações CRUD nos contatos.

## Estrutura do Projeto

- `db.json`: Arquivo que contém os dados dos contatos da lista telefônica.
- `README.md`: Este arquivo de documentação.

## Exemplo de Dados (`db.json`)

Aqui está um exemplo de como o arquivo `db.json` pode ser estruturado:

```json
{
  "contacts": [
    {
      "id": 1,
      "name": "João Silva",
      "phone": "(11) 1234-5678"
    },
    {
      "id": 2,
      "name": "Maria Oliveira",
      "phone": "(21) 8765-4321"
    }
  ]
}
```

## Endpoints Disponíveis

- `GET /contacts`: Retorna todos os contatos.
- `GET /contacts/:id`: Retorna um contato específico pelo `id`.
- `POST /contacts`: Adiciona um novo contato.
- `PUT /contacts/:id`: Atualiza um contato existente pelo `id`.
- `DELETE /contacts/:id`: Remove um contato pelo `id`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um *pull request* ou relatar problemas no repositório.
   
