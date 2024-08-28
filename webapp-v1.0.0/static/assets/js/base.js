
/***************************************** FUNCTIONS *****************************************/

//Card CNPJ-->
var cnpj = '62173620008750';
var area = document.getElementById('escreverCnpj');
var form = document.getElementById('formularioCnpj');
form.addEventListener('submit', function(e){
    e.preventDefault();
    cnpj = document.getElementById('cnpj').value;
    console.log(cnpj);
    jQuery.ajax({
        //'helper-api-dotnet-06.fly.dev/cnpj/completo/'+cep
        url:'https://api.cnpja.com/office/'+ cnpj,
        type: 'GET',
        data:{},
        headers: {'Authorization': 'b43ce2c8-703c-427d-9ebc-a1d895c0e6b7-8b0703e5-b5b4-4c27-8550-287aa797af63'},
        success:  function(response){
            console.log(response);
            
            // document.getElementById("escrever").innerHTML = response['bairro'];
            
            
        }
    });
});

//Card CPF-->
var cep = '01001-000';
var area = document.getElementById('escreverCep');
var formcep = document.getElementById('formularioCep');
formcep.addEventListener('submit', function(e){
    e.preventDefault();
    cep = document.getElementById('cep').value;
    console.log(cep);
    jQuery.ajax({
        //'helper-api-dotnet-06.fly.dev/Cep/'+cep
        url:'https://viacep.com.br/ws/'+ cep + '/json/',
        type: 'GET',
        data:{},
        headers: {},
        success:  function(response){
            console.log(response);
            
            document.getElementById("escrever").innerHTML = response['bairro'];
            
            
        }
    });
});
/***************************************** PAGES *****************************************/

