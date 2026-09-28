/* =====================================================
   PORTADA Y CONTRASEÑA
===================================================== */

const CONTRASENA = "110444";

const portada =
    document.getElementById("portada");

const botonEntrar =
    document.getElementById("botonEntrar");

const campoPassword =
    document.getElementById("campoPassword");

const mensajeError =
    document.getElementById("mensajeError");


function comprobarPassword() {

    const contraseña =
        campoPassword.value.trim();


    if (contraseña === CONTRASENA) {

        mensajeError.textContent = "♡";

        portada.classList.add("salir");


        setTimeout(() => {

            portada.style.display = "none";

        }, 1000);


    } else {

        mensajeError.textContent =
            "La clave no es correcta ♡";

        campoPassword.value = "";

        campoPassword.focus();

    }

}


botonEntrar.addEventListener(
    "click",
    comprobarPassword
);


campoPassword.addEventListener(
    "keydown",
    (evento) => {

        if (evento.key === "Enter") {

            comprobarPassword();

        }

    }
);


/* =====================================================
   CONTADOR
===================================================== */

const fechaInicio =
    new Date(
        2026,
        3,
        11,
        16,
        44,
        0
    );


function actualizarContador() {

    const ahora =
        new Date();

    const diferencia =
        Math.max(
            0,
            ahora.getTime() -
            fechaInicio.getTime()
        );


    const segundo = 1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(
            diferencia / dia
        ) + 2;


    const horas =
        Math.floor(
            (diferencia % dia) /
            hora
        );


    const minutos =
        Math.floor(
            (diferencia % hora) /
            minuto
        );


    const segundos =
        Math.floor(
            (diferencia % minuto) /
            segundo
        );


    document.getElementById("dias").textContent =
        dias;


    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* =====================================================
   CARTAS
===================================================== */

const cartas = [

    {
        titulo: "El comienzo",
        icono: "💌",

        mensaje: `No sé si alguna vez te he dicho con suficiente claridad lo especial que se siente recordar cómo comenzó todo.

A veces pensamos que las cosas importantes tienen que llegar acompañadas de algo extraordinario, pero nuestra historia me hizo entender que no siempre es así.

Hay momentos que parecen pequeños cuando suceden y que, con el tiempo, terminan convirtiéndose en recuerdos que uno guarda con muchísimo cariño.

Desde aquel 11 de abril, esa fecha tiene un significado diferente para mí.

No porque haya cambiado el mundo entero, sino porque desde entonces existe una parte de mi historia que también lleva tu nombre.

Y esta cajita comienza aquí, con una primera carta que solamente quiere decirte algo:

Me alegra muchísimo que nuestros caminos se hayan encontrado.`
    },


    {
        titulo: "Lo que admiro de ti",
        icono: "🌷",

        mensaje: `Hay muchas cosas que puedo decir de ti, pero algunas de las que más valoro no siempre son las que se pueden explicar fácilmente.

Me gusta la persona que eres, tu manera de ser y esos pequeños detalles que probablemente tú misma no consideras importantes.

A veces uno no se da cuenta del efecto que tiene en alguien más.

Tal vez tú no notes algunas de las cosas que haces, las palabras que dices o la manera en que ciertos momentos se quedan en la memoria de otra persona.

Pero yo sí los noto.

Y por eso quería guardar esta carta aquí: para recordarte que eres mucho más especial de lo que quizá alcanzas a imaginar.

Nunca pienses que tienes que ser perfecta para ser importante.

Para mí, lo bonito está precisamente en todo aquello que te hace ser tú.`
    },


    {
        titulo: "Lo que cambiaste en mí",
        icono: "✨",

        mensaje: `Hay personas que pasan por nuestra vida y simplemente forman parte de una etapa.

Y también existen personas que, sin darse cuenta, dejan algo que permanece.

Tú has dejado cosas en mí que probablemente ni siquiera sabes.

Me has hecho valorar más ciertos momentos, prestar atención a pequeños detalles y entender que compartir la vida con alguien también significa aprender de esa persona.

No quiero decir que todo tenga que ser perfecto.

Las historias reales tampoco lo son.

Pero sí creo que cuando alguien importa, uno empieza a mirar muchas cosas de una manera diferente.

Y si algún día me preguntas qué cambió desde que llegaste a mi vida, probablemente no podría darte una sola respuesta.

Porque fueron muchas pequeñas cosas.

Y juntas terminaron significando muchísimo.`
    },


    {
        titulo: "Cuando tengas un día difícil",
        icono: "🧸",

        mensaje: `Si algún día estás cansada, preocupada o simplemente tienes uno de esos días en los que nada parece salir como esperabas, quiero que recuerdes algo.

No tienes que tener todo resuelto todo el tiempo.

Está bien tener días malos.

Está bien sentirse cansada.

Está bien necesitar un momento para respirar y volver a empezar.

No quiero que esta carta sea una solución para todo lo que puedas estar sintiendo.

Solamente quiero que sea un pequeño recordatorio de que no tienes que enfrentarte a cada día pensando que tienes que poder con absolutamente todo.

Y si alguna vez necesitas recordar las cosas bonitas, vuelve a esta cajita.

Aquí siempre habrá palabras esperando por ti.

Palabras que te recuerden lo importante que eres y lo mucho que significan para mí los momentos que compartimos.`
    },


    {
        titulo: "Todo lo que falta vivir",
        icono: "🩵",

        mensaje: `Esta carta no habla solamente de lo que ya vivimos.

Habla de todo aquello que todavía no conocemos.

Todavía existen lugares que no hemos visitado, fotografías que no hemos tomado, conversaciones que no hemos tenido y recuerdos que todavía ni siquiera existen.

Y eso me parece bonito.

Porque significa que nuestra historia todavía tiene muchas páginas en blanco.

No sé exactamente cómo serán los próximos capítulos.

No puedo saber qué traerá cada día.

Pero sí sé que me hace ilusión pensar en todos esos pequeños momentos que todavía podemos construir.

Algún día podremos mirar hacia atrás y recordar cosas que hoy todavía no han sucedido.

Y quizá esa sea una de las partes más bonitas de todo esto:

que todavía nos quedan muchas historias por escribir.`
    },


    {
        titulo: "Lo que nunca quiero que olvides",
        icono: "🌙",

        mensaje: `Si algún día llegas a dudar de lo importante que eres, quiero que recuerdes esta carta.

No porque unas palabras puedan solucionar todas las dudas, sino porque a veces necesitamos que alguien nos recuerde aquello que nosotros mismos olvidamos.

Eres una persona que merece cariño, respeto y momentos que te hagan sentir valorada.

No tienes que demostrar constantemente cuánto vales.

No tienes que compararte con nadie.

Y tampoco tienes que convertirte en otra persona para merecer cosas bonitas.

Quiero que cuando pienses en esta cajita recuerdes que fue hecha para guardar palabras que quizá algún día necesitabas leer.

Y entre todas esas palabras hay una idea que quiero que permanezca:

Tu presencia en mi vida importa.

Mucho más de lo que una sola carta podría explicar.`
    },


    {
        titulo: "Gracias por estar",
        icono: "🤍",

        mensaje: `A veces decimos gracias por cosas pequeñas y olvidamos agradecer las cosas que realmente significan mucho.

Por eso esta carta solamente quiere decir gracias.

Gracias por los momentos compartidos.

Gracias por las conversaciones.

Gracias por las risas.

Gracias por cada recuerdo que poco a poco se ha ido convirtiendo en parte de nuestra historia.

No todo tiene que ser extraordinario para ser importante.

Muchas veces son precisamente los momentos más sencillos los que terminamos recordando durante más tiempo.

Y si algún día volvemos a mirar esta cajita después de mucho tiempo, espero que podamos reconocer todo lo que hemos recorrido desde aquel primer día.

Porque esta historia no se construye solamente con grandes momentos.

También se construye con todos esos pequeños instantes que decidimos guardar.`
    }

];


/* =====================================================
   DÍA ACTUAL
===================================================== */

function obtenerDiaActual() {

    const ahora =
        new Date();

    const diferencia =
        ahora.getTime() -
        fechaInicio.getTime();

    const dia =
        1000 *
        60 *
        60 *
        24;


    if (diferencia < 0) {

        return 0;

    }


    return (
        Math.floor(
            diferencia / dia
        ) + 1
    );

}


/* =====================================================
   CARTAS DESBLOQUEADAS
===================================================== */

function obtenerCartasDesbloqueadas() {

    const diaActual =
        obtenerDiaActual();


    return Math.min(
        diaActual,
        cartas.length
    );

}


let cartaActual = 0;


/* =====================================================
   ELEMENTOS DE LA CAJA
===================================================== */

const caja =
    document.getElementById("caja");

const modal =
    document.getElementById("modal");

const cerrar =
    document.getElementById("cerrar");

const siguiente =
    document.getElementById("siguiente");

const listaSobres =
    document.getElementById("listaSobres");

const instruccion =
    document.getElementById("instruccion");

const progreso =
    document.getElementById("progreso");


/* =====================================================
   MOSTRAR SOBRES
===================================================== */

function mostrarSobres() {

    listaSobres.innerHTML = "";


    const cartasDesbloqueadas =
        obtenerCartasDesbloqueadas();


    cartas.forEach(
        (carta, indice) => {

            const desbloqueada =
                indice <
                cartasDesbloqueadas;


            const sobre =
                document.createElement("div");


            if (desbloqueada) {

                sobre.className =
                    "sobre activo";


                sobre.innerHTML = `

                    <span class="icono">
                        ${carta.icono}
                    </span>

                    <h3>
                        ${carta.titulo}
                    </h3>

                    <small>
                        Disponible para ti
                    </small>

                `;


                sobre.addEventListener(
                    "click",
                    () => {

                        abrirCarta(indice);

                    }
                );


            } else {

                sobre.className =
                    "sobre bloqueado";


                sobre.innerHTML = `

                    <span class="icono">
                        🔒
                    </span>

                    <h3>
                        Una sorpresa
                    </h3>

                    <small>
                        Se desbloquea en otro día
                    </small>

                `;

            }


            listaSobres.appendChild(
                sobre
            );

        }
    );


    progreso.textContent =
        `${cartasDesbloqueadas} de ${cartas.length} cartas disponibles`;

}


/* =====================================================
   ABRIR CAJA
===================================================== */

caja.addEventListener(
    "click",
    () => {

        caja.classList.add(
            "abierta"
        );


        instruccion.textContent =
            "Una pequeña sorpresa para ti ♡";


        const cartasDesbloqueadas =
            obtenerCartasDesbloqueadas();


        const cartaParaAbrir =
            Math.max(
                0,
                cartasDesbloqueadas - 1
            );


        abrirCarta(
            cartaParaAbrir
        );

    }
);


/* =====================================================
   ABRIR CARTA
===================================================== */

function abrirCarta(indice) {

    const cartasDesbloqueadas =
        obtenerCartasDesbloqueadas();


    if (
        indice < 0 ||
        indice >= cartas.length
    ) {

        return;

    }


    if (
        indice >=
        cartasDesbloqueadas
    ) {

        return;

    }


    cartaActual =
        indice;


    const carta =
        cartas[indice];


    document.getElementById(
        "numeroCarta"
    ).textContent =
        `CARTA N.º ${String(
            indice + 1
        ).padStart(
            2,
            "0"
        )}`;


    document.getElementById(
        "tituloCarta"
    ).textContent =
        carta.titulo;


    document.getElementById(
        "mensajeCarta"
    ).textContent =
        carta.mensaje;


    modal.classList.add(
        "visible"
    );

}


/* =====================================================
   CERRAR CARTA
===================================================== */

function cerrarCarta() {

    modal.classList.remove(
        "visible"
    );


    caja.classList.remove(
        "abierta"
    );


    instruccion.textContent =
        "Toca la caja para descubrir una carta";

}


cerrar.addEventListener(
    "click",
    cerrarCarta
);


siguiente.addEventListener(
    "click",
    cerrarCarta
);


modal.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target === modal
        ) {

            cerrarCarta();

        }

    }
);


/* =====================================================
   NOTAS PARA TI
===================================================== */

const notaTitulo =
    document.getElementById(
        "notaTitulo"
    );

const notaFecha =
    document.getElementById(
        "notaFecha"
    );

const notaMensaje =
    document.getElementById(
        "notaMensaje"
    );


/* =====================================================
   OBTENER FECHA DE HOY
===================================================== */

function obtenerFechaHoy() {

    const hoy =
        new Date();


    const año =
        hoy.getFullYear();


    const mes =
        String(
            hoy.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const dia =
        String(
            hoy.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${año}-${mes}-${dia}`;

}


/* =====================================================
   FORMATEAR FECHA
===================================================== */

function formatearFecha(
    fecha
) {

    const partes =
        fecha.split("-");


    const fechaLocal =
        new Date(
            Number(partes[0]),
            Number(partes[1]) - 1,
            Number(partes[2])
        );


    return fechaLocal.toLocaleDateString(
        "es-HN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

}


/* =====================================================
   CARGAR NOTA DEL DÍA
===================================================== */

async function cargarNotita() {

    try {

        const respuesta =
            await fetch(
                `notas.json?actualizacion=${Date.now()}`
            );


        if (!respuesta.ok) {

            throw new Error(
                `Error HTTP: ${respuesta.status}`
            );

        }


        const notas =
            await respuesta.json();


        const fechaHoy =
            obtenerFechaHoy();


        const nota =
            notas.find(
                nota =>
                    String(
                        nota.fecha
                    ).trim() ===
                    fechaHoy
            );


        if (nota) {

            notaTitulo.textContent =
                nota.titulo;


            notaFecha.textContent =
                formatearFecha(
                    nota.fecha
                );


            notaMensaje.textContent =
                nota.mensaje;


        } else {

            notaTitulo.textContent =
                "Una pequeña nota";


            notaFecha.textContent =
                formatearFecha(
                    fechaHoy
                );


            notaMensaje.textContent =
                "Hoy no hay una notita todavía. Pero quizá mañana haya una esperándote. ♡";

        }


    } catch (error) {

        console.error(
            "Error cargando notas:",
            error
        );


        notaTitulo.textContent =
            "Una pequeña nota";


        notaFecha.textContent =
            "♡";


        notaMensaje.textContent =
            "No se pudo cargar la notita en este momento.";

    }

}


/* =====================================================
   INICIAR
===================================================== */

mostrarSobres();

cargarNotita();


/* =====================================================
   ACTUALIZACIÓN AUTOMÁTICA
===================================================== */

setInterval(
    () => {

        mostrarSobres();

        cargarNotita();

    },
    60000
);