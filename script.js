function btn(){

        const pegarValor = document.getElementById('text').value;
        
        var novaTarefa = document.createElement("li");
        novaTarefa.textContent = pegarValor;

        document.getElementById("listaDeTarefas").appendChild(novaTarefa);

        document.getElementById("pegarValor").value = "";

        document.getElementById("valorNaTela").innerHTML = "Tarefa: " + pegarValor;
        }


