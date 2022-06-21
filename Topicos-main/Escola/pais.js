fetch("https://raw.githubusercontent.com/LuizStocco/Json.Alunos/main/Json/Alunos.json")
    .then(response => response.json())
    .then(json => {
        fillDropdownAlunos(json)
    })

function fillDropdownAlunos(alunos) {
    const dropdownsAlunos = document.getElementById("dropdownAlunos")
    alunos.forEach(aluno => {
        dropdownsAlunos.appendChild(createAlunoElement(aluno))
    })
}

function createAlunoElement(aluno) {
    const alunoElement = document.createElement("a")
    alunoElement.innerText = aluno.Nome
    alunoElement.onclick = () => fillAlunoData(aluno)
    return alunoElement;
}

function fillAlunoData(aluno) {
    fillFrequencia(aluno)
    fillNotas(aluno)
    fillMaterias(aluno)
    fillAtividades(aluno)
}

function fillFrequencia(aluno) {
    const frequencia = document.getElementById("faltasInput")
    frequencia.value = aluno.Frequencia
}

function fillNotas(aluno) {
    const notas = document.getElementById("notasInput")
    notas.value = aluno.Notas
}

function fillMaterias(aluno) {
    const materias = document.getElementById("dropdownMaterias")
    aluno.Provas.forEach(prova => {
        materias.appendChild(createMateriaElement(prova))
    })
}

function createMateriaElement(prova) {
    const materiaElement = document.createElement('a')
    materiaElement.innerText = prova.disciplina
    return materiaElement
}

function fillAtividades(aluno) {
    const atividades = document.getElementById("dropdownAtividades")
    aluno.AtividadesExtras.forEach(atividade => {
        atividades.appendChild(createAtividadeElement(atividade))
    })
}

function createAtividadeElement(atividade) {
    const atividadeElement = document.createElement('a')
    atividadeElement.innerText = atividade.NomeMateria
    return atividadeElement
}











