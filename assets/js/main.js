var farToCell = function(tempAct){
				var calculo = (tempAct - 32)*5/9;
				var celcius = calculo.toFixed(1) + '°';

					return celcius;
			}
$(document).ready(function() {
	$(".button-collapse").sideNav();

	$.ajax({
		url: 'https://api.darksky.net/forecast/2e4093159b4c6795b02aed7e92aa915e/-33.45694,-70.64827',
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
			$('#zone').append(zone);
			$('#current').append(farToCell(tempAct));
			$('#wind').append(wind +'m/s');
			$('#humidity').append(humidity + '%');
			$('#uv-index').append(uvIndex);
			$('#pressure').append(pressure);

	if (icon == weather[0]) {
			$('#img-act').append('<img src="assets/iconos/1498814593_sun.png" alt="">')
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


		/*switch(farToCell(tempAct)){
			case 1:if(farToCell(tempAct) > 17){
				$('#img-act').append('<img src="assets/iconos/1498814593_sun.png" alt="">');
				break;
			};
			case 2:if (farToCell(tempAct) < 17 && farToCell(tempAct) > 14) {
				$('#img-act').append('<img src="assets/iconos/1498814600_sun_simple.png" alt="">');
				break;
			};
			case 3:if(farToCell(tempAct) < 13 && farToCell(tempAct) > 9){
				$('#img-act').append('<img src="assets/iconos/1498814586_sun_simple_cloudy_snow.png" alt="">');
				break;
			};
			case 4:if(farToCell(tempAct) < 8 && farToCell(tempAct) > 2){
				$('#img-act').append('<img src="assets/iconos/1498814590_cloud_snow.png" alt="">');
			};
			default: $('#img-act').append('<img src="assets/iconos/1498814593_sun.png" alt="">');

		};*/


	})
	.fail(function() {
		console.log("error");
	})
	
	
});