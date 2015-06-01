---
layout: post
title: Introducción a Node.js
date: 2014-09-06 23:17:31
category: general
tags: [nodejs]
---
<p><span style="color: #4d4d4d;">Node.js es un entorno de programación que corre en el servidor basado en Javascript.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Como sabemos, Javascript es un lenguaje de programación ejecutado en el servidor por diferentes máquinas virtuales.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Node.js utiliza la máquina virtual de Google Chrome: V8 para su ejecución; es decir, tiene las mismas funcionalidades de Javascript que posee en el navegador de Google.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" />

<h3 style="text-align: center;"><img class="aligncenter size-full wp-image-9243" src="/assets/node.jpg" alt="node" width="680" height="363" /></h3>
<span style="color: #4d4d4d;">Lo primero a tener en cuenta cuando trabajamos en Node.js es que es un entorno que nos permite realizar aplicaciones en tiempo real. </span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Esto no lo permite Javascript al ser un lenguaje asíncrono, pero si tenemos un solo proceso síncrono en nuestro código, toda nuestra aplicación será síncrona.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Node.js es capaz de hacer todo lo que deseemos, pero en algunos puntos no se la llevara muy bien, siempre debemos enfocarnos en que su principal función es realizar aplicaciones en tiempo real.</span> <span style="color: #4d4d4d;">NPM (Node Package Modules) es el gestor de paquetes en Node.js por excelencia. Es de fácil uso, pensado para programadores.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">En NPM tenemos diversos comandos, el principal es “install” con el cual podemos instalar paquetes de manera global o local.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Entre lo que podemos hacer está: </span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">- Actualizar nuestro archivo package.json y/o instalar las dependencias que contiene este.</span><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">- Buscar paquetes</span><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">- En que ya viene incluido en la instalación de las últimas versiones de Node.js.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Su estructura es:</span></p>
<pre class="prettyprint">npm &lt;comando&gt;</pre>
<p><span style="color: #4d4d4d;">Para mas informacion consulta la pagina de npm: <a style="font-weight: 600; color: #0099cc;" href="http://npmjs.org/" target="_blank" rel="nofollow">http://npmjs.org</a></span></p>
<p>&nbsp;</p>
<h3>¿Qúe es el archivo package.json?</h3>
<p><span style="color: #4d4d4d;">Package.json será el archivo que identificara nuestro proyecto en este guardaremos el nombre de la aplicación, la versión y las dependencias de la siguiente forma.</span></p>
<pre class="prettyprint">{
    "name": "nombre de la app",
    "version": "0.0.1",
    "dependencies":
        "express": "*"
}</pre>
<p><span style="color: #4d4d4d;">En dependencies colocarás el nombre de la dependencia y la versión de la misma para que luego cuando pases tu proyecto a otro colaborador.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Él sólo tendrá que ejecutar en terminal:</span></p>
<pre class="prettyprint">npm install</pre>
<p><span style="color: #4d4d4d;">Y todas las dependencias se instalarán automágicamente.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">Ahora cada vez que instales una nueva dependencia deberás ejecutar el siguiente comando para que dicho archivo se actualice:</span></p>
<pre class="prettyprint">npm install  &lt;paquete&gt; --save</pre>
<p><span style="color: #4d4d4d;">Y cuando desees instalar un paquete de manera global, solo tendrás que hacer:</span></p>
<pre class="prettyprint">npm install -g &lt;paquete&gt;</pre>
<h3>niciando con node.js</h3>
<p><span style="color: #4d4d4d;">Para iniciar con node.js depues de haber creado nuestro package.json debemos crear el archivo Javascript que hara el papel del servidor, en este caso lo llamaremos server.js, pero el nombre no importa.</span></p>
<p>En este archivo importamos todas las dependencias  a usar y colocaremos toda la lógica que irá del lado del servidor, un ejemplo de este puede ser:</p>
<pre class="prettyprint">var express = require('express');</pre>
<pre class="prettyprint">var server = express();
 
server.get('/', function (req, res) {
           res.send('Hello World');
});
 
server.listen(3000);
console.log('Servidor corriendo en http://127.0.0.1:3000');</pre>
<p><span style="color: #4d4d4d;">Con este servidor le estamos diciendo a node que al recibir un request en la  url raíz del proyecto, devuelva un hola mundo; pero veamos de manera detallada para que sirve cada parte de nuestro código.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="font-weight: 600; color: #4d4d4d;">Require() </span><span style="color: #4d4d4d;">→ Con require(), le decimos a nuestro server que librerías Node vamos a cargar; librerías que previamente ya están en las dependencias de nuestro proyecto.</span><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;"> </span><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;">En nuestro servidor debemos definir qué hacer con las peticiones que llegan de los usuarios (GET - POST), en este caso usamos la ayuda de “Express.js”; si no se define qué hacer con las peticiones tendríamos un server corriendo que no hace nada.</span><br style="color: #4d4d4d;" /><span style="color: #4d4d4d;"> </span><br style="color: #4d4d4d;" /><span style="font-weight: 600; color: #4d4d4d;">.get()</span><span style="color: #4d4d4d;"> →  Le decimos al server que hacer cuando recibe una petición GET en el root de nuestra aplicación, por medio de funciones que siempre van a recibir como parámetros una petición del cliente (req) y una respuesta del servidor (res).</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="font-weight: 600; color: #4d4d4d;">res.send() </span><span style="color: #4d4d4d;">→ Le decimos que haga un response con la cadena “hola mundo”.</span><br style="color: #4d4d4d;" /><br style="color: #4d4d4d;" /><span style="font-weight: 600; color: #4d4d4d;">server.listen(xxxx) </span><span style="color: #4d4d4d;">→Le decimos al servidor el puerto en el que debe escuchar peticiones.</span></p>
