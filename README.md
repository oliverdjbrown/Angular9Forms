# Angular9Forms
Este es un proyecto de Angular 9 construido unicamente para probar las caracteristicas que destacan este framework y tener un recordatorio a mano de todo lo que se puede hacer con el.

## Angular Forms Concept
Los formularios en Angular se basan en los formularios HTML estándar para ayudarlo a crear controles de formulario personalizados y experiencias de validación fáciles. Hay dos partes en una forma reactiva angular: los objetos que viven en el componente para almacenar y administrar la forma, y la visualización de la forma que vive en la plantilla.

## Template-driven Forms
Los formularios basados en plantillas son el enfoque en Angular para crear formularios donde la mayor parte del código está escrito en html.

## Reactive Forms
Los formularios reactivos proporcionan un enfoque basado en modelos para manejar entradas de formulario cuyos valores cambian con el tiempo. Esta guía le muestra cómo crear y actualizar un control de formulario básico, avanzar al uso de controles múltiples en un grupo, validar valores de formulario y crear formularios dinámicos donde puede agregar o quitar controles en tiempo de ejecución.

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
