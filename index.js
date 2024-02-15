 document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('select').onchange = function() {
            document.querySelector('#hello').style.color    = this.value
    }
})
let start;

document.getElementById('parar').addEventListener('click',stop, );
//document.getElementById('parar').addEventListener('click',stopa, );
//document.getElementById('parar').addEventListener('click',stopb, );
document.getElementById('iniciar').addEventListener('click', all,);
//document.getElementById('iniciar').addEventListener('click', alla,);
//document.getElementById('iniciar').addEventListener('click', allb,);
function all() {
  let sec = 55
  let min = 0
    function segundos() {
        if (sec>=10 ){
        document.getElementById('sec').innerHTML = sec++

        
    } 
        else {
            document.getElementById('sec').innerHTML = '0' + sec++
        }
            if(sec > 59){
                sec = 0
                
                
            } 
            else{}
            if(sec == 60){
                document.getElementById('min').innerHTML = min++ 
            }

    }
intervalID = window.setInterval(segundos, 1000);
    
}
function stop(){ 
clearInterval(intervalID)

}






/*function alla() {
  let min = 0
    function minutos() {
        if (min>=10){
        document.getElementById('min').innerHTML = min++  } 
        else {
            document.getElementById('min').innerHTML = '0' + min++
        }
        
    }
intervalIDa = window.setInterval(minutos, 60000);
    
}
function stopa(){ 
clearInterval(intervalIDa)

}






function allb() {
  let hora = 0
    function horario() {
        if (hora>=10){
        document.getElementById('hora').innerHTML = hora++  } 
        else {
            document.getElementById('hora').innerHTML = '0' + hora++
        }
    }
intervalIDb = window.setInterval(horario, 3600000);
    
}
function stopb(){ 
clearInterval(intervalIDb)

}
 */
