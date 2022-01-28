$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  function consultarCepAjax(){
    var cep = $('#cep').val();
    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data, status){
      var dadosCep = data
  
      $('#cidade').val(dadosCep.localidade)
      $('#logradouro').val(dadosCep.logradouro)
      $('#uf').val(dadosCep.uf)
    });
  }