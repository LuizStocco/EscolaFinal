fetch("https://raw.githubusercontent.com/LuizStocco/ProjetoEscola.Json/main/data/areaAluno.json")
  .then(response => response.json())
  .then(json => {
    const nomeinput = document.getElementById("nome")
    nomeinput.append(json.Nome)


    createAtividades(json)
    createProvas(json)
  })

function createAtividades(json) {
  
  json.AtividadesExtra.forEach((atividade, index) => {
    const atividadeEx = document.getElementById("atividades")
    const atividadeA = document.createElement("a")
    atividadeA.innerText = atividade.Nome
    atividadeEx.appendChild(atividadeA)
  })

}

function createProvas(json) {
  json.Provas.forEach(prova => {
    const provasul = document.getElementById("materias")
    const disciplina = document.createElement("a")
    disciplina.innerText = prova.disciplina
    disciplina.onclick = () => preencheCamposDisciplina(prova)
    provasul.appendChild(disciplina)
  });

}

function preencheCamposDisciplina(prova){
  const notas = document.getElementById("notasInput")
  const frequencia = document.getElementById("faltasInput")
  notas.value = prova.Notas
  frequencia.value = prova.Frequencia
}


