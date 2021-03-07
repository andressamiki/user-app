<h1 align="center">
    User App 💻
</h1>

<p align="center">
 <a href="#objective">Objetivos</a> •
 <a href="#technologies">Tecnologias</a> •
 <a href="#solution">Como foi solucionado o problema</a> •
 <a href="#usage">Como rodar a aplicação</a> •
 <a href="#author">Autora</a>
</p>

Aplicação em produção: https://user-app-phi.vercel.app/

<div style="display: flex; flex-direction: row;">
  <img width="100%" style="border-radius: 10px" height="auto" alt="pagina Form" title="Pagina form" src="assets/form.png" />
<div>
<div style="display: flex; flex-direction: row;">
  <img  width="100%" style="border-radius: 10px" height="auto" alt="Pagina tabela" title="Pagina tabela" src="assets/task.png" />
<div>

<h2 id="objective" > 🎯 Objetivos </h2>

Desenvolver uma aplicação que deve conter duas páginas, uma que exibe um formulário para cadastro de dados, e outra que liste os dados cadastrados.

<h2 id="technologies"> 🛠 Tecnologias </h2>

- [NodeJS](https://nodejs.org/en/) (Teste, gerenciador de tarefas e servidor)
- [VSCode](https://code.visualstudio.com)
- [Jasmine](https://jasmine.github.io/) (Teste)
- [JavaScript](https://www.javascript.com/)

<h2 id="solution"> :question: Como foi solucionado o problema </h2>

O problema foi solucionado a partir do padrão de projeto mvc, onde foi criado:
 - Um controller de usuários para fazer a integração com view(Formulário e lista de usuários);
 - Duas models(User e UserList) para fazer a integração do controller com a camada de dados;
 - Duas views(FormView e UserList) responsáveis pela apresentação de dados e integração com o usuário;
 - Um serviço para pegar o estado inicial da lista de usuários;
 - Duas classes de auxilio(Mask e Validade) para validar e formatar os campos do formulário

<h2 id="usage" > 💻 Como rodar a aplicação </h2>

```bash
# Clone Repository
$ git clone https://github.com/andressamiki/user-app.git

# Go to project folder
$ cd user-app

# Install Dependencies
$ npm install

# Install Dependencies Server
$ cd server
$ npm install

# Run Aplication
$ cd server
$ npm run serve

# Access localhost
http://localhost:3000/

# Testing
$ npm test

# Compile .scss
$ npm run gulp-windows
# or
$ npm run gulp-unix

```

<h2 id="author"> :information_desk_person: Autora </h2>

<img style="border-radius: 50%;" src="assets/andressa.jpg" width="20%" alt=""/>

[![Linkedin: andressamiki](https://img.shields.io/badge/-andressamiki-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressamiki/)](https://www.linkedin.com/in/andressa-de-souza-miki-022630b2)
[![GitHub Andressa](https://img.shields.io/github/followers/andressamiki?label=follow&style=social)](https://github.com/andressamiki)
