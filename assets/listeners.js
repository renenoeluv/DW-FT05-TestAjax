$(document).ready(function(){
	$('#botoncito').click(function(){
		$.get('./procesar.php', function(data){
			alert("Los datitos son: "+ data);
				}
			)
		}
	)
}
)	





