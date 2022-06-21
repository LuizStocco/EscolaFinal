function verificarLogin(){

    var email = document.getElementById('campologin');
    var senha = document.getElementById('camposenha');

    var professor = document.getElementById('checkprofessor');
    var aluno = document.getElementById('checkaluno');
    var secretaria = document.getElementById('checksecretaria');
    var paisemaes = document.getElementById('checkpaimae');

    if (email.value == "" || senha.value == ""){
      alert("Verifique se o login e senha foram preenchidos");
    }else{
      if(professor.checked && aluno.checked && secretaria.checked && paisemaes.checked){
        alert("Marque apenas um campo!");
      }else{
        if(professor.checked){
          window.open("professor.html");
        }
        if(aluno.checked){
          window.open("aluno.html");
        }
        if(secretaria.checked){
          window.open("adm.html");
        }
        if(paisemaes.checked){
          window.open("pais.html");
        }
    }
  }
}