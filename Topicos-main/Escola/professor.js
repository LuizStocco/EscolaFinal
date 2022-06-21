fetch("https://raw.githubusercontent.com/LuizStocco/Json.Alunos/main/Json/Alunos.json")
.then(response => response.json())
    .then(json => {
        createAlunos(json)

    })

        function createAlunos(json) {

            json.forEach((aluno, index) => {
                const alunos = document.getElementById("alunos")
                const todosAlunos = document.createElement("a")
                todosAlunos.onclick = ()=>{
                    const frequencia = document.getElementById("Frequencia")
                    const notas = document.getElementById("Notas")
                    frequencia.value = aluno.Frequencia
                    notas.value = aluno.Notas
                    
                }
                todosAlunos.innerText = aluno.Nome
                alunos.appendChild(todosAlunos)
            })

        }

   