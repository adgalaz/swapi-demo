
$('img').click(function(){
	$('.modal-content').empty()
	for(var i = 0; i <= 87; i++){
		fetch(`https://swapi.co/api/people/${i}`)
		.then(response => response.json())
		.then(data => {
		if(data.name === $(this).attr('alt')){
			$('.modal-content').append(`<p><strong>Nombre:</strong> ${data.name}</p><br><p><strong>Gender:</strong> ${data.gender}</p><br><p><strong>Birth Year:</strong> ${data.birth_year}</p><br><p><strong>Height:</strong> ${data.height}</p><br><p><strong>Mass:</strong> ${data.mass}</p><br><p><strong>Hair Color:</strong> ${data.hair_color}</p><br><p><strong>Skin Color:</strong> ${data.skin_color}</p><br><p><strong>Eye Color:</strong> ${data.eye_color}</p><br>`) 
		}
		})
	}
})



   