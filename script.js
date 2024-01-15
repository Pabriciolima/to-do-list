function btn(){

        const pegarValor = document.getElementById('text').value;
        var novaTarefa = document.createElement("li");
        novaTarefa.textContent = pegarValor;


        var botaoLixeira = document.createElement("button");
        novaTarefa.appendChild(botaoLixeira);
        botaoLixeira.innerHTML = "&#128465;";
        botaoLixeira.onclick = function() {
        novaTarefa.remove();
        };

        

        document.getElementById("listaDeTarefas").appendChild(novaTarefa);
        document.getElementById("text").value = "";
        document.getElementById("valorNaTela").innerHTML = "Tarefa: " + pegarValor;
        }


