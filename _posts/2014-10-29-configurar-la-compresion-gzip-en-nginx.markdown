---
layout: post
title: Configurar la compresión Gzip en Nginx
date: 2014-10-29 22:36:49
category: general
tags: [nginx]
---
<p>Una de las cosas importantes para nuestro sitio web es optimizar la velocidad de carga, google facilita la herramienta <a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a> que nos permite verificar el estado de optimización de nuestro sitio lo correcto debería estar 70/100 para adelante, en fin ahora les mostrare un plus para optimizar el servidor Nginx con HttpGzipModule.</p>

<p>aprovechando, otra manera que es uno de los mas comunes es minificar archivos html, javascript y css es con <a href="https://github.com/pagespeed/ngx_pagespeed" target="_blank">ngx_pagespeed</a> para nuestro servidor nginx, muy bueno recomendado.</p>
<h4>¿Qué es Http-Gzip?</h4>
<p>HttpGzip es un módulo de Nginx  que se encarga de la compresión y descompresión "al vuelo" de ficheros. Esto se utiliza bastante para mejorar la carga de la web, no voy a entrar a detalles.</p>
<p>para otros servidores:</p>
<ul>
<li>Apache:  <a href="http://httpd.apache.org/docs/current/mod/mod_deflate.html" target="_blank">mod_deflate</a></li>
<li>Nginx: <a href="http://wiki.nginx.org/HttpGzipModule" target="_blank">HttpGzipModule</a></li>
<li>IIS: <a href="http://technet.microsoft.com/en-us/library/cc771003(v=WS.10).aspx" target="_blank">configurar la compresión HTTP</a></li>
</ul>
<p>&nbsp;</p>
<p>Empezamos, como todo módulo tiene unas opciones de configuración que conviene saber para aplicarlas según nuestras necesidades.</p>
<ul>
<li><strong>gzip_types</strong>: se indica los tipos de archivos a tratar.</li>
<li><strong>gzip_disable</strong>: permite deshabilitar la compresión para determinados User-Agents.</li>
<li><strong>gzip_comp_level</strong>: nivel de compresión (0 mínimo, 9 máximo).</li>
<li><strong>gzip_vary</strong>: activa la respuesta "Vary: Accept-Encoding" en la cabecera.</li>
<li><strong>gzip_proxied</strong>: permite la configuración de compresión a través de un proxy.</li>
<li><strong>gzip_buffers</strong>: configuración del buffer.</li>
</ul>
<p>para activar  y configurar del módulo se hace cambios dentro de  <strong>http </strong>del archivo  de <strong>NGINX</strong>.</p>
<p>abrimos el archivo nginx.conf</p>
<blockquote><p>sudo vi /etc/nginx/nginx.conf</p></blockquote>
<p>Dentro del archivo buscaremos las lineas que contenga gzip dentro de http { y lo descomentamos, tendría que estar algo como:</p>
<pre class="prettyprint">http {

         gzip on;
         gzip_disable "msie6";
          gzip_vary on;
          gzip_proxied any;
          gzip_comp_level 6;
          gzip_buffers 16 8k;
          gzip_http_version 1.1;
          gzip_types text/plain text/css application/json application/javascrip$

}</pre>
<p>reiniciaremos el servidor</p>
<blockquote><p>service nginx restart</p></blockquote>
<p>Eso es todo espero que miren la diferencia con la herramienta pagespeed, Saludos :)</p>
