var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(function(){prettify();}, 1000);
function prettify(){
  var backgroundUrl = "https://raw.githubusercontent.com/vav17/PrettyWhatsappWeb/master/img/vav17-pretty-whatsapp-background-github.jpg";
  $(".app-wrapper").css('background-image', 'url("' + backgroundUrl + '")');
  $('head').append('<style>.app-wrapper:before{height: 0px !important;}</style>');
  $(".pane-chat").css('background-image', 'none');
  $('#main').css('background', 'none');
  $(".pane-body").css('background-color', 'rgba(255,255,255,0.0001)');
  $(".pane-chat").css('background-color', 'rgba(255,255,255,0.0001)');
}
