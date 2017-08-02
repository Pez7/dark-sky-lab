var farToCell = function(tempAct){
				var calculo = (tempAct - 32)*5/9;
				var celcius = calculo.toFixed(1) + '°';

					return celcius;
			}
$(document).ready(function() {
	$(".button-collapse").sideNav();

	$.ajax({
		url: 'https://api.darksky.net/forecast/6b3cb83cc70e837938b8e83d322579b5/-33.45694,-70.64827',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(data) {
		console.log(data);

		var tempAct = data.currently.apparentTemperature;
		var wind = data.currently.windSpeed;
		var humidity = data.currently.humidity;
		var uvIndex = data.currently.uvIndex;
		var pressure = data.currently.pressure;
		var icon = data.currently.icon;
		var zone = data.timezone;
		var mindiasig = data.daily.data[1].temperatureMin;
		var mindia2 = data.daily.data[2].temperatureMin;
		var mindia3 = data.daily.data[3].temperatureMin;
		var mindia4 = data.daily.data[4].temperatureMin;
		var mindia5 = data.daily.data[5].temperatureMin;
		var mindia6 = data.daily.data[6].temperatureMin;
		var mindia7 = data.daily.data[7].temperatureMin;
		var maxdiasig = data.daily.data[1].temperatureMax;
		var maxdia2 = data.daily.data[2].temperatureMax;
		var maxdia3 = data.daily.data[3].temperatureMax;
		var maxdia4 = data.daily.data[4].temperatureMax;
		var maxdia5 = data.daily.data[5].temperatureMax;
		var maxdia6 = data.daily.data[6].temperatureMax;
		var maxdia7 = data.daily.data[7].temperatureMax;

			$('#zone').append(zone);
			$('#current').append(farToCell(tempAct));
			$('#wind').append(wind +'m/s');
			$('#humidity').append(humidity + '%');
			$('#uv-index').append(uvIndex);
			$('#pressure').append(pressure);
			$('#temp-diasig').append('<p>' + farToCell(mindiasig) + " - " + farToCell(maxdiasig)+'</p>');
			$('#temp-dia2').append('<p>' + farToCell(mindia2) + " - " + farToCell(maxdia2)+'</p>');
			$('#temp-dia3').append('<p>' + farToCell(mindia3) + " - " + farToCell(maxdia3)+'</p>');
			$('#temp-dia4').append('<p>' + farToCell(mindia4) + " - " + farToCell(maxdia4)+'</p>'); 
			$('#temp-dia5').append('<p>' + farToCell(mindia5) + " - " + farToCell(maxdia5)+'</p>');
			$('#temp-dia6').append('<p>' + farToCell(mindia6) + " - " + farToCell(maxdia6)+'</p>');
			$('#temp-dia7').append('<p>' + farToCell(mindia7) + " - " + farToCell(maxdia7)+'</p>');

	if (icon == weather[0]) {
			$('#img-act').append('<img src="assets/iconos/1498814593_sun.png" alt="">');
		}
	if (icon == weather[1]) {
			$('#img-act').append('<img src="assets/iconos/1498814620_moon.png" alt="">')
		}
	if (icon == weather[2]) {
			$('#img-act').append('<img src="assets/iconos/1498814603_rain.png" alt="">')
		}
	if (icon == weather[3]) {
			$('#img-act').append('<img src="assets/iconos/1498814581_snowflake.png" alt="">')
		}
	if (icon == weather[4]) {
			$('#img-act').append('<img src="assets/iconos/1498814590_cloud_snow.png" alt="">')
		}
	if (icon == weather[5]) {
			$('#img-act').append('<img src="assets/iconos/1498814616_cloud.png" alt="">')
		}
	if (icon == weather[6]) {
			$('#img-act').append('<img src="assets/iconos/1498814616_cloud.png" alt="">')
		}
	if (icon == weather[7]) {
			$('#img-act').append('<img src="assets/iconos/1498814616_cloud.png" alt="">')
		}
	if (icon == weather[8]) {
			$('#img-act').append('<img src="assets/iconos/1498814609_sun_simple_cloudy.png" alt="">')
		}
	if (icon == weather[9]) {
			$('#img-act').append('<img src="assets/iconos/1498814625_moon_cloudy.png" alt="">')
		}




	})
	.fail(function() {
		console.log("error");
	})
	
	
});