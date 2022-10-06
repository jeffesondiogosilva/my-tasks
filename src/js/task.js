
var tasks = [];

function idGenerator() {                        //GERANDO O ID PARA CONTROLE DAS TASKS

    var timestamp = new Date();

    var id = timestamp.getHours().toString() + 
             timestamp.getMinutes().toString() +
             timestamp.getSeconds().toString() +
             timestamp.getMilliseconds().toString();


             return id;
    ;
}

function createTask(){                           //CRIA-SE A TASK E NO FINAL ATUALIZA A TELA COM A NOVA TASK INSERIDA

    var taskDescription = document.getElementById('newTask').value;

    var task = {
        id: idGenerator(),
        data:{
            description: taskDescription
        
        }
    };

    tasks.push(task);

    updateScreen();
}

function updateScreen() {                       //FUNÇÃO QUE VAI ATUALIZANDO A TELA COM AS LINHAS DE TASKS

    var list = "<ul>"

    tasks.forEach(task=>{

        list += "<li id-data=" +task.id+ ">" + task.data.description + "</li>" ;

        list += "<button onclick=deleteTask(this) id-data="+ task.id +">Apagar</button>" ;
    });

    list += "</ul>" ;
    

    document.getElementById("list").innerHTML = list;
    document.getElementById('newTask').value = "";
}

function deleteTask(element){

    console.log(element);

    tasks = tasks.filter(task => task.id != element.getAttribute("id-data"));

    updateScreen();

    console.log(tasks);
}