---
layout: post
title:  Instalar Linux, Nginx, MySQL, PHP (LEMP) en Ubuntu 14.04
date:   2014-10-29 16:53:34
category: general
tags: [nginx, ubuntu, mysql, php]
---

<p>Empezare a compartir mis conocimiento sobre servidores y este sera mi primer tutorial, donde instalaremos servidor web Nginx, base de datos Mysql y PHP.</p>
<p>Este procedimiento es lo mismo en debian.</p>

<p><img class="aligncenter size-full wp-image-9439" src="/assets/lemp-nginx-mysql-php-ubuntu.jpg" alt="lemp-nginx-mysql-php-ubuntu" width="680" height="363" /></p>
<h3>Instalación de Nginx</h3>
<blockquote><p>sudo apt-get update<br />
sudo apt-get install nginx</p></blockquote>
<p>Si quieren Instalar la ultima versión estable de nginx (ignoran las anteriores lineas)</p>
<blockquote><p>sudo apt-get install python-software-properties</p>
<p>sudo add-apt-repository ppa:nginx/stable</p>
<p>sudo apt-get update</p>
<p>sudo apt-get install nginx</p></blockquote>
<p>Ahora veremos si funciona correctamente en su dirección de dominio o IP.</p>
<blockquote><p>http://dominio_o_IP</p></blockquote>
<p>Si te aparece la siguiente imagen esta todo bien :)</p>
<p><img class="aligncenter size-full wp-image-9435" src="/assets/nginx_instalar.png" alt="nginx_instalar" width="569" height="212" /></p>
<h3>Instalación de Mysql</h3>
<p>Ahora instalaremos base de datos Mysql con en la siguiente linea.</p>
<blockquote><p>sudo apt-get install mysql-server</p></blockquote>
<p>&nbsp;</p>
<p>Se le solicitará que facilite una contraseña de root para MySQL.</p>
<p>La base de datos MySQL ya está instalado, pero su configuración aún no es exactamente completa.</p>
<p>En primer lugar, tenemos que decirle a MySQL que genere la estructura de directorios que necesita para almacenar sus bases de datos e información. Podemos hacer esto escribiendo:</p>
<blockquote><p>sudo mysql_install_db</p></blockquote>
<p>Ahora con la siguiente linea pediremos una configuración de seguridad que son opcionales pero que nos servirá para asegurar el servidor.</p>
<blockquote><p>sudo mysql_secure_installation</p></blockquote>
<p>Le pedirá introducir la contraseña de root de MySQL que haya seleccionado durante la instalación.</p>
<p>A continuación, se le preguntará si desea cambiar la contraseña. Si usted es feliz con su contraseña de root de MySQL, escribe "N" para no y pulsa "Enter". después se le pedirá que retire algunos usuarios de prueba y bases de datos. Usted sólo debe pulsar "ENTER" a través de estas instrucciones para eliminar la configuración predeterminada inseguras, no se preocupe mas adelante podrá configurar Mysql según lo que quiere.</p>
<p>Una vez que terminado al final les mostrara que fue instalado con éxito!</p>
<h3>Instalación de PHP</h3>
<p>Ahora tenemos Nginx como servidor web y base de datos MySQL, continuación instalaremos PHP.</p>
<p>Desde Nginx no contiene el procesamiento de PHP nativo como algunos otros servidores web, tendremos que instalar php5-fpm, lo que significa "fastCGI process manager".</p>
<p>Empezaremos con la siguiente linea:</p>
<blockquote><p>sudo apt-get install php5-fpm php5-mysql</p></blockquote>
<h5>Configure el procesador de PHP</h5>
<p>Ahora tenemos instalado PHP, pero tenemos que hacer un cambio de configuración ligera para hacer nuestra configuración más segura.</p>
<p>Abra el archivo de configuración de php5-fpm con la siguiente linea:</p>
<blockquote><p>sudo nano /etc/php5/fpm/php.ini</p></blockquote>
<p>Buscamos en este archivo la linea que contenga cgi.fix_pathinfo. si esta comentado lo descomentamos por predeterminado viene con un valor 1, lo cambio por 0, la linea tiene que estar de la siguiente forma:</p>
<pre class="prettyprint">cgi.fix_pathinfo=0</pre>
<p>Ahora reiniciarremos nuestro procesador de PHP escribiendo:</p>
<blockquote><p>sudo service php5-fpm restart</p></blockquote>
<p>Hasta ahora no sabemos si estamos bien, entonces vamos a configurar y ver si esta funciona correctamente.</p>
<h4>Configuración de nginx</h4>
<p>Vamos a cambiar algunas cosas para decirle a Nginx utilizar nuestro procesador de PHP para el contenido dinámico, algo parecido como Apache.</p>
<p>Entramos al siguiente archivo:</p>
<blockquote><p>sudo nano /etc/nginx/sites-available/default</p></blockquote>
<p>y nos mostrara como esto:</p>
<pre class="prettyprint">server {
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;

    root /usr/share/nginx/html;
    index index.html index.htm;

    server_name localhost;

    location / {
        try_files $uri $uri/ =404;
    }
}

</pre>
<p>Tenemos que hacer un cambio y nos tiene que quedar como esto:</p>

```javascript

    server {
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;

    root /usr/share/nginx/html;
    index index.php index.html index.htm;

    server_name server_domain_name_or_IP;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php5-fpm.sock;
	fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_index index.php;
        include fastcgi_params;
    }


}

```

<p>Reiniciaremos nginx:</p>
<blockquote><p>sudo service nginx restart</p></blockquote>
<p>Crearemos un archivo info.php, esto sera para que nos muestre todas las instalaciones que tenemos</p>
<blockquote><p>sudo nano /usr/share/nginx/html/info.php</p></blockquote>
<p>Ahora insertemos este código php:</p>
<pre class="prettyprint">&lt;?php
phpinfo();
?&gt;</pre>
<p>y lo guardamos Ctrl + x para salir y luego YES para que se guarde.</p>
<p>abrimos nuestro navegador entraremos a nuestra dirección con el nombre de dominio o ip:</p>
<blockquote><p>http://dominio_o_IP/info.php</p></blockquote>
<p>Si esta todo bien nos mostrara de esta forma :</p>
<p><img class="aligncenter size-full wp-image-9440" src="/assets/php_info.png" alt="php_info" width="612" height="622" /></p>
<p>si quieren eliminar el archivo info.php es con el comando rm :</p>
<blockquote><p>sudo rm /usr/share/nginx/html/info.php</p></blockquote>
<p>&nbsp;</p>
<h4 style="text-align: center;">Videotutorial</h4>
<p><iframe src="//www.youtube.com/embed/cRN7EnRhBJI" width="100%" height="450" frameborder="0" allowfullscreen="allowfullscreen"></iframe><br />
Y listo! espero que les sirva y saludos :)</p>
<p>&nbsp;</p>
