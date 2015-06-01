---
layout: post
title: 4 Ejemplos en C# (sharp) en aplicación consola + Codigos
date: 2013-02-17 18:42:21
categories: general
tags: [csharp]
---
<p><strong>1)</strong> Un hombre desea saber cuanto dinero se genera por concepto de intereses sobre la<br />
cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre<br />

y cuando estos excedan a S/.7000, y en ese caso desea saber cuanto dinero tendrá<br />
finalmente en su cuenta.<!--more--></p>
<p>&nbsp;</p>
<pre class="prettyprint">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ejercicio01
{
    class Hombre
    {
        private string nombre;
        private float dinero;
        public void Inicio()
        {
            Console.WriteLine("---------BANCO COMOPROGRAMAR.ORG--------");
            Console.WriteLine("-----------------------------");
            Console.WriteLine("INGRESE SU NOMBRE: ");
            nombre = Console.ReadLine();
            Console.WriteLine("INGRESE SU MONTO DINERO; ");
            dinero = float.Parse(Console.ReadLine());
            Console.Clear();

        }
        public void Imprimir()
        {
            Console.WriteLine("---------BANCO COMOPROGRAMAR.ORG--------");
            Console.WriteLine("-----------------------------");

            Console.WriteLine("NOMBRE:    " + nombre);

            if (dinero &gt; 7000)
            {
                Console.WriteLine("USTED NO PUEDE EXCEDER EL MONTO DE S/ 7000");
            }
            else
            {
                Console.WriteLine("INVERSION: " + dinero);
            }
            Console.ReadLine();

        }
        static void Main(string[] args) 
        {

            Hombre per = new Hombre();
            per.Inicio();
            per.Imprimir();

        }
    }
}</pre>
<p>&nbsp;</p>
<p><strong>2)</strong> En un almacén se hace un 20% de descuento a los clientes cuya compra supere los<br />
S/.1000 ¿ Cual será la cantidad que pagara una persona por su compra?</p>
<p>&nbsp;</p>
<pre class="prettyprint">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ejercicios02
{
    class Cliente
    {
        private float descuento;
        private float precio;
        public void Inicio()
        {
            Console.WriteLine("INGRESE PRECIO: ");
            precio = float.Parse(Console.ReadLine());
            Console.Clear();

        }
        public void Descuento()
        {
            if (precio &gt; 1000)
            {
                float res = (precio * 20) / 100;
                descuento = precio - res;
                Console.WriteLine("--------TIENDA KEDINN -------");
                Console.WriteLine("DESCUENTO DEL 20% POR SUPERAR S/1000");
                Console.WriteLine("PRECIO ES: " + descuento);
                Console.ReadLine();
            }
            else 
            {
                Console.WriteLine("--------TIENDA KEDINN -------");

                Console.WriteLine("PRECIO ES: " + precio);
                Console.ReadLine();

            }
            Console.ReadKey();

        }
        static void Main(string[] args)
        {
            Console.WriteLine("--------TIENDA KEDINN -------");
            Cliente clie = new Cliente();
            clie.Inicio();
            clie.Descuento();

        }

    }
}</pre>
<p>&nbsp;</p>
<p><strong>3)</strong> Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente.<br />
manera:<br />
- Si trabaja 40 horas o menos se le paga S/.16 por hora<br />
- Si trabaja mas de 40 horas se le paga S/.16 por cada una de las primeras 40<br />
horas y S/.20 por cada hora extra.</p>
<p>&nbsp;</p>
<pre class="prettyprint">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ejercicio3
{
    class Camisas
    {
        int camisas;
        float precio;
        public void Ingresar() 
        {
            Console.WriteLine("INGRESE NUMERO DE CAMISAS");
            camisas = int.Parse(Console.ReadLine());
            Console.WriteLine("INGRESE PRECIO DE LAS CAMISAS");
            precio = float.Parse(Console.ReadLine());
        }
        public void Trabajo()
        {
            if (camisas &gt;= 3)
            {
                float a = (precio * 20) / 100;
                float b = precio - a;
                Console.WriteLine("DESCUENTO 20% PRECIO ES:  "+ b);

            }
            else 
            {
                float a = (precio * 01) / 100;
                float b = precio - a;
                Console.WriteLine("DESCUENTO 20% PRECIO ES:  " + b);
            }
            Console.ReadKey();
        }
        static void Main(string[] args)
        {
            Camisas sem = new Camisas();
            sem.Ingresar();
            sem.Trabajo();

        }
    }
}</pre>
<p>&nbsp;</p>
<p><strong>4)</strong> Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran<br />
tres camisas o mas se aplica un descuento del 20% sobre el total de la compra y si son<br />
menos de tres camisas un descuento del 10%</p>
<pre class="prettyprint">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ejercicio3
{
    class Camisas
    {

        float precio;
        public void Ingresar() 
        {
            Console.WriteLine("-----EMPRESA FAEMAS-----");

            Console.WriteLine("INGRESE PRECIO DE LAS CAMISAS");
            precio = float.Parse(Console.ReadLine());
        }
        public void Trabajo()
        {
            Console.WriteLine("-----EMPRESA FAEMAS-----");
            if (precio &gt;= 500000)
            {

                Console.WriteLine("la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de la compra, pedir prestado al banco un 30% y el resto lo pagara solicitando un crédito al fabricante ");

            }
            else 
            {

                Console.WriteLine("la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al fabricante.  " );
            }
            Console.ReadKey();
        }
        static void Main(string[] args)
        {
            Camisas sem = new Camisas();

            sem.Ingresar();
            sem.Trabajo();

        }
    }
}</pre>
<p>&nbsp;</p>
