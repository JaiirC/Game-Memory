
        let iconos = [];
        let selecciones = [];
        let contador = 0 
        generarTablero();

        function cargarIconos() {
            iconos = [
                `<img src="img/img1.jpg" alt=""> `,
                `<img src="img/img2.jpeg" alt=""> `,
                `<img src="img/img3.jpg" alt=""> `,
                `<img src="img/img4.jpg" alt=""> `,
                `<img src="img/img5.jpg" alt=""> `,
                `<img src="img/img6.jpg" alt=""> `,
                `<img src="img/img7.jpg" alt=""> `,
                `<img src="img/img8.jpg" alt=""> `,
            ]
        }

        function generarTablero() {
            cargarIconos();
            contador= 0;
            document.getElementById('score').value= "";
            selecciones = [];
            let tablero = document.getElementById("tablero");
            let tarjetas = [];
            for (let i = 0; i < 16; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1);
                }
            }
            tarjetas.sort(() => Math.random() - 0.5);
            tablero.innerHTML = tarjetas.join(" ");
        }
        
        function seleccionarTarjeta(i) {
            
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)";
                selecciones.push(i);
                
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones);
                selecciones = [];
                
            }
           
        }
       
function deseleccionar(selecciones) {
    
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);
        
        
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
                }else{
                    

                    contador = contador + 1;
                    document.getElementById('score').value= contador;
                    if (contador == 8){
                        document.getElementById('score').value= "Felicidades Ganaste";
                    }
                     
                }
            },1000);
             
}
