function buttonclickhandler() {
	var x = $("#cityname" ).val()
		var data = new URLSearchParams({
			access_key: '2c6f0844d9b757ef88ab7412f620185e',
			query: x,
			units: 'f'
		});
		var xhr = new XMLHttpRequest();

		xhr.open("GET", `http://api.weatherstack.com/current?${data}`, true);
			
		xhr.onload = function () {
			if (this.status === 200) {
				obj = JSON.parse(this.responseText);
				str = ""

				str += '<tr><td>' + obj.location.name +'</td><td>' +  obj.current.temperature ;
     
       	        $('#records_table').append(str);

			}
		}
	xhr.send();
}