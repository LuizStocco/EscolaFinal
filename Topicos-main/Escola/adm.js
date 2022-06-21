fetch("https://raw.githubusercontent.com/LuizStocco/Json.Alunos/main/Json/Alunos.json")
.then(response => response.json())
.then(json => {

    const dropdownsAlunos = document.querySelectorAll(".dropdown-content.alunos")

    dropdownsAlunos.forEach(dropdown => {
        dropdown.append(...createAlunos(json))
    })
    
})

function createAlunos(json) {
const alunosElements = []
json.forEach((aluno, index) => {
    const alunoElement = document.createElement("a")
    alunoElement.innerText = aluno.Nome
    alunoElement.onclick = () => {
        const frequencia = document.getElementById("Frequencia")
        const notas = document.getElementById("Notas")
        const materia = document.getElementById("Materia")
        frequencia.value = aluno.Frequencia
        notas.value = aluno.Notas
        materia.value = aluno.AtividadesExtras[0].NomeMateria
        console.log(aluno)
    }
    alunosElements.push(alunoElement)
});

return alunosElements;
}



