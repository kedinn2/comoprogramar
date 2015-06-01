---
layout: post
title: 2 formas crear Raíz cuadrada en Python
date: 2013-09-20 00:10:36
categories: general
tags: [python]
---
<p>Siempre estaba utilizando la librería para una raíz cuadrada que es <strong>math </strong>entonces me decidí crear una raíz cuadrada sin utilizar  librerías veamos como:</p>
<p><strong>Primera forma utlizando libreria math:</strong><br />
muy fácil<br />

<strong>linea 1</strong> es importar la librería math para la raíz<br />
<strong>linea 2</strong> ingresar valor por teclado<br />
<strong>linea 3 </strong>aplicamos la operación, es donde funciona la librería en math.sqrt<br />
<strong>linea 4 </strong>imprimir numero<br />
okey podemos mejorar el codigo ejm cuando ingresen un negativo mostrara error ya que es solo para reales positivos<br />
podemos crear un if numero&gt;=0 y else como la segunda forma</p>
<pre class="prettyprint">import math
numero=input("Ingrese numero: ")
raiz=math.sqrt(numero)
print raiz</pre>
<p><strong>Segunda forma todo manual :)</strong><br />
<strong>linea 1</strong> es para ingresar un valor por teclado<br />
<strong>linea 2</strong> multiplico un valor ingresado por x 1.0 para convertir en tipo real.<br />
<strong>linea 3 - 11</strong> un if numero&gt;=0 ya que si ingresamos un negativo ejm -9 no podra dar ningun resultado y si no pasara a else si no cumple condicion de if y nos imprimira Numero incorrec......<br />
<strong>linea 4</strong> declaramos p sea igual a numero<br />
<strong>linea 5</strong> delaramos y con valor 0<br />
<strong>linea 6 </strong>un while mientras i sea diferente que p<br />
<strong>linea 7</strong> asignamos valor p a i esto es solo dentro del while<br />
<strong>linea 8</strong> no mamen es mucho escribir a si que razonen!!<br />
hay muchas maneras a si que podemos mejorar ejemplo eso de multplicar *1.0 espero que les sirva no dejen darle Me gusta a Como Programra!!!</p>
<pre class="prettyprint">numero=input("Ingrese numero: ")
numero=numero*1.0
if numero&gt;=0:
    p=numero
    i=0
    while i!=p:
    i=p
    p=(numero/p+p)/2
    print "Resultados es: ", p

else :
print "Numero incorrecto"</pre>
