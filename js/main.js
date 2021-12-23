
let oCurrentUser = {};
function iniciaSesion(){
    localStorage.setItem('logeado', 'Si');
    location.href = "index.html";
}

async function fnInsertHeaderLogeado(CurrentUser){
  oCurrentUser = CurrentUser;  
  let divHeader = document.getElementById("dvHeader");
    let headerMenu = document.getElementById("header-menu");

    divHeader.innerHTML = "";
    let valida = (localStorage.getItem('logeado') != null && localStorage.getItem('logeado') == 'Si') ? true : false;   
    let html = "";
   // if(valida){
     
        html +=`
        <div class="row">
            <div class="col-lg-1 col-sm-1 no-padding-right text-center">
                <img src="${CurrentUser.photoURL}" alt="" class="img-fluid fotoPerfilLogin2"/>
                <label class="text-white d-inline-inline-block d-sm-inline-block d-md-none d-lg-none d-xl-none d-xxl-none">Hola! ${CurrentUser.displayName}</label><br>
            </div>

            <div class="col-lg-3 col-sm-7 no-padding-left d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <label class="text-white">Hola!</label><br>
            <label class="text-white">${CurrentUser.displayName}</label>
            </div>
            <div class="col-lg-4 col-sm-4">
            <div class="right-icons">
                <ul>
                <li><a href="https://www.facebook.com/groups/951050702493025"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/_cortatuweb"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://instagram.com/cortatuweb?r=nametag"><i class="fa fa-instagram"></i></a></li>
                <li class="no-margin-left"><a href="https://discord.gg/XJ45SgyH"><img src="assets/images/discord.svg" alt="" class="iconDiscord"></a></li>
                
                </ul>
            </div>
            </div>

        <div class="col-lg-4 col-sm-0 ">
          <div class="right-icons-custom d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            
            <div class="filters">
              <ul>
                <li data-filter="*" class=""><a href="perfil.html" class="btn colorRedBottom" id="btn-perfil">PERFIL</a></li>
                <li data-filter="*" class=""><button type="submit" id="button-logout" class="btn colorRedBottom">CERRAR SESIÓN</button></li>
           
              </ul>
            </div>
            
        </div>
      </div>
      </div> `
   
   // }
    divHeader.innerHTML = html;

    headerMenu.classList.add('headerResponsivoLogeado');
}

async function fnInsertHeaderNoLogeado(){
    let divHeader = document.getElementById("dvHeader");
    let headerMenu = document.getElementById("header-menu");
    divHeader.innerHTML = "";
    let valida = (localStorage.getItem('logeado') != null && localStorage.getItem('logeado') == 'Si') ? true : false;   
    let html = "";
  //  if(!valida){
        html += `
        <div class="row">        
        <div class="col-lg-8 col-sm-8">
          <div class="right-icons">
            <ul>
              <li><a href="https://www.facebook.com/groups/951050702493025"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/_cortatuweb"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://instagram.com/cortatuweb?r=nametag"><i class="fa fa-instagram"></i></a></li>
              <li class="no-margin-left"><a href="https://discord.gg/XJ45SgyH"><img src="assets/images/discord.svg" alt="" class="iconDiscord"></a></li> 
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 ">
          <div class="right-icons-custom d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            
            <div class="filters">
              <ul>
                
                <li data-filter="*" class=""><a href="registrarse.html" class="btn colorRedBottom">Registrarse</a></li>
                <li data-filter="*" class=""><a href="login.html" class="btn colorRedBottom">Iniciar Sesion</a></li>
              </ul>
            </div>
            
        </div>
      </div>
      </div>`
  //  }
    divHeader.innerHTML = html;  
}



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
      switch(location) {
        case 'PS':
          window.location.href  = "pregunta-semanal.html";
          break;
        case 'c':
          window.location.href  = "confesiones.html";
          break;
        default:
          window.location.href  = "envianos-tu-historia.html";
      } 
      
      
      // if(location == 'PS'){
      //       window.location.href  = "pregunta-semanal.html";
      //   }else if('c'){
      //       window.location.href  = "confesiones.html";
      //   }else{
      //       window.location.href  = "envianos-tu-historia.html";
      //   }
        
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


