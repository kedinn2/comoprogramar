---
layout: post
title: 16 Ejemplos de Python + Códigos
date: 2013-02-22 00:49:33
categories: general
tags: [python]
---
<p><strong>Bueno aqui les dejo 16 ejemplos o ejercicios sencillos en el lenguaje Phyton con sus Códigos recuerden no es copiar es practicar sobre todo entender bien de que trata los ejercicios y sus códigos. :)</strong></p>
<p><strong>1. Programa que imprima los 25 primeros numeros naturales</strong></p>

<div>
<pre class="prettyprint">###Programa que imprima los 25 primeros numeros naturales
n = 1
while n &lt;= 25: 
    print n,
    n += 1</pre>
<p><!--more-->2. <strong>Imprimir los numeros impares desde el 1 al 25, ambos inclusive</strong></p>
</div>
<div>
<pre class="prettyprint">###Imprimir los numeros impares desde el 1 al 25, ambos inclusive
n = 1
h = ''
while n &lt;= 25:
    if n%2 != 0:
        h += ' %i' % n
    n += 1
print h</pre>
<p>&nbsp;</p>
</div>
<p><strong>3. Imprimir los numeros pares desde el 40 hasta el 60, ambos inclusive</strong></p>
<pre class="prettyprint">###Imprimir los numeros pares desde el 40 hasta el 60, ambos inclusive
n = 40
h = ''
while n &lt;= 60:
    if n%2 == 0:
        h += ' %i' % n
    n += 1
print h</pre>
<p>&nbsp;</p>
<p><strong>4. Imprimir los numeros 48, 52, 56, ..., 120</strong></p>
<pre class="prettyprint">###Imprimir los numeros 48, 52, 56, ..., 120
n = 48
h = ''
while n &lt;= 120:
    h += ' %i' % n
    n += 4
print h</pre>
<p>&nbsp;</p>
<p><strong>5. Calcular e imprimir la suma 1+2+3+4+5+...+50</strong></p>
<pre class="prettyprint">###Calcular e imprimir la suma 1+2+3+4+5+...+50
n = 100
h = ''
while n &gt;= 20:
    h += ' %i' % n
    n -= 5
print h</pre>
<p>&nbsp;</p>
<p><strong>6. Calcular e imprimir la suma 1+2+3+4+5+...+50</strong></p>
<pre class="prettyprint">###Calcular e imprimir la suma 1+2+3+4+5+...+50
h = range(1, 51)
print sum(h) #con el comando sum se suma los numeros de una lista</pre>
<p>&nbsp;</p>
<p><strong>7. Calcular e imprimir el producto 1*2*3*4*5*...*20</strong></p>
<pre class="prettyprint">###Calcular e imprimir el producto 1*2*3*4*5*...*20
n = 1
h = 1
while n &lt;= 20:
    h *= n
    n += 1
print h</pre>
<p>&nbsp;</p>
<p><strong>8. Calcular e imprimir la suma 50+48+46+44+...+20</strong></p>
<pre class="prettyprint">###Calcular e imprimir la suma 50+48+46+44+...+20
n = 50
h = 0
while n &gt;= 20:
    h += n
    n -= 2
print h</pre>
<p>&nbsp;</p>
<p><strong>9. Programa que imprima los nuumeros impares desde el 100 hasta la unidad y calcule su suma n = 100</strong></p>
<pre class="prettyprint">###Programa que imprima los nuumeros impares desde el 100 hasta la unidad y calcule su suma
n = 100
h = 0
while n &gt;= 1:
    if n%2 != 0:
        print n,
        h += n
    n -= 1
print 'y su suma es: %i' % h</pre>
<p>&nbsp;</p>
<p><strong>10. Introducir un nuumero por teclado y decir si es par o impar</strong></p>
<pre class="prettyprint">### Introducir un nuumero por teclado y decir si es par o impar
h = input('Introduzca un numero: ')
if h%2 == 0:
    print 'Este numero es par'
else:
    print 'Este numero es impar'</pre>
<p>&nbsp;</p>
<p><strong>11. Imprimir los numeros del 1 al 100 y calcular la suma de todos los nuumeros pares por un lado, y por otro, la de los impares.</strong></p>
<pre class="prettyprint">##Imprimir los numeros del 1 al 100 y calcular la suma de todos los nuumeros 
###pares por un lado, y por otro, la de los impares.
n = 1
p = 0
i = 0
while n &lt;= 100:
    print n,
    if n%2 == 0:
        p += n
    else:
        i += n
    n += 1
