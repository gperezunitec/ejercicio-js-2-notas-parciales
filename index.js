function calcular() {

    let strA=document.getElementById("valorA").value;
    let strB=document.getElementById("valorB").value;
    let strC=document.getElementById("valorC").value;

    if (strA===""){
        alerta("valor a en blanco")



    }else if (strB===""){
        alerta("valor b en blanco")
    }
    else if (strC===""){
        alerta("valor c en blanco")
    }else{
        let a =parseFloat(strA);
        let b =parseFloat(strB);
        let c =parseFloat(strC);


        if (a!==0){
            let discriminante=(b*b)-(4*a*c);
            if (discriminante>=0){
                let x1=((-b)+(Math.sqrt(discriminante)))/(2*a);
                let x2=((-b)-(Math.sqrt(discriminante)))/(2*a);
                document.getElementById("valorX1").value=x1;
                document.getElementById("valorX2").value=x2;
            }else{
                alerta("discriminante menor que cero")
            }
        }else{

            alerta("el valor de a debe ser diferente de 0")
        }

    }



}

function limpiar() {
    document.getElementById("valorX1").value="";
    document.getElementById("valorX2").value="";
    document.getElementById("valorA").value="";
    document.getElementById("valorB").value="";
    document.getElementById("valorC").value="";
}

function alerta(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "warning",
    });

}