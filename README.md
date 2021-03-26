# Clarín Challenge

---

## Introducción:

Cree una page responsive con HTML, CSS Y JavaScript manteniendo la estructura de un boceto enviado y cumpliendo los puntos que se me indicaron para la resolución del challenge.

No usé librerías externas ni preprocesadores de CSS porque no me pareció necesario en este caso.

## Lazyload y Vista previa del video:

Se implementó lazyload para las imágenes, se muestra una vista previa del video y al clickear sobre esta, se añade el elemento video con JavaScript al DOM y se activa la reproducción. Estas funcionalidades se encuentran en el archivo "lazyload.js".

## Tracking de usuarios:

Para el sistema de trackeo de usuarios se armó un sencillo script que utiliza una API externa para obtener la dirección IP del usuario, y la almacena en el localStorage, lo que hace que persista durante distintas sesiones.

Luego de obtener toda la información requerida se hace el POST.

---

### Para visualizar el proyecto:

https://florapreda.github.io/clarin-challenge/
