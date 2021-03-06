# Angular 9 Template Driven Forms
Este es un proyecto de Angular 9 construido unicamente para probar las caracteristicas que destacan este framework y tener un recordatorio a mano de todo lo que se puede hacer con el.

## Angular Forms Concept
Los formularios en Angular se basan en los formularios HTML estándar para ayudarlo a crear controles de formulario personalizados y experiencias de validación fáciles. Hay dos partes en una forma reactiva angular: los objetos que viven en el componente para almacenar y administrar la forma, y la visualización de la forma que vive en la plantilla.

## Template-driven Forms
Los formularios basados en plantillas son el enfoque en Angular para crear formularios donde la mayor parte del código está escrito en html.

## Adding Form HTML
En esta practica probamos controles HTML que agregamos utilizando clases de bootstrap.
1) Input de tipo texto, email, telefonicos.
2) Combobox al cual le cargamos los elementos de un arreglo en el archivo TS del componente.
3) Radio Button.
4) Checkbox.
5) Button.

## Binding Data with ngForm
When we work with data binding in template driven forms Angular provides three directives:
-ngForm
-ngModel
-ngModelGroup

1) importar "FormsModule" en el archivo app.module.ts.
2) donde se abre mi etiqueta de formulario #nombreAsignado="ngForm".
3) en cada control que deseo seguir debo agregar un "ngModel" para que angular rastree los cambios.
4) por ultimo debo asignar un identificador a cada control utilizando name="nombreControl". 
5) en caso de necesitar agrupar la informacion se puede utilizar la directiva "ngModelGroup" lo que nos permite visualizar un grupo de datos como un json.

## Binding Data to a Model
Cuando tengamos el formulario de IU listo en Angular, debemos enviar los datos al servidor para futuras operaciones. Simplemente, podemos enviarlo para guardar los detalles. Pero antes de enviar los datos al servidor, primero debemos vincular los datos al modelo.

1) abrir la consola y generar una clase (ng generate class User).
2) dentro del archivo generado declaramos los parametros dentro de un constructor con su tipo de dato.
3) dentro del archivo Ts de nuestro componente importamos nuestro modelo en la cabecera.
4) declaramos la propiedad userModel y le pasamos los argumentos.
5) para poder vincular las propiedades del modelo a la directiva ngModel se utiliza [ngModel]="" pero esto solo es de una via y no podra actualizar la vista.
6) para poder hacer uso de la directiva ngModel de dos vias utilizamos [(ngModel)]="".

## Tracking state and validity
Angular rastrea el estado del control de formulario y aplica la clase necesaria que nos ayuda a saber qué validación se ha aplicado. La validación y la aplicación de la retroalimentación visual adecuada para los controles son muy importantes para cualquier aplicación.

-El control ha sido visitado (ng-touched / ng-untouched)
-El valor del control ha cambiado (ng-dirty / ng-pristine)
-El valor del control es valido (ng-valid / ng-invalid)

1) agregamos un identificador a nuestro control #nombreIdentificador
2) debajo de nuestro control por medio de la interpolacion utilizamos {{nombreIdentificador.className}}
3) agregamos a nuestro control el atributo required para especificar es requerido
4) por ultimo en vez de utulizar las validaciones por clases la vamos a utilizar por medio de ngModel de la siguiente forma #nombreIdentificador="ngModel", lo que nos perimitira usar la interporlacion 
{{nombreIdentificador.propiedades (untouched/ touched/ pristine/ dirty/ valid/ invalid)}}.

## Validation with Visual Feedback
para una buena experiencia de usuario es indicar de forma visual si el formulario es invalido.

1) para poder hacer la practica primero asignamos un identificador a nuestro elemento HTML usando #nombreIdentificador
2) este identificador sera igual a la directiva ngModel, #identificador="ngModel".
3) por ultimo utilizando los corchetes y luego la clase para validar [class.is-invalid]="name.invalid && name.touched" podemos saber si el control cumple o no los requisitos de no cumplirlos el control se pondra rojo.

## Displaying Error Messages
para mejorar la experiencia de usuario en esta practica mostraremos mensajes que se aplicaran cuando los controles no se cumplan para esto hay dos forma de validacion, por medio de clases y por medio de la directiva ngModel.

1) para validar por medio de clases utilizando la etiqueta small escribiremos el mensaje a mostrar, dentro de la primera etiqueta vamos a utilizar una clase para dar color al mensaje y utilizando classbinding especificaremos la validaciones.
2) para validar por medio de la directiva ngModel utilizamos una etiqueta div bajo nuestro control la cual por medio de la directiva *ngIf se especificare las condiciones con a cual mostrara multiples mensajes tambien especificadas las condiciones con la cual uno u otro aparecera.

## Select control validation
en esta ocacion validaremos si el valor esta por defecto o si ha sido seleccionada una de las opciones del contro.

1) para esto la etiqueta small escribiremos el mensaje a mostrar, dentro de la primera etiqueta vamos a utilizar una clase para dar color al mensaje y utilizando classbinding especificaremos la validaciones.
2) la propiedad value de nuestro select control sera igual a default.
3) por medio de event binding (blur) / (change) estaremos esperando los cambios del control para validar la seleccion.
4) por medio del metodo validateTopic asignaremos el valor true or false a nuestra propiedad "topicHasError".
5) por ultimo la clase de nuestro select control con la que validamos sera igual a nuestro propiedad boleana asi como la clase de nuestra etiqueta small.

## Form Validation
Estas validaciones se utilizan de forma general para tener un control de la informacion antes de enviarla al servidor.

1) para esta practica utilizaremos la ayuda del #templateReferece utilizando property binding dentro del boton submit.
2) con la propiedad disabled especificamos que cuando no se cumpla las condiciones el boton se desactive.

## Submitting form data

1) agregar al formulario el atributo "novalidate".
2) asignaremos un metodo submit en el formulario llamado "onSubmit" el cual estara en el documento TS.
3) dentro del medtodo vamos a establecer que console.log sera igual a userModel y al hacer clic en el boton podemos ver la informacion dentro de la consola.
4) crearemos un servicio llamado "enrollment" para enviar la data a aun servidor.
5) dentro del servicio importamos httpClient e injectamos el modulo.
6) tambien debemos importarlos dentro del app.module.ts y luego agregarlo al arreglo de imports.
7) dentro del componente Ts crearemos la variable "url" la cual estara en blanco, el metodo "enroll" el cual tendra como parametro "User" y realizamos la importacion.
8) luego dentro de nuestro componente .TS vamos a importar nuestro servicio e injectarlo en nuestro constructor.
9) en nuestro metodo onSubmit llamaremos el metodo de nuestro servicio y le pasaremos como parametro los datos de nuestro formualario, y mostraremos por consola tanto si funciona como si hay errores.

## Express Server to Receive Form Data
En esta practica crearemos un servidor utilizando express js con el cual por medio de la configuracion de un endpoint pasaremos nuestro objeto de angular a nuestro servidor expresss.

1) condiguraremos el servidor express.
2) dentro de nuestro servicio, actualizaremos el valor de la variable url a nuestro endpoint.
3) por medio de la consola iniciaremos nuestro servidor express y luego en nuestro frontend enviaremos la data de nuestro formulario.
4) en nuetros componente .ts creamos la propiedad "submitted" que sera igual a falso, en nuestro metodo onSubmit nuestra propiedad sera verdadera.
5) en nuestra vista dentro de la etiqueta form por medio de la directiva ngIf creamos la condicion de que el formulario solo se mostrara si no ha sido enviado.

##  Error Handling
Cuando se envia la informacion puede haber un poblema y el formulario tenga un error vamos a aprender como manejarlo

1) para esto vamos a importar en nuestro componente Ts "catchError" y "throwError".
2) de igual manera vamos a importar en nuestro servicio "catchError" y "throwError".
3) crearemos un metodo en nuestro servicio el cual mananejara los errores que se produzcan en las respuestas http para asi poder mostrarlos.
4) dentro de nuestro metodo enroll por medio de pipe capturaremos el error que pueda tener nuestra peticion post y la pasaremos a nuestro errorHandler.
5)dentro de nuestro componente .TS vamos a crear una propiedad que nos servira para mostrar en la vista los errores que se produzcan.
6) cambiamos la funcionalidad de nuestro metodo para que la propiedad errorMsg sea igual al error y lo mostramos en la vista.

## TDF and Reactive (Model Driven) Approach

1) en el evento onSubmit de nuetro documento html le pasaremos el parametro userForm.
2) dentro del componente .ts pasaremos el mismo parametro userForm a nuestro metodo.