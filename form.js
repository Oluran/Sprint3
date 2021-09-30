
  var agregarRegistro=function(){

    var nombre =document.getElementById("username").value;
    var correo =document.getElementById("correo").value;
    var contra1 =document.getElementById("contrasena").value;
    var validarContra =document.getElementById("confirmarContrasena").value;

    /*console.log(nombre)
    const arreglo=[nombre,correo, contra1,validarContra];
    */
/*comentario*/
    
    const arreglo=[nombre];
    arreglo.push(correo);
    arreglo.push(contra1);
    arreglo.push(validarContra);
    
    console.log(arreglo);
    return(true);
    
  }
  
/*module.exports.agregarRegistro=agregarRegistro;*/



function obtenerUsername(){

    var username1 =document.getElementById("username").value;
    if((/^d/).test(username1)){
        var usuariosConNumeros=username1;
    
        console.log("usuario con numero:"+ usuariosConNumeros);
        return usuariosConNumeros;
    }
    else{
        console.log("usuario sin numero");
    }


}


  
/*  function checkUsername(valor){
        if (valor !=""){
            if(valor.length<30) {
                if((/^\w+([\.-]?)\w+/).test(valor)){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        else{ 
            return false;
        }
    }
   

    function checkCorreo(valor){

        if (valor !=""){
            if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(valor)){
             return true;
            }
            else{
                return false;
            }
        }
        else{
            return false
        }
    }

    function checkContrasena(valor){
        if(valor!=""){
            if (/^(?=.*\d)(?=.*[a-zñ]).*[A-ZÑ]/.test(valor)){
                if (valor.length >=8){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }     
        }
        else{
            return false;
        }
    }

    function checkConfirmContrasena(valor1,valor2){
    
        if(valor2!=""){
           
            if (/^(?=.*\d)(?=.*[a-zñ]).*[A-ZÑ]/.test(valor2)) {
                if (valor2.length>=8) {
                     if(valor1==valor2){
                        return true;
                         }
                     else {
                    return false;
                        }
                }
                else{
                   return false;
                }
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

module.exports.checkCorreo = checkCorreo;
module.exports.checkUsername = checkUsername;
module.exports.checkContrasena = checkContrasena;
module.exports.checkConfirmContrasena = checkConfirmContrasena;

*/