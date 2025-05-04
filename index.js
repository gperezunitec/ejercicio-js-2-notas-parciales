function calcular() {

    let strA=document.getElementById("valorPrimerParcial").value;
    let strB=document.getElementById("valorSegundoParcial").value;
    let strC=document.getElementById("valorTercerParcial").value;

    if (strA==="" || strA>30){
        alerta("No se admiten valores nulos o mayores a 30% en el primer parcial")

    }else if (strB==="" || strB>30){
        alerta("No se admiten valores nulos o mayores a 30% en el segundo parcial")
    }
    else if (strC==="" || strB>40){
        alerta("No se admiten valores nulos o mayores a 40% en el tercer parcial")
    }else{

        let a =parseFloat(strA);
        let b =parseFloat(strB);
        let c =parseFloat(strC);
        let total=a+b+c;
        document.getElementById("valorNotaTotal").value=total;

        switch(total){

            case (total>=0 && total<59):
                alerta("Reprobado")
                break;



            default:
                alerta("Hola")
                break;

        }




    }



}

function limpiar() {
    document.getElementById("valorNotaTotal").value="";
    document.getElementById("valorPrimerParcial").value="";
    document.getElementById("valorSegundoParcial").value="";
    document.getElementById("valorTercerParcial").value="";
}

function alerta(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "warning",
    });

}