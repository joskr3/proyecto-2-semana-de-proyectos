// @ts-nocheck


// esta es una constante que guarda el valor de la refrencia de cuando queremos obtener un elemento del HTML que tenga como id al valor titulo
const titulo = document.getElementById( "titulo" )

let misEstilos = "color:green;font-size:50px"
// asi modificamos estilos
titulo.style = misEstilos

// asi modificamos el contenido de un elemento que contiene un texto
//titulo.innerText = "El restaurante mas popular de la ciudad"

const seccionIntro = document.getElementsByClassName( "section-intro" )

//seccionIntro[ 0 ].style = "border: 1px solid red"

for ( const element of seccionIntro ) {
  element.style = "border: 1px solid red;padding:1rem; color:blue"
}

//console.log( seccionIntro )



// ejercicio : vamos a hacer un pequenlo programita , que haga lo sgt:

// - va a aplicarle un background verde a todos los elementos que contengan la palabra "section"
// - envian la captura al interno(DM - mi chat) del discord

// aca guardamos en la constante body, el resultado de obtener aquellos elementos de mi HTML que se llamen "body", como getElementsByTagName, siempre devuelve un array(coleccion) de nodos(elementos HTML), y quiero recuperar en este caso al unico elemento, tengo que hacerlo con la sintaxis de array, para recuperar el primer elemento de un array se hace con el [0], que hace referencia al primer elemento del array, en nuestro caso ese primer elemento es el elemento body

// getElementsByTagName
// traeme un grupo de elementos que tengan el nombre de etiqueta body
const body = document.getElementsByTagName( "body" )[ 0 ]
const main = body.children[ 1 ]
const header = body.children[ 0 ]
const sections = main.children

// hoisting -> elevar las variables declaradas con var y las funciones declaradas con function al inicio del archivo, para asegurar su existencia


// const sections2 = document.getElementsByTagName( "body" )[ 0 ].children[ 1 ].children


//console.log(sections)

// vamos a recorrer sections(es un array de elementos de HTML)
// eso lo hacemos con el primer for-of
// que a cada iteracion asigna en section al elemento actual que esta siendo recorrido
for ( const section of sections ) {

  // en esta constante -misClases- recuperamos la lista de clases de cada seccion , que esta siendo asignada en el primer for-of , en la constante section
  const misClases = section.classList


  // en el segundo for-of, asignamos en clase que es una constante , lo que estamos recorriendo de misClases, que es un array de textos, correspondiente a ca class de cada elemento section
  for ( const clase of misClases ) {
    // en el condicional , comparamos si cada clase(texto), contiene el valor "section", y si es asi , le aplico estilos a toda la seccion con la propiedad styles que tienen todos los elementos HTML
    if ( clase.includes( "section" ) ) {
      section.style = "border: 1px solid  hsl(30, 10%, 34%)"
    }
  }
}



const subtitulo_ingredients = document.querySelector( "#subtitulo_ingredients" )

// querySelector -> con id
const unicoValor = document.querySelector( "#miIdEspecial" )

// querySelectorAll -> con nombre de etiquetas
const todasMisSecciones = document.querySelectorAll( "section" )


console.log( subtitulo_ingredients )

console.log( todasMisSecciones )


// querySelectorAll -> con clases
const todosLosSelectoresMiClase = document.querySelectorAll( ".miclase" )
console.log( todosLosSelectoresMiClase )



// querySelectorAll -> devuelve un conjunto de elementos o un array de elementos

// y querySelector - > devuelve un unico elemento

// si voy a buscar varios elementos con  una clase en particular, sera ".laClase"

// si voy a buscar un id, en particular,sera "#miIdUnico"


// aca obtengo al elemento miTitulo, que es donde agregrare a nuestro otro elemento que se llamara botonOrdenar
const miTitulo = document.getElementById( "titulo" )



// aca con la funcion especial que tiene el obejto global document,que se llama  createElement-> crear elemento de HTML, y solo puedo crear elementos ya existente de html , como lo son los botones(button), o textos con (p), o titulos con h1, etc
const botonOrdenar = document.createElement( "button" )



// aca asigno un texto a la constante, este sera lo que ira dentro del botn
const tituloBoton = "Ordena Aqui!!"


//en esta parte , atravez de la propiedad  textContent , le asigamos y contenido o texto a nuestro boton que sera lo que hay en la constante titulo boton, pero tranformado a mayusculas con la funcion toUpperCase(), que esta disponible para las cadenas de texto(strings)
botonOrdenar.textContent = tituloBoton.toUpperCase()


// aca aplicamos estilos 
botonOrdenar.style = "border:none; background: green; color:white; padding:0.5rem 1rem; border-radius:12px;margin: 1rem; display:flex; justify-content:center; cursor:pointer"




// aqui lo agrego al DOM(al HTML visible en el navegador), en este caso agrego a botonOrdenar despues del elemento miTitulo
miTitulo.appendChild( botonOrdenar );



let nuevoHiperVinculo = document.createElement( "a" )
nuevoHiperVinculo.href = "/miRuta.com"

const contenido = "Me lleva a las ofertas"

nuevoHiperVinculo.textContent = contenido.toLowerCase()

nuevoHiperVinculo.style = "font-size: 2rem; text-content-center"

let elementoPadre = miTitulo.parentNode

// En el ejemplo anterior, sp1 podría insertarse después de sp2 usando:
elementoPadre.insertBefore( nuevoHiperVinculo, miTitulo.nextSibling );

botonOrdenar.addEventListener( 'click', function () {
  miModal.classList.remove( 'hidden' );
} );
botonCerrarModal.addEventListener( 'click', function () {
  miModal.classList.add( 'hidden' );
} );


// const miModal = document.getElementById( 'myModal' )
// const botonCerrarModal = document.getElementById( 'closeModal' )

// function ocultarBoton() { 
//    miModal.classList.remove( 'hidden' );
// }

// function cerrarModal() {
//   miModal.classList.add( 'hidden' );
//  }

//botonOrdenar.onclick(ocultarBoton())
//cerrarModal.onclick (cerrarModal())
