$(document).ready(function(){

  var ponto = [];

  //Calcula coordenadas do centro dos círculos e grava no array ponto
  function coordenadas(){
  $( ".infografico li" ).each(function() {
    var posicao = $(this).position();
    var coord_x = posicao.left;
    var coord_y = posicao.top;
    var altura = $(this).outerHeight();
    var largura =  $(this).outerWidth();
    var centro_x = coord_x + largura/2;
    var centro_y = coord_y + altura/2;
    var centro_x_inteiro = centro_x.toFixed();
    var centro_y_inteiro = centro_y.toFixed();
    ponto.push(centro_x_inteiro + "," + centro_y_inteiro);
  });
  }
  //Atualiza coordenadas
  function novasCoordenadas(){
    ponto = [];
    coordenadas();
  }

  function points() {
    // Coordenadas para cada linha
    var linha1 = ponto[1] + " " + ponto[2] + " " + ponto[5] + " " + ponto[4] + " " + ponto[3];
    var linha2 = ponto[1] + " " + ponto[0] + " " + ponto[2];
    var linha3 = ponto[3] + " " + ponto[0] + " " + ponto[5];
    var linha4 = ponto[1] + " " + ponto[0] + " " + ponto[2] + " " + ponto[3] + " " + ponto[4] + " " + ponto[5];
    //passa coordenadas para os svg
    document.getElementById("linha-1").setAttribute("points", linha1);
    document.getElementById("linha-2").setAttribute("points", linha2);
    document.getElementById("linha-3").setAttribute("points", linha3);
    document.getElementById("linha-4").setAttribute("points", linha4);
  }
  // function zerapontos(){
  //   document.getElementById("linha-1").removeAttribute("points");
  //   document.getElementById("linha-2").removeAttribute("points");
  //   document.getElementById("linha-3").removeAttribute("points");
  //   document.getElementById("linha-4").removeAttribute("points");
  //   document.getElementById("linha-5").removeAttribute("points");
  // }

  coordenadas();
  points();

  $( window ).resize(function(){
    $.when(novasCoordenadas()).then(points());
    });



  /////////////////////////////////////////////////////

  // Controle modal
  $(".infografico li").click(function(){
    // $(".infografico").toggleClass("blur")
  })


    // Expande automaticamente a textarea
    // function autoheight(a) {
    //   if (!$(a).prop('scrollTop')) {
    //       do {
    //           var b = $(a).prop('scrollHeight');
    //           var h = $(a).height();
    //           $(a).height(h - 5);
    //       }
    //       while (b && (b != $(a).prop('scrollHeight')));
    //   };
    //   $(a).height($(a).prop('scrollHeight') + 20);
    // }

    function autosize(isto) {
      setTimeout(function(isto) {
        isto.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        isto.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }

    // $("textarea").keyup(function (e) {
    //   autoheight(this);
    //   console.log("keyup!")
    // });
    $("form textarea").on('keydown', function() {
      console.log("keydown");
      autosize($(this));
    });

    // Pausa o vídeo ao fechar o modal
    $(".modal").on("hidden.bs.modal", function () {
      console.log("pausae!");
      $('.videosmodal').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
      });
    });


});
