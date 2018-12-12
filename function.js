/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	function fnAjoutPanier(id){
                   $.ajax({
                        type: "GET",  // la méthode http à utiliser
                        url: "/Projet_Final/Achat/Acheter/"+id, // Construire l'url  
                        contentType: "application/text",
                        sync: true,                        
                        success: function(result){
                            $("#card"+id).remove();
                            fnAfficherPanierQuantite();
                            $( "#dialog" ).dialog( "open" );
                            $("#pDialog").text(result);
                        }, 
                        error : function(){alert("error")}

                    });
	}
	function fnAfficherPanierQuantite(){
                   $.ajax({
                        type: "GET",  // la méthode http à utiliser
                        url: "/Projet_Final/Achat/PanierCount", // Construire l'url  
                        contentType: "application/text",
                        sync: true,                        
                        success: function(result){
                            $("#panierCount").text(result);
                        }, 
                        error : function(){alert("error")}
                    });
	}
	function fnSupprimerElement(id){
                   $.ajax({
                        type: "GET",  // la méthode http à utiliser
                        url: "/Projet_Final/Achat/SupprimerElement/"+id, // Construire l'url  
                        contentType: "application/text",
                        sync: true,                        
                        success: function(result){
                            $("#cardPanier"+id).remove();
                            $("#dialogPanier" ).dialog( "open" );
                            $("#pDialogPanier").text(result);
                        }, 
                        error : function(){alert("error")}

                    });
	}
        
        function fnAjouterMontre(){            
        // la construction d'un objet montre
        var montre={'watchId':"0",
                    'brandName':$("#brandName").val(),
                    'modelName':$("#modelName").val(),
                    'watchPrice':$("#watchPrice").val(),
                    'watchImage':$("#watchImage").val(),
                    'watchQuantity':$("#watchQuantity").val()};

            
	$.ajax({
	type: $("#modelRegion").attr("method"), // Récupère la méthode d'envoi du formulaire, ici "POST"
	url: "/Projet_Final/Aministration/Ajouter", // Récupère l'url du script qui reçoit la requête, ici "/add"
	contentType: "application/json",
	data: JSON.stringify(montre), // la sérialisation du formulaire
	sync: true,
	success: function(result){alert(result);}, // Callback qui récupère la réponse du serveur
	error : function(xmlhtr,status,error){alert(status);}
	});
	
	return false;
        
	}
        $(document).ready(function(){
            
        $("#btnRecherche").click(function(){
            if ($("#inputRecherche").val().length == 0) {
                $("#inputRecherche").val(" ");
                $("#linkRecherche").attr("href","/Projet_Final/Home/Recherche/test");
            }else {
                $("#linkRecherche").attr("href","/Projet_Final/Home/Recherche/"+ $("#inputRecherche").val());
            }

        });
        });