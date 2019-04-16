# ajax-file-esternoTXT
### In questo esempio utilizziamo il metodo XMLHttpRequest() per poter avere accesso a file esterni(txt, json, xml)
 
``` javascript
    //PRIMA DICHIARO LE VARIABILI CHE UTLIZZERò
    const elButton = document.querySelector('#button')// Salvo il bottone in una variabile
    const elRisultato = document.querySelector('#risultato')//Salvo il contentuo del paragrafo 'risultato'
    const xhttp = new XMLHttpRequest()// In una variabile 'xhttp' salvo l'Instanza del metodo XMLHttpRequest()

    //Creo la funzione che andrà a pescare il file esterno 
    function addFile(){//Nome della funzione
        console.log('Dentro Funzione addFile()')
        xhttp.open('GET', 'text.txt', true) //Metodo OPEN serve per accerede alla risorsa; Primo parametro il modo in cui farò la richiesta(GET, POST, HEAD), Secondo parametro è URL di dove si trova il nostro file, terzo parametro un boolenao('True viol dire che sarà asincrona')
        //invio la risorsa risorsa 
        xhttp.send()
        // Al cambiare dello stato della richiesta(xhttp.onreadystatechange) 
        xhttp.onreadystatechange = function() {
            //se il readyStae di xhttp == 4 e xhttp.status == 200
            if (this.readyState == 4 && this.status == 200) {
                // Stampo il risultato della risposta nel contenitore
                elRisultato.innerHTML = this.responseType
                console.log('Risposta : ' + this.responseText)
            }
        }
    }
    // Al Pulsante gli associo un Evento; come primo paraemetro 'evento click', come secondo paraemtro una callBack
    elButton.addEventListener('click', addFile)
```
### HTML DEL FILE
``` html
<body>
    <div class="container">
        <div class="section">
            <button id="button" class="btn btn-success">Attiva Ajax</button><!-- Pulsante che aziona il metodo chttp -->
            <p id="risultato"></p><!-- STmpo il risultato della risposta -->
        </div>
    </div>
    <script src="js/app.js"></script>
</body>
```