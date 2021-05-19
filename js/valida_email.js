function validaEmail(){
    if(document.forms[0].email.value=="" 
        ||document.forms[0].email.value.indexOf('@')==-1 
         ||document.forms[0].email.value.indexOf('.')==-1)
        {
           alert( "Hum, e-mail inválido, poderia verificar e corrigir?" );
           return false;
        }
    }