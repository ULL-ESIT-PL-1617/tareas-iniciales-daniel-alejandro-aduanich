# Introduction

# GitBook
## ¿Que es Gitbook?

GitBook es una herramienta para crear documentación de proyectos y libros técnicos usando Markdown y Git/Github.

## ¿Como instalarlo?

Para poder instalarlo nesesitamos primero instalar npm con el siguiente comando:
```bash
sudo apt-get install npm
```
Luego de esto ya podemos instalar gitbook con el comando:
```bash
npm install gitbook-cli -g;
```

## ¿Como crear un libro?

Para poder crear un libro debemos usar el comando:
```bash
gitbook init
```
Al hacer esto se genera la estructura necesaria para nuestro libro

README.md -> Contiene la introduccion sobre tu libro.
SUMMARY.md -> Contiene la tabla de contenidos.

## ¿Como añadir informacion a nuestro libro?

Para añadir datos a nuestro libro lo que debemos hacer es es crear un documento .md con los datos que queremos y linkarlo a SUMMARY.
Imaginemos que tenemos esta estructura:

```
project
│   README.md
│   SUMMARY.md    
│
└── GitBook
    │   Index.md
```

El SUMMARY podria ser tal que asi:

```
# Índice

* [GitBook](GitBook/Index.md)

```

Una vez añadido esto podemos testear nuestro libro para ello usamos el comando:
```
gitbook serve
```
Una vez hecho esto se nos abrira un puerto al cual podremos accederemos via localhost.

