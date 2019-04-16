'use sctrict'
//VAriabili
const elButton = document.querySelector('#button')
const elRisultato = document.querySelector('#risultato')
const xhttp = new XMLHttpRequest()

//FUNZIONI
function addFile(){
    console.log('Dentro Funzione addFile()')
    xhttp.open('GET', 'text.txt', true)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            elRisultato.innerHTML = this.responseText
            console.log('Risposta : ' + this.responseText)
        }
    }
    xhttp.send()
}

//EVENTI
elButton.addEventListener('click', addFile)
