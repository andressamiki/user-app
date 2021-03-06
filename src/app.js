import UserController from './controllers/UserController.js';
import Mask from './utils/Mask.js';
import UserListView from './views/UserListView.js';
import FormView from './views/FormView.js';


const route = window.location.pathname;
const userController = new UserController();
const userList = userController.userList();

switch (route) {
    case '/':
    case '/index.html':
        const formView = new FormView();
        const queryParams = new URLSearchParams(window.location.search);
        const cpfParam = queryParams.get('cpf');
        if (cpfParam) {
            const user = userController.getUserByCPF(cpfParam);
            formView.name = user.name;
            formView.cpf = user.cpf;
            formView.phone = user.phone;
            formView.email = user.email;
        }
        formView.phone.addEventListener('input', event => {
            event.target.value = Mask.maskPhone(event.target.value);
        });

        let button = document.querySelector("button");
        button.disabled = true;
        const inputs = document.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keyup', event => {
                let hasNotValue = false;
                for (let index = 0; index < inputs.length; index++) {
                    if(inputs[index].value ==  undefined || inputs[index].value == ""){
                        hasNotValue = true;
                    }
                }
                if(!hasNotValue){
                    button.disabled = false;
                }else{
                    button.disabled = true;
                }
            });
        }

        formView.cpf.addEventListener('input', event => {
            event.target.value = Mask.maskCpf(event.target.value);
        });
        formView.submit.addEventListener('submit', event => {
            event.preventDefault();
            if (queryParams.get('cpf')) {
                userController.editUser(formView);
            } else {
                userController.createUser(formView, 'Usuário criado com sucesso.');
            }
        });
        break;
    case '/user-list.html':
        const userListView = new UserListView();

        if (Promise.resolve(userList) == userList) {
            userList.then(users => userListView.renderTable(users));
        } else {
            userListView.renderTable(userList);
        }

        break;

    default:
        throw new Error('Page not found');
}
