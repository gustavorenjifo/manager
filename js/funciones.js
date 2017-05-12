
$(document).ready(function(){

	$(".footer").load("include/footer.html");

	$("form.activar .switch input").click(function(){
		$(this).parents(".activar").find(".desactivo, .activo").toggle();
	});

	$(".menuprincipal ul li.submenu").click(function(){
		$(this).find("ul").slideToggle("fast");
		$(this).find(".flecha").toggleClass("rotar");
	});

	function menunormal(){	
		$(".menuprincipal > ul > li").hover(function(){
			$(this).find("i:first-child").toggleClass("animated jello");
		});

		function cerrarmenu(){
			$(".iconmenu").removeClass("cerrar");
			$(".iconmenu").addClass("abrir");
			$(".boxmenu").animate({left: '-200px'}, 190, 'linear');
			$(".menuprincipal ul li span").fadeOut("fast");
			$(".menuprincipal > ul > li > a > i:first-child").css("left","auto");
			$(".menuprincipal > ul > li > a > i:first-child").css("right","18px");
			$(".menuprincipal > ul > li > a > i.flecha").hide();
			$(".menuprincipal > ul > li.submenu > ul > li a > i").css("left","auto");
			$(".menuprincipal > ul > li.submenu > ul > li a > i").css("right","18px");
			$(".cuerpo").animate({'margin-left':'50px'}, 190, 'linear');
		}	

		function abrirmenu(){	
			$(".iconmenu").removeClass("abrir");
			$(".iconmenu").addClass("cerrar");
			$(".boxmenu").animate({left: '0px'}, 190, 'linear');
			$(".menuprincipal ul li span").fadeIn("fast");
			$(".menuprincipal > ul > li  > a  > i:first-child").css("left","16px");
			$(".menuprincipal > ul > li > a > i.flecha").show();
			$(".menuprincipal > ul > li > a > i.flecha").css("right","18px");
			$(".menuprincipal > ul > li > a > i.flecha").css("left","auto");
			$(".menuprincipal > ul > li.submenu > ul > li a > i").css("left","46px");
			$(".menuprincipal > ul > li.submenu > ul > li a > i").css("right","auto");
			$(".cuerpo").animate({'margin-left':'250px'}, 190, 'linear');
			$(".menuprincipal ul li i").removeAttr("style");	
		}

		$(".iconmenu").click(function(){
			if($(this).hasClass("cerrar")){
				cerrarmenu();
			}
			else {
				abrirmenu();
			}		
		});
	}

	function menumobile(){
		$(".iconmenu").click(function(){
			$(".menuprincipal").slideToggle("fast");
		});
		$(".menuprincipal ul li a span").css("display","block");
		$(".boxmenu").animate({left: '0px'}, 190, 'linear');
		$(".menuprincipal > ul > li  > a  > i:first-child").css("left","16px");
		$(".menuprincipal > ul > li.submenu > ul > li a > i").css("left","46px");
		$(".menuprincipal > ul > li.submenu > ul > li a > i").css("right","auto");
	}

	if ($(window).width() > 719){
		menunormal();	
	}else {
		menumobile();
	}

    var mediaquery = window.matchMedia("(max-width:719px)");
	function handleOrientationChange(mediaquery) {
		console.log("handle");
		$(".iconmenu").prop('onclick',null).off('click');
		if (mediaquery.matches) {	
			console.log("menumobile");
			menumobile();
		} else{
			menunormal();
			$(".cuerpo").animate({'margin-left':'250px'}, 120, 'linear');
			console.log("menunormal");
			$(".menuprincipal").show();
		}
	}
	mediaquery.addListener(handleOrientationChange);


	$('img').each(function () {
	 	$(this).attr("border", "0");
	});
		
	//input file//
	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [label]);
		});
		$('.btn-file :file').on('fileselect', function(event, label) {    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;   
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }   
		});
		function readURL(input) {
			var id=input.id.split("_")[1];
			var img = "img_"+ id;
			console.log(img);
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();    
	        reader.onload = function (e) {
	            $('#'+img).attr('src', e.target.result);
	        }       
	        reader.readAsDataURL(input.files[0]);
	    }

	}

	$(".imgInp").change(function(){
	    readURL(this);
	});//input file//


	$(".header .perfil").click(function(){
		$(this).find("ul").fadeToggle(10);
	});

	//---acordion----//

	$(".acordion .titulo").click(function(){
		$(this).parent().find(".contenido").slideToggle("fast");
		$(this).find("i").toggleClass("rotate");		
	});


	$(".btn-default").click(function(){
		$(this).parents(".cajablanca").find('*').prop("disabled", false);
		$(this).parents(".cajablanca").find("span").removeAttr("disabled");
		$('textarea').removeAttr("disabled");
	});



});


  