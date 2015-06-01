---
layout: post
title: Ejemplo Calculadora en C# (Sharp) Consola y Código
date: 2013-01-27 21:29:09
categories: general
tags: [csharp]
---
<p>Ejemplo una calculadora simple en C# (Sharp) Aplicación Consola + Código.</p>
<p>Para recién entran a mundo de la programación les dejo el código, Creamos un menú y luego los método ya que esta devolverá un valor de las operaciones matemáticas.</p>

<p>Primero no pide ingresar los valores</p>
<p>Luego</p>
<p>Eliges una opción.</p>
<p>1º) Suma</p>
<p>2º) Resta</p>
<p>3º) Multiplicación</p>
<p>4º) División</p>
<p><!--more--></p>
<p>Y después nos imprimirá la respuesta.</p>
<pre class="prettyprint">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace calculadora
{
    class Program
    {
        //Metodos para devolver un valor

        static int Suma(int a, int b) 
        {
            int suma = a + b;
            return suma;
        }
        static int Resta(int a, int b)
        {
            int resta = a - b;
            return resta;
        }
        static int Multi(int a, int b)
        {
            int multi = a * b;
            return multi;
        }
        static int Division(int a, int b)
        {
            int divi = a / b;
            return divi;
        }
        // Main el principal
        static void Main(string[] args)
        {

            int a, b;
            Console.Write("INGRESE PRIMER VALOR: ");
            a = int.Parse(Console.ReadLine());
            Console.Write("INGRESE SEGUNDO VALOR: ");
            b = int.Parse(Console.ReadLine());

            Console.Write("1º) Suma" + "\n" + "2º) Resta" + "\n" + "3º) Multiplicación" + "\n" + "4º) División" + "&lt;strong&gt;\n");
            Console.Write("Seleccione una opción: "); 

                switch (Console.Read()) { 
                    case '1': Console.Write("Suma = " + Suma(a,b));
                    // Continuar lógica y extraer métodos //
                    break; case '2': Console.Write("Resta = " + Resta(a,b)); 
                    // Continuar lógica y extraer métodos // 
                    break; case '3': Console.Write("Multiplicación = " + Multi(a,b));
                    // Continuar lógica y extraer métodos // 
                    break; case '4': Console.Write("División = " + Division(a,b));
                    // Continuar lógica y extraer métodos // 
                    break; } Console.ReadKey(); // Un pausee para presionar la tecla
        }
    }
}</pre>
<p>&nbsp;</p>
