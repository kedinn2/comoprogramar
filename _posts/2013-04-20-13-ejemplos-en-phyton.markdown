---
layout: post
title: 13 Ejemplos en Python
date: 2013-04-20 03:06:18
categories: general
tags: [python]
---
<p>Bueno les dejo unos ejercicios básicos en python, si tiene alguna duda o alguno de los ejercicios tiene un error simplemente lo comentan.</p>
<p>Les recuerdo que no copien primero resuelvan por ustedes mismo y luego puedan consulta para saber como se resuelve los problemas , espero que les sirva de ayuda hasta la próxima!!</p>

<p><!--more--></p>
<p><strong>1. Pedir dos números y decir si son iguales o no.</strong></p>
<pre class="prettyprint">primero = input()
segundo = input()
if (primero == segundo):
    print("si es igual")
else:
    print ("no es igual")</pre>
<p><strong>2. Pedir un número e indicar si es positivo o negativo.</strong></p>
<pre class="prettyprint">numero = input()
if (numero &gt; 0):
    print (" es positivo")
else:
    print("es negativo")</pre>
<p><strong>3. Pedir dos números y decir si uno es múltiplo del otro.</strong></p>
<pre class="prettyprint">numero01 = input()
numero02 = input()
if (numero01%numero02==0):
    print("es multiplo ")
else:
    print("no es multiplo")</pre>
<p><strong>4. Pedir dos números y decir cuál es el mayor.</strong></p>
<pre class="prettyprint">numero01 = input("peru")
numero02 = input("chile")
if (numero01 &gt; numero02):
    print ("peru es mayor que chile")
elif numero02&gt;numero01:
    print("chile es mayor que peru")
elif(numero01 == numero02 ):
    print("son iguales")</pre>
<p><strong>5. Pedir dos números y decir cuál es el mayor o si son iguales.</strong></p>
<pre class="prettyprint">numero01 = input("peru")
numero02 = input("chile")
if (numero01 &gt; numero02):
    print ("peru es mayor que chile")
elif numero02&gt;numero01:
    print("chile es mayor que peru")
elif(numero01 == numero02 ):
    print("son iguales")</pre>
<p><strong>6. Pedir dos números y mostrarlos ordenados de mayor a menor.</strong></p>
<pre class="prettyprint">numero01 = input()
numero02 = input()
if (numero01&gt;numero02):
    print numero01, " y ", numero02
else:
    print numero02, " y ", numero01</pre>
<p><strong>7. Pedir tres números y mostrarlos ordenados de mayor a menor.</strong></p>
<pre class="prettyprint">numero01 = input()
numero02 = input()
numero03 = input()
if (numero01&gt;numero02&gt;numero03):
    print numero01, " y ", numero02," y ",numero03
elif (numero01&gt;numero03&gt;numero02):
    print numero01, " y ", numero03," y ",numero02
elif (numero02&gt;numero01&gt;numero03):
    print numero02, " y ", numero01," y ",numero03
elif (numero02&gt;numero03&gt;numero01):
    print numero02, " y ", numero03," y ",numero01
elif (numero03&gt;numero01&gt;numero02):
    print numero03," y ",numero01," y ", numero02</pre>
<p><strong>8. Pedir una nota de 0 a 10 y mostrarla de la forma: “Insuficiente”, “Suficiente”, “Bien”. De 0 a 3 será “insuficiente”, de 4 a 6 “Suficiente” y de 6 a 10 “Bien”.</strong></p>
<pre class="prettyprint">nota = input()
if (nota &lt;= 3):
    print "insuficiente"
elif (nota &lt;= 6):
    print "Suficiente"
elif (nota&lt;=10):
    print "Bien"</pre>
<p><strong>9. Pedir el día, mes y año de una fecha e indicar si la fecha es correcta. Suponiendo todos los meses de 30 días. </strong></p>
<pre class="prettyprint">dia = input("dia 1: ")
mes = input("mes 1 : ")
ao = input("año 1: ")
if (dia &gt;=1 and dia &lt;= 30):
    if (mes &gt;=1 and mes &lt;= 12):
        if (ao != 0):
            print "FECHA CORRECTO" 
            pass
else:
    print "fecha incorecto"</pre>
<p><strong>10. Pedir dos fechas y mostrar el número de días que hay de diferencia. Suponiendo todos los meses de 30 días. </strong></p>
<pre class="prettyprint">dia1 = input("dia 1: ")
mes1 = input("mes 1 : ")
año1 = input("año 1: ")
dia2 = input("dia 2: ")
mes2 = input("mes 2: ")
año2 = input("año 2:")
dias = (dia2-dia1) + 30*(mes2-mes1) + 365(año2-año1)
print "Total de dias son: " dias</pre>
<p><strong>11. Pedir un número entero entre 0 y 10, y mostrar dicho número de la forma: “cero”, “uno”, “dos”, “tres”…</strong></p>
<pre class="prettyprint">numero = int(input("ingrese del 1 al 10"))
if(numero==1):
    print "uno"
elif(numero==2):
    print "dos"
elif(numero==3):
    print "tress"
elif(numero==4):
    print "cuatro"
elif(numero==5):
    print "cinco"
elif(numero==6):
    print "seiss"
elif(numero==7):
    print "sieree"
elif(numero==8):
    print "ochoo"
elif(numero==9):
    print "nueee"
elif(numero==10):
    print "diez"</pre>
<p><strong>12. Pedir 3 números y calcular la suma y multiplicación entre los tres números.</strong></p>
<pre class="prettyprint">num1 = input()
num2 = input()
num3 = input()
suma=num1+num2+num3
multi=num1*num2*num3
print "suma",suma
print "multipicacion", multi</pre>
<p><strong>13. Pedir 10 números, y que el programa me diga cuantos números ingresados fueron negativos.</strong></p>
<pre class="prettyprint">numero = 0
negativo = 0
amigo =0
while negativo!=10:
    numero = input("ingrese numero: ")
    negativo = negativo +1 
    if numero&lt;0:
        amigo = amigo +1
print "numeros negativos: ", amigo</pre>
<p><strong>15, Por ejemplo si el usuario ingresa de mes el programa dirá que hay error porque no existen más de 12 meses. Si ingresa números negativos también dará error.</strong></p>
<pre class="prettyprint">dia = input("dia 1: ")
mes = input("mes 1 : ")
ao = input("año 1: ")
if (dia &gt;=1 and dia &lt;= 30):
    if (mes &gt;=1 and mes &lt;= 12):
        if (ao != 0):
            print "FECHA CORRECTO"
            pass
else:
    print "fecha incorrecto"</pre>
