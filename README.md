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