---
layout: post
title: Crear menú en C# (Sharp) Consola + Código
date: 2013-01-24 16:36:16
categories: general
tags: [csharp]
---
<p><strong>¿Como crear menús en C# (Sharp)?</strong></p>
<p>Es muy importante saber crear un menú ya que su uso es muy frecuente para tener opciones de ingreso por teclado.</p>
<p>Para los que recién están empezando a programar siempre empiezan  con <strong>Aplicación de Consola</strong> y Luego si ya dominas programar en consola te pasar a programar en <strong>Aplicación de windows Form</strong>.</p>

<p>Aquí les dejo dos Ejemplos el primero es mas sencillo y el segundo un poco mas complicado pero no nada difícil, bueno veamos:</p>
<p><!--more--></p>
<p><strong>Primer Ejemplo</strong></p>
<p>Quiero crear un menú para hacer una simple calculadora  que ejecute el programa y que salga esto pantalla:</p>
<p><strong>Elige una opción.</strong></p>
<p><strong>1º) Suma</strong></p>
<p><strong>2º) Resta</strong></p>
<p><strong>3º) Multiplicación</strong></p>
<p><strong>4º) División</strong></p>
<p>Ejemplo Código Menú en C# (Sharp)</p>
<p>No olviden el condigo tiene que estar dentro del <strong>Main</strong> pero no siempre también podes utilizar en varias formas ejemplo dentro de metodos solo cuestión de practicar :)</p>
<pre class="prettyprint" title="Menú en C#">Console.Write("1º) Suma" + "\n" + "2º) Resta" + "\n" + "3º) Multiplicación" + "\n" + "4º) División" + "\n");
            Console.Write("Seleccione una opción: ");

            switch (Console.Read())
            {
                case '1': Console.Write("Suma..");
                    // Continuar lógica y extraer métodos //
                    break;
                case '2': Console.Write("Resta..");
                    // Continuar lógica y extraer métodos //
                    break;
                case '3': Console.Write("Multiplicación..");
                    // Continuar lógica y extraer métodos //
                    break;
                case '4': Console.Write("División..");
                    // Continuar lógica y extraer métodos //
                    break;
            } 
            Console.ReadKey();</pre>
<p><a href="http://www.comoprogramar.org/calculadora-en-c-sharp/"><strong> Ver código implementado de la Calculadora.</strong></a></p>
<p><strong> Segundo ejemplo</strong></p>
<p>otro ejemplo crear de otro modo el Menú en forma ordenada, con color y mas opciones.</p>
<p>Ejemplo Código Menú en C# (Sharp)</p>
<pre class="prettyprint" title="Código C#">ConsoleKeyInfo op;

            do
            {
                Console.Clear(); //Limpiar la pantalla
                Console.WriteLine("\t\t\t\tMenú - www.comoprogramar.org\n");
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write("[A]Agregar\t");
                Console.Write("[E]Eliminar\t");
                Console.Write("[B]Buscar\t");
                Console.Write("[Esc]Salir\t\n\n");
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("Seleccione opcion...");
                op = Console.ReadKey(true);//Que no muestre la tecla señalada

                //métodos son acciones, las propiedades son valores
                switch (op.Key)
                {
                    case ConsoleKey.A:
                        Console.WriteLine("Ud seleccionó la opción Agregar");
                        Console.Write("Presione una tecla para continuar...");
                        Console.ReadKey();
                        break;

                    case ConsoleKey.E:
                        Console.WriteLine("Ud seleccionó la opción Eliminar");
                        Console.Write("Presione una tecla para continuar...");
                        Console.ReadKey();
                        break;

                    case ConsoleKey.B:
                        Console.WriteLine("Ud seleccionó la opción Buscar");
                        Console.Write("Presione una tecla para continuar...");
                        Console.ReadKey();
                        break;

                    case ConsoleKey.Escape:
                        Console.WriteLine("Chao");

                        break;
                }
            } while (op.Key != ConsoleKey.Escape);</pre>
<p>Aquí la imagen del segundo ejemplo:</p>
<p><a href="http://www.comoprogramar.org/wp-content/uploads/2013/01/menu-en-c-sharp.jpg"><img class="aligncenter size-full wp-image-447" title="menu en c# sharp" alt="menu en c# sharp" src="/assets/menu-en-c-sharp.jpg" width="500" height="256" /></a></p>