print '\nLa suma de los pares es igual a %i' % p
print 'La suma de los impares es igual a %i' % i</pre>
<p>&nbsp;</p>
<p><strong>12. Introducir dos numeros por teclado. Imprimir los numeros que hay entre ellos comenzando por el mas pequeno. Contar cuantos hay y cuantos de ellos son pares. Calcular la suma de los pares</strong></p>
<pre class="prettyprint">##Introducir dos numeros por teclado. Imprimir los numeros que hay entre ellos 
###comenzando por el mas pequeno. Contar cuantos hay y cuantos de ellos son 
###pares. Calcular la suma de los pares
p = 0
cp = 0
c = 0
n = 0
h = 0
h1 = input('Primer numero: ')
h2 = input('Segundo numero: ') 
if h1 &gt; h2:
    n = h2
    h = h1
else:
    n = h1
    h = h2
while n &lt; h:
    n += 1
    if n == h:
        break
    c += 1
    print n,
    if n%2 == 0:
        cp += 1
        p += n
print '\nEntre % i y %i hay %i numeros siendo %i pares' % (h1, h2, c, cp)
print 'La suma de los pares es %i' % p</pre>
<p>&nbsp;</p>
<p><strong>13. Imprimir y contar los numeros multiplos de 3 que hay entre 1 y 100.</strong></p>
<pre class="prettyprint">### Imprimir y contar los numeros multiplos de 3 que hay entre 1 y 100.
n = 1
h = 0
while n &lt; 100:
    if n%3 == 0:
        print n,
        h += 1
    n += 1
print '\nEntre 1 y 100 hay %i numeros multiplos de 3' % h</pre>
<p>&nbsp;</p>
<p><strong>14. Imprimir, sumar y contar los numeros que son a la vez multiplos de 2 y de 3, que hay entre la unidad y un determinado numero introducido por el teclado.</strong></p>
<pre class="prettyprint">### Imprimir, sumar y contar los numeros que son a la vez multiplos de 2 y 
###de 3, que hay entre la unidad y un determinado numero introducido por el 
###teclado.
n = 1
num = input('Llegar hasta: ')
h = 0
suma = 0
while True:
    if 3*n &gt; num:
        break
    if (3*n)%2 == 0:
        print 3*n,
        h += 1
        suma += 3*n
    n += 1
print '\nEntre 1 y %i hay %i numeros multiplos de 3 y de 2' % (num, h)
print 'Dichos numeros suman %i' % suma</pre>
<p>&nbsp;</p>
<p><strong>15. Introducir dos valores A y B: Si A&gt;=B,</strong></p>
<p><strong> calcular e imprimir la suma 10+14+18+...+50  Si A/B&lt;=30, </strong></p>
<p><strong>calcular e imprimir el valor de (A^2+B^2)</strong></p>
<pre class="prettyprint">##Introducir dos valores A y B:
###Si A&gt;=B, calcular e imprimir la suma 10+14+18+...+50 
###Si A/B&lt;=30, calcular e imprimir el valor de (A^2+B^2)
a = input('Primer valor: ')
b = input('Segundo valor: ')
n = 10
suma = 0
sumas = 0
if a &gt;= b:
    while n &lt;= 50:
        suma += n
        n += 4
    print suma
if a/b &lt;= 30:
    sumas = (a**2+b**2)
    print sumas</pre>
<p>&nbsp;</p>
<p><strong>16. Introducir los valores A, B y C:  Si A/B&gt;30, </strong></p>
<p><strong>calcular e imprimir A/C * B^3      Si A/B&lt;=30, </strong></p>
<p><strong>calcular e imprimir 2^2+4^2+6^2+...+30^2</strong></p>
<pre class="prettyprint">##Introducir los valores A, B y C: 
###Si A/B&gt;30, calcular e imprimir A/C * B^3 
###Si A/B&lt;=30, calcular e imprimir 2^2+4^2+6^2+...+30^2
a = input('Primer valor: ')
b = input('Segundo valor: ')
c = input('Tercer valor: ')
n = 2
suma = 0
sumas = 0
if a/b &gt; 30:
    suma = a/c*b**3
    print suma
if a/b &lt;= 30:
    while n &lt;= 30:
        sumas += n**2
        n += 2
    print sumas</pre>
<p>&nbsp;</p>
