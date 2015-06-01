---
layout: post
title: Código detectar Móviles y Redireccionar Javascript
date: 2013-10-22 23:16:41
categories: general
tags: []
---
<p><img class="aligncenter size-full wp-image-1393" alt="web-moviles" src="/assets/web-moviles.jpg" width="419" height="362" /></p>
<p>En la actualidad el uso de los dispositivos móviles es bastante y sigue aumentando ya que nuestros sitios web tienes visitas por móviles y es el motivo de querer mejorar nuestros sitio web, estuve buscando información y buscar la forma que me permitiera redireccionar mi web a otro sitio compatible para móviles ejemplo:</p>

<p>www.nombreweb.com<br />
nos redireccione cuando abrimos con los dispositivos móviles a<br />
www.movil.nombreweb.com o www.miwebmovil.com<br />
comparto el código que esta en Javascript:</p>
<pre class="prettyprint">
var device = navigator.userAgent

if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
{
window.location = "http://www.miwebmovil.com/";

}
else
{

}</pre>
<p>Y si no quieren que se redireccione a un tipo móvil simplemente lo quitan<br />
Ejemplo no quiero redireccionar para Ipad entonces quito una parte del código, este es el actual</p>
<p>| device.match(/iPhone|iPad|iPod/i)|</p>
<p>y quitamos <strong>|iPad</strong> nos quedaría así</p>
<p>| device.match(/iPhone|iPod/i)|</p>
<p>igual manera para otros dispositivos.</p>
<p><span style="font-size: 13px; line-height: 19px;">Espero que les sirva no dejen de seguirnos :)</span></p>
