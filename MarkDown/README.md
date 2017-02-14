# ¿Qué es MarkDown?
Atendiendo a [wikipedia](https://es.wikipedia.org/wiki/Markdown#/media/File:Markdown_Syntax_in_gedit.png):

>Markdown es un lenguaje de marcado ligero creado por John Gruber que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, inspirándose en muchas convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

En la práctica esto se traduce en un lenguaje de dominio específico que nos permite escribir texto y especificar su formato empleando únicamente texto plano. Es importante señalar que markdown **no** es un estándar, por lo que sus capacidades y sintaxis completa dependen del intérprete / traductor que empleemos. Sin embargo, existen una serie de elementos comunes:

# ¿Qué permite markdown?

## Encabezados
Pueden especificarse hasta 6 niveles, mediante dos formas distintas:

    # Encabezado 1
    ## Encabezado 2
    ### Encabezado 3
    #### Encabezado 4
    ##### Encabezado 5
    ###### Encabezado 6

También es posible generar el encabezado 1 y 2 _subrayando_ el texto con un mínimo de dos = / -

    Encabezado 1
    ==

    Encabezado 2
    --

Produciendo:

# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6


## Texto plano
Se escribe de forma normal, con la particularidad de que para conseguir un salto de línea deben insertarse o bien dos espacios en blanco antes del salto en sí o bien dos saltos seguidos.

Por ejemplo este texto  
se consigue así

    Por ejemplo este texto  
    se consigue así

    Por ejemplo este texto

    se consigue así
# Negrita, cursiva y tachado
- __negrita__ y **negrita**
- _cursiva_ y *cursiva*
- ~~tachado~~

      __negrita__ y **negrita**
      _cursiva_ y *cursiva*
      ~~tachado~~
