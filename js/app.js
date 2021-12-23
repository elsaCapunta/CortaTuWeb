import {login, logout} from "./auth.js";
import {insert, getItems, update} from "./firestore.js";
import {getUUID} from "./utils.js";



const iniciarSesionResponsivo = document.querySelector("#iniciar-sesion-responsivo");
const cerrarSesionResponsivo = document.querySelector("#cerrar-sesion-responsivo");
const registrarseResponsivo = document.querySelector("#registrarse-responsivo");

let CurrentUser;
let todos = [];

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        CurrentUser = user;
        console.log("usuario logeado "+CurrentUser.displayName);
         fnInsertHeaderLogeado(CurrentUser);
         iniciarSesionResponsivo.remove();
         registrarseResponsivo.remove();
        const buttonLogout = document.querySelector("#button-logout");
        const buttonPerfil = document.querySelector("#btn-perfil");

        buttonPerfil.remove();

        buttonLogout.addEventListener("click", async (e) => {
            try {
                logout(); 
                localStorage.setItem('logeado', 'No');
                location.href = "index.html";
            } catch (error) {
                throw new Error(error);
            }   
         });

         cerrarSesionResponsivo.addEventListener("click", async (e) => {
            try {
                logout(); 
                localStorage.setItem('logeado', 'No');
                location.href = "index.html";
            } catch (error) {
                throw new Error(error);
            }   
         });
        
    }else{
        console.log("no hay usuario logeado");
        //hideUI();
         fnInsertHeaderNoLogeado();
        const buttonLogin = document.querySelector("#button-login");
        
        buttonLogin.addEventListener("click", async (e) => {
            try {
                CurrentUser = await login();
                iniciaSesion();
            } catch (error) {
                throw new Error(error);
            }
        });   
        cerrarSesionResponsivo.remove();    
        
    }

});







// todoForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const text = todoInput.value;
//     if(text != ""){
//         addTodo(text);
//         todoInput.value = "";
//         loadTodos();
//     }
// });

async function addTodo(text){
    try {
        const todo = {
            id:getUUID(),
            text:text,
            completed:false,
            userid:CurrentUser.uid
        };
        const reponse = await insert(todo);
        
    } catch (error) {
        throw new Error(error);
    }
}

function init(){
    buttonLogin.classList.add("hidden");
    buttonLogout.classList.remove("hidden");
    todoForm.classList.remove("hidden");

    userInfo.innerHTML = `
    <img src="${CurrentUser.photoURL}" width="32" />
    <span>${CurrentUser.displayName}</span>`;
    loadTodos();
}

async function loadTodos(){
    todosContainer.innerHTML = "";
    todos = [];
    try {
        const response = await getItems(CurrentUser.uid);
        todos =  [...response];
        renderTodos();
    } catch (error) {
        throw new Error(error);
    }
}

function renderTodos(){
    let html = "";
    todos.forEach((todo) =>{
        html += `
        <li class="todo">
            <input type="checkbox" id="${todo.id}" ${todo.completed ? "checked" : ""} />
            <span> ${todo.text}</span>
        </li>
        `
    });
    todosContainer.innerHTML = html;

    document.querySelectorAll("#todos-container input[type=checkbox]").forEach((checkbox) => {
        checkbox.addEventListener("change", e =>{
            const id = checkbox.id;
            const todo = todos.find((todo) => todo.id == id);
            todo.completed = checkbox.checked;
            try {
                update(id,todo);
            } catch (error) {
               throw new Error(error); 
            }
            
        })
    })
}

function hideUI(){
    buttonLogin.classList.remove("hidden");
    buttonLogout.classList.add("hidden");
    todoForm.classList.add("hidden");
    todosContainer.innerHTML = "";
}