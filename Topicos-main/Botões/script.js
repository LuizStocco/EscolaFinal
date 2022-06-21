
function conta10(){
    for (i = 0 ; i <= 10 ; i++){
        let para = document.createElement('p');
        para.textContent = i;
        document.getElementById("conta10").appendChild(para);
    }
}
function debito(){
    let para = document.createElement('p');
    para.textContent = 'Resumidamente, o technical debt (débito técnico, em tradução livre) acontece todas as vezes que um código de baixa qualidade ou com erros é lançado para atender apenas às demandas do momento. Apesar de agilizar o processo de lançamento do software, por exemplo, os problemas começam a surgir no futuro.';
    document.getElementById("debito").appendChild(para);
}
function urlsonar(){
    window.open("https://mundoeducacao.uol.com.br/fisica/sonar.htm");
}
function urlJenkins(){
    window.open("https://www.jenkins.io/");
}
