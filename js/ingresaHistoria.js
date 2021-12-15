function fnValidaIngresado(){
    
    let valida = (localStorage.getItem('logeado') != null && localStorage.getItem('logeado') == 'Si') ? true : false;   
    if(!valida){
        document.getElementById("dvModalHistoria").innerHTML = "";

        let modalHtml = '<div class="modal fade" id="modalHistoria" aria-hidden="true" aria-labelledby="modalMensaje" tabindex="-1" data-keyboard="false">'
                        +'    <div class="modal-dialog modal-dialog-centered modal-dialog modal-lg">'
                        +'    <div class="modal-content">'
                        +'        <div class="modal-body colorFondoModalBienvenido">'
                        +'        <div class="row mt-5-lg mt-0-sm">'
                        +'            <div class="col-md-12 text-center pt-5-lg pt-0-sm mt-5-lg">'
                        +'            <label class="text-white fw-bold" style="font-size: 40px;">¡Debes iniciar sesión!</label><br>'
                        +'            </div>'
                        +'        </div>'
        
                        +'        <div class="row text-center botoneraBienvenidoResponsivo mt-5">'
                        +'            <div class="col-md-12">'
                        +'            <a href="index.html" class="colorAmarilloA">Volver a HOME</a>'
                        +'            </div>'
                        +'        </div>'
                        +'        </div>'
                        +'     </div>'
                        +'    </div>'
                        +' </div>';

        document.getElementById("dvModalHistoria").innerHTML += modalHtml;
        var myModalHistoria = new bootstrap.Modal(document.getElementById('modalHistoria'), {
            keyboard: false
          });
        
        myModalHistoria.show();

    }
}


var validaLogeo = function(location){
    let valida = (localStorage.getItem('logeado') != null && localStorage.getItem('logeado') == 'Si') ? true : false;   
    if(valida){
        if(location == 'PS'){
            window.location.href  = "pregunta-semanal.html";
        }else{
            window.location.href  = "carasteristicas-agresor.html";
        }
        
    }else{
        fnMuestraModalNoLogeado();
    }
}

var fnMuestraModalNoLogeado  = function(){
    document.getElementById("dvModalHistoria").innerHTML = "";

    let modalHtml = '<div class="modal fade" id="modalHistoria" aria-hidden="true" aria-labelledby="modalMensaje" tabindex="-1">'
                    +'    <div class="modal-dialog modal-dialog-centered modal-dialog modal-lg">'
                    +'    <div class="modal-content">'
                    +'        <div class="modal-body colorFondoModalBienvenido">'
                    +'        <div class="row mt-5-lg mt-0-sm">'
                    +'            <div class="col-md-12 text-center pt-5-lg pt-0-sm mt-5-lg">'
                    +'            <label class="text-white fw-bold" style="font-size: 40px;">¡Debes iniciar sesión!</label><br>'
                    +'            </div>'
                    +'        </div>'
                    +'        <div class="row mt-0-sm">'
                    +'           <div class="col-md-12 text-center pt-5-lg pt-0-sm mt-lg-5">'
                    +'            <label class="text-white fw-bold" style="font-size: 20px;">Para enviar tu historia, es importante que inicies sesión, para brindar un mejor apoyo.                    </label><br>'
                    +'           </div>'
                    +'        </div>'
                    +'        <div class="row text-center botoneraBienvenidoResponsivo mt-5">'
                    +'            <div class="col-md-12">'
                    +'            <a href="login.html" class="btn colorRedBottom">INICIAR SESIÓN</a><br><br>'
                    +'            <a href="registrarse.html" class="btn colorRedBottom">REGISTRARME</a><br><br>'
                    +'            <a href="index.html" class="colorAmarilloA">Volver a HOME</a>'
                    +'            </div>'
                    +'        </div>'
                    +'        </div>'
                    +'     </div>'
                    +'    </div>'
                    +' </div>';

    document.getElementById("dvModalHistoria").innerHTML += modalHtml;
    var myModalHistoria = new bootstrap.Modal(document.getElementById('modalHistoria'));
    myModalHistoria.show();
}

function cierraSesion(){
    localStorage.setItem('logeado', false);
    location.href = "index.html";
}
