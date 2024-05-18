# Marmitec

## :memo: Description
Marmitec is an application developed to streamline the process of receiving, tracking, and completing orders in a food establishment. With an intuitive system and well-defined features, the project aims to optimize order management.

## Web Layout
[demonstracao-dashboard-pedido.webm](https://github.com/luizgustavoou/Marmitec/assets/89609312/bf47cf59-210f-479e-9c8d-2cf471d5b3c9)
![login-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/8d35f3b6-84ff-4d92-b77e-26231ad73612)
![fazer-pedidos-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/375e6d98-3113-4b97-bf40-b4318d6fdc04)
![finalizar-pedido-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/e78560f7-1df8-4224-aee4-2cfa4635e46a)
![dashboard-pedido-marmitec](https://github.com/luizgustavoou/Marmitec/assets/89609312/72a056f6-fcef-4bd6-9d31-a69eb7837b83)

## :books: Features
* **Authentication**
* **Add Order**
* **View Orders**
* **Change order status to Requested, In Progress, or Completed**

# :wrench: Technologies Used
## Backend
* NodeJS
* MySQL
* Socket.io server

## Frontend
* VueJS
* Pinia
* Socket.io client
* Bootstrap
* ElementPlus
* jsonwebtoken
* jwt-decode
* vue3-cookies
* vuedraggable

## Infrastructure
* Docker

## :rocket: Running the Project
Prerequisites: npm / yarn and Docker installed

```bash
# clone the repository
git clone https://github.com/luizgustavoou/Marmitec.git

# navigate to the project directory
cd Marmitec

# install backend dependencies
cd marmitec-back/

npm i



# install frontend dependencies
cd ../

cd marmitec-front/

npm i


# run the application
cd ../

docker compose up -d
```

## :soon: Future Implementations
* **Manage order updates via queues**

## :handshake: Collaborators
<a href="https://github.com/luizgustavoou">Luiz Gustavo de Oliveira Umbelino</a><br>

## :dart: Project Status
Completed
