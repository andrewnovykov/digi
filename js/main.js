


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



// adv slider

var timer = function(){
  	document.getElementById("advSrc").src = "img/router-white.png";
}


var timer2 = function(){
	document.getElementById("advSrc").src = "img/router-blue.png";
}

setInterval(function() {
  timer();
}, 1600)

setInterval(function() {
  timer2();
}, 2500)




//map



  var bittersMap = (function () {
    var myLatlng = new google.maps.LatLng(50.424044, 30.521714),
        mapCenter = new google.maps.LatLng(50.424044, 30.521714),
        mapCanvas = document.getElementById('map_canvas'),
        mapOptions = {
          center: mapCenter,
          zoom: 13,
          scrollwheel: false,
          draggable: true,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(mapCanvas, mapOptions),
        contentString =
          '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Digi24</h1>'+
          '<div id="bodyContent"'+
          '<p>м Палац украины</p>'+
          '</div>'+
          '</div>',
        infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
        }),
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'thoughtbot (Sweden)'
        });

    return {
      init: function () {
        map.set('styles', [{
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffff00' },
            { saturation: 30 },
            { lightness: 10}
          ]}
        ]);

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map,marker);
        });
      }
    };
  }());

  bittersMap.init();


//valid form

function placeOrder(form) {
        if (document.getElementById("name").value == "" ){
            document.getElementById("e_login").style.display = "inline";
      return false;
      }

     if (document.getElementById("name").value != "" ){
            document.getElementById("e_login").style.display = "none";
            }
     
    
    if (document.getElementById("email").value == ""){
          document.getElementById("e_email").style.display = "inline";
           return false;}

       if (document.getElementById("email").value != ""){
          document.getElementById("e_email").style.display = "none";
          }

      if (document.getElementById("phone").value == ""){
          document.getElementById("e_phone").style.display = "inline";
           return false;}

       if (document.getElementById("phone").value != ""){
          document.getElementById("e_phone").style.display = "none";
          }

         if (document.getElementById("country").value == ""){
          document.getElementById("e_country").style.display = "inline";
           return false;}

       if (document.getElementById("country").value != ""){
          document.getElementById("e_country").style.display = "none";
          }

     if (document.getElementById("url").value == ""){
          document.getElementById("e_url").style.display = "inline";
           return false;}

       if (document.getElementById("url").value != ""){
          document.getElementById("e_url").style.display = "none";
          }  


       if (document.getElementById("comment").value == ""){
          document.getElementById("e_comment").style.display = "inline";
           return false;}

       if (document.getElementById("comment").value != ""){
          document.getElementById("e_comment").style.display = "none";
          }
       
    if (document.getElementById("box2").value != "258574"){
          document.getElementById("e_box2").style.display = "inline";
           return false;}   


      
        else
          // Submit the order to the server
          form.submit();
            document.getElementById("e_contact").style.display = "inline";
      }







