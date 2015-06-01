---
layout: post
title: Sucesión Fibonacci en Java
date: 2014-03-03 00:03:31
categories: general
tags: [java]
---

<p>Veremos <strong>cómo funciona la sucesión Fibonacci en Java</strong>.
En el Fibonacci los primeros elementos son 0,1,  para los siguientes elementos se obtienen sumando de los dos números anteriores, un ejemplo podemos ver: 0, 1, 1, 2, 3, 5, 8, 13, 21, 33, ........  y continua de la misma forma.</p>

En el siguiente ejemplo, pedimos que el usuario ingrese un número +positivo que sera elemento. Y luego nos mostrara los los resultados de la serie.
<pre class="prettyprint">public class Fibona {

 public static void main(String[] args) {
 int elemento = 0;
 String resultado;

 // Para que ingrese un número positivo el usuario .
 do {
 resultado = JOptionPane.showInputDialog("Escribe un número positivo.\n "
 + "Salir = -1");
 elemento = Integer.parseInt(resultado);

 } while ( elemento &lt; -1 &amp;&amp; elemento != -1);

 // Las variables para los números ant=anterior, act=actual y next+siguiente
 int ant = 0;
 int act = 1;
 int next = 1;

 //Imprimimos el 0.
 System.out.print("0, ");
 for (int i = 0; i &lt; elemento - 1; i++) {
 System.out.print(next + ", ");
 // Suma del actual con el anterior para tener el siguietne elemento
 next = act + ant;
 ant = act;
 act = next;
 }
 System.out.println();
 }
}</pre>
<p>Nos mostrara en la pantalla cuando el usuario ingrese numero 6.</p>
<pre>run:
0, 1, 1, 2, 3, 5, 
BUILD SUCCESSFUL (total time: 5 seconds)</pre>
