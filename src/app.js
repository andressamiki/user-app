import UserController from './controllers/UserController.js';


const route = window.location.pathname;
const userController = new UserController();

if(route == '/user-list.html'){
    userController.listUser();
    let b = [
        {
          "name": "My name 1",
          "cpf": "04080757247",
          "phone": "11987654321",
          "email": "myemail1@test.com.br"
        },
        {
          "name": "My name 2",
          "cpf": "77797584192",
          "phone": "11987654321",
          "email": "myemail2@test.com.br"
        },
        {
          "name": "My name 3",
          "cpf": "45486737688",
          "phone": "11987654321",
          "email": "myemail3@test.com.br"
        }
      ];


      var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];

        // Insert a row at the end of table
        

        // Insert a cell at the end of the row
        //var newCell = ;
        let btnDelete = '<button class="btn-danger" onclick="text()">Deletar</button>';
        let btnEdit =  '<button class="btn-primary" onclick="text()">Editar</button>';
        for (let index = 0; index < b.length; index++) {
            let newRow = tbodyRef.insertRow();
            newRow.insertCell().appendChild(document.createTextNode(b[index]['name']));
            newRow.insertCell().appendChild(document.createTextNode(b[index]['cpf']));
            newRow.insertCell().appendChild(document.createTextNode(b[index]['phone']));
            newRow.insertCell().appendChild(document.createTextNode(b[index]['email']));
           
            newRow.insertCell().insertAdjacentHTML('beforeend', btnDelete + btnEdit);
        }
        // Append a text node to the cell
        //var newText = document.createTextNode('new row');

}else{
    // Mascara do telefone
    document.getElementById('phone').addEventListener('input', function (e) {
        let n = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !n[2] ? n[1] : '(' + n[1] + ') ' + n[2] + (n[3] ? '-' + n[3] : '');
    });

    document.getElementById('cpf').addEventListener('input', function (e) {
        let n = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        e.target.value = (!n[2] ? n[1] : n[1] + '.' + n[2] + '.') +  (n[3] ? n[3] + '-' + n[4]: '') ;
    });

    const submit = document.querySelector('#form-user');
    submit.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = {
            name: document.getElementById('name').value,
            cpf: document.getElementById('cpf').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        }
        userController.createUser(form);
    });
}