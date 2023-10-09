# Plataforma de Perguntas e Respostas

Esta é minha primeira experiência com Node.js, e criei esta plataforma de perguntas e respostas como um projeto inicial. É uma implementação simples, mas funcional, para explorar o desenvolvimento web com Node.js e algumas outras tecnologias.

## Tecnologias Utilizadas

A plataforma foi desenvolvida com as seguintes tecnologias e frameworks:

- **Express.js**: Um framework web para Node.js que simplifica o desenvolvimento de aplicativos web e API RESTful.
- **EJS**: Um mecanismo de modelagem que permite a criação de páginas HTML dinâmicas e reutilizáveis.
- **MySQL2**: Um driver de banco de dados MySQL para Node.js que permite a interação com um banco de dados MySQL.
- **Sequelize**: Uma ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados relacionais.
- **Body-parser**: Um middleware para analisar dados do corpo das solicitações HTTP.
- **Bootstrap**: Um framework de design para criar interfaces de usuário atraentes e responsivas.

## Como Utilizar

1. Clone o repositório para sua máquina local.
2. Instale as dependências com o comando `npm install`.
3. Configure seu banco de dados MySQL e crie uma base de dados com o nome "plataforma" ou altere o nome no arquivo de configuração (`database/database.js`) para se adequar à sua configuração de banco de dados local.

```markdown
// No arquivo database/database.js, altere as credenciais de acesso ao banco de dados. Substitua 'seu_usuario' e 'sua_senha' pelas credenciais corretas:

const sequelize = new Sequelize('nomeDatabase', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql',
});

## Acessar plataforma

- Digite em seu navegador: `localhost:5050`

## Créditos

- Desenvolvido por: Davi Bueno
- Discord: zonateli
- Email: davibueno870@gmail.com
- GitHub: [devDaviBueno](https://github.com/devDaviBueno)
