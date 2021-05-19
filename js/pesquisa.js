function pesquisa() {
    var busca;
    var filtro;
    var ul;
    var li;
    var a;
    var i;
    busca = document.getElementById("buscar");
    filtro = busca.value.toUpperCase();
    ul = document.getElementById("disponiveis");
    li = ul.getElementsByTagName("li");
var teste = 0

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
            teste +=1;
        }
                else {
            li[i].style.display = "none";
        }
    }
   if (teste == 0 ) {
        alert("Que pena, não temos esse item em cartaz no momento");
    }
}



