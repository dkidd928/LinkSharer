!function(){var e="",a="",o="";switch(window.location.hostname){case"www.ebay.com":a=window.location.pathname.split("/")[3],e="/itm/",o="ebay.com";break;case"www.youtube.com":urlParams=new URLSearchParams(window.location.search),a=urlParams.get("v"),e="/",o="youtu.be"}var t=document.createElement("input");t.value=o+e+a,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.parentNode.removeChild(t)}();