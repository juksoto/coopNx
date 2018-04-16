	function switchConfigTools(typeDesc){
		$( "body" ).removeClass( "configDefaultTools configHighContrastTools configTextOnlyTools" );
		$( '[data-type="configTools"]' ).removeClass( "active" );

			switch(typeDesc){
				case 'default':
						$('[data-typedes="default"]').addClass("active");
						$( "body" ).addClass("configDefaultTools");
					break;
				case 'highContrast':
						$('[data-typedes="highContrast"]').addClass("active");
						$( "body" ).addClass("configHighContrastTools");
					break;
				case 'textOnly':
						$('[data-typedes="textOnly"]').addClass("active");
						$( "body" ).addClass("configTextOnlyTools");
					break;
			}
	}

	function switchConfigFont(typeDesc){
		$( "body" ).removeClass( "faFontLg faFont2x faFont3x" );
		$( '[data-type="configFont"]' ).removeClass( "active" );

		switch(typeDesc){
			case 'lg':
					$('[data-typedes="lg"]').addClass("active");
					$( "body" ).addClass("faFontLg");
				break;
			case '2x':
					$('[data-typedes="2x"]').addClass("active");
					$( "body" ).addClass("faFont2x");
				break;
			case '3x':
					$('[data-typedes="3x"]').addClass("active");
					$( "body" ).addClass("faFont3x");
				break;
		}
	}

	$(".btnConfigTools").click(function(e){

		e.preventDefault();
		var type = $(this).data("type");
		var typeDesc = $(this).data("typedes");
		console.log(type + " " + typeDesc);
		document.cookie = type+"="+typeDesc+"; path=/";

		if(type == "configTools"){
			switchConfigTools(typeDesc);
		}

		if(type == "configFont"){
			switchConfigFont(typeDesc);
		}

	});

	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

	$(document).ready(function(){

		var cookieConfigTools = readCookie('configTools');
		var cookieConfigFont = readCookie('configFont');

		if(readCookie('configTools')){
			switchConfigTools(cookieConfigTools);
		}

		if(readCookie('configFont')){
			switchConfigFont(cookieConfigFont);
		}
		
	});