


$(function() {

            $('#light').on('click', function(){
	            //$('.light-img2').toggleClass('hide');
	            //document.getElementById("lightSrc").src = "img/Light1.jpg";

	            if (  $('#light').is(":checked")  ) {

	            	$('.lightchange').attr('src', 'img/light2.jpg');
	            } else {
	            	$('.lightchange').attr('src', 'img/light1.jpg');
	            }           

	            
            });

});



function touchRock() { 
	document.getElementById("rockSrc").src = "img/Gas2.jpg";
	document.getElementById('result').innerHTML = 'Превышено содержание газа! ';
}


function touchRock2() { 
	document.getElementById("rockSrc").src = "img/water.jpg";
	document.getElementById('result').innerHTML = 'Опасность ! В ванной комнате -потоп! ';
}

function touchRock3() { 
	document.getElementById("rockSrc").src = "img/fire.jpg";
	document.getElementById('result').innerHTML = 'Опасность ! Сработал датчик пожара! ';
}


function touchRock4() { 
	document.getElementById("rockSrc").src = "img/open.jpg";
	document.getElementById('result').innerHTML = 'Опасность ! Окно на кухне было открыто';
}

function touchRock5() { 
	document.getElementById("rockSrc").src = "img/motion.jpg";
	document.getElementById('result').innerHTML = 'Внимание ! Движение на заднем дворе! ';
}

function touchRock6() { 
	document.getElementById("rockSrc").src = "img/camera.jpg";
	document.getElementById('result').innerHTML = 'Внимание ! Движение на заднем дворе! ';
}


$('.thermometer-toggle').on('change',function() {
    
    var fillPercentage = $('.thermometer-toggle').val() / $('.thermometer-toggle').prop('max');
    
    var fillHeight = fillPercentage * ( $('#thermometer-top').height());

    console.log(fillPercentage);

    if ( fillPercentage > 0.5 ) {
    	$('.climat-box').css('background','url(img/climat2.jpg) center bottom');
    } else {
    	$('.climat-box').css('background','url(img/climat.jpg) center bottom');
    }
    
    $('#thermometer-fill').css('height', 12 + fillHeight);
    $('#thermometer-bottom span').text(Math.round(fillPercentage * 50));
    
});


$(function() {

            $('#control1').on('click', function(){
	            //$('.light-img2').toggleClass('hide');
	            //document.getElementById("lightSrc").src = "img/Light1.jpg";

	            if (  $('#control1').is(":checked")  ) {

	            	$('.control-box').css('background','url(img/control1.jpg) center bottom');
	            } else {
	            	$('.control-box').css('background','url(img/control.jpg) center bottom');
	            }        

	            
            });


               $('#control2').on('click', function(){


	            if (  $('#control2').is(":checked")  ) {

	            	$('.control-box').css('background','url(img/control2.jpg) center bottom');
	            } else {
	            	$('.control-box').css('background','url(img/control.jpg) center bottom');
	            }        

	            
            });


                $('#control3').on('click', function(){


	            if (  $('#control3').is(":checked")  ) {

	            	$('.control-box').css('background','url(img/control3.jpg) center bottom');
	            } else {
	            	$('.control-box').css('background','url(img/control.jpg) center bottom');
	            }        

	            
            });

});



