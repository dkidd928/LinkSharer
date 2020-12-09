(function(){var hostname = window.location.hostname;
  var pathname = "";
  var identifier = "";
  var shorthost = "";

  switch(hostname) {
    case "www.ebay.com":
      identifier = window.location.pathname.split("/")[3];
      pathname = "/itm/";
      shorthost = "ebay.com"
      break;
    case "www.youtube.com":
      urlParams = new URLSearchParams(window.location.search);
      identifier = urlParams.get('v');
      pathname = "/"
      shorthost = "youtu.be";
  }

  var input = document.createElement("input");
  input.value = shorthost + pathname + identifier;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
})();