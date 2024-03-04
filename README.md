## :memo: Descrição
A aplicação consiste em um gerenciamento de pedidos de uma marmitaria.

## Layout web
[demonstracao-dashboard-pedido.webm](https://github.com/luizgustavoou/Marmitec/assets/89609312/bf47cf59-210f-479e-9c8d-2cf471d5b3c9)
![login-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/8d35f3b6-84ff-4d92-b77e-26231ad73612)
![fazer-pedidos-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/375e6d98-3113-4b97-bf40-b4318d6fdc04)
![finalizar-pedido-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/e78560f7-1df8-4224-aee4-2cfa4635e46a)
![dashboard-pedido-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/72a056f6-fcef-4bd6-9d31-a69eb7837b83)


## :books: Funcionalidades
* <b>Autenticação</b>;
* <b>Adicionar pedido</b>;
* <b>Visualizar pedidos</b>;
* <b>Alterar estado do pedido para Solicitado, Andamento ou Finalizado</b>;


# :wrench: Tecnologias utilizadas
## Back end
* NodeJS;
* MySQL;
* Socket io server;
## Front end
* VueJS;
* Pinia;
* Socket io client;
* Bootstrap;
* Elemntplus
* jsonwebtoken;
* jwt-decode;
* vue3-cookies;
* vuedraggable;
  
## Infraestrutura
* Docker;

## :rocket: Rodando o projeto
Pré-requisitos: npm / yarn e Docker instalado

```bash
# clonar repositório
git clone https://github.com/luizgustavoou/Marmitec.git

# entrar na pasta do projeto front end web
cd Marmitec

cd marmitec-back/

# instalar depedências do frontend
npm i

cd ../

cd marmitec-front/

# instalar depedências do frontend
npm i
cd ../

# rodar aplicação
docker compose up -d
```

## :soon: Implementação futura
* <b>Gerenciar a atualizações dos pedidos por meio de filas</b>;

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/luizgustavoou">
        <img src="https://avatars.githubusercontent.com/u/89609312?v=4" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
        <sub>https://avatars.githubusercontent.com
          <b>luizgustavoou</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
Finalizado
