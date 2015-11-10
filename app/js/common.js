(function(){

	//menu

	var togMnu = document.getElementsByClassName('toggle-mnu')[0];
	var mainMnu = document.getElementsByClassName('main-mnu')[0];

	togMnu.onclick = function(){

		this.classList.toggle('on');
		mainMnu.classList.toggle('onmenu');

		return false;
	}

	})();

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

// animate section_1
(function(){


	window.addEventListener("scroll", function(){

		var scrolled = window.pageYOffset || document.documentElement.scrollTop,
				elemPointAnimate = document.querySelector('.section_1 ').getBoundingClientRect().top + scrolled - 130,
				elemsSours = document.querySelectorAll('.info-item'),
				index = 0;

	    if( elemPointAnimate <= scrolled ){

	    	var timeoutId = setTimeout(function funck(){

						if(index >= elemsSours.length) return clearTimeout(timeoutId);
							elemsSours[index].classList.remove('info-item-off');
							index++;
							timeoutId = setTimeout(funck, 60);

				}, 60);

	    }

}, false);

})();

	////////////////////////////////////////////////////////////////////////////////////////

	//set Height elements of blocks

(function(){


	function setAutoHeight(elem){

		for(var i = 0; i < elem.length; i++ ){

				elem[i].style.height = 'auto';
			}
	}

	function setHeightOnElem(elem, height){

		if(document.documentElement.clientWidth <= 600){

			for(var i = 0; i < elem.length; i++ ){
				elem[i].style.height = 'auto';
			}

		}else{

				for(var i = 0; i < elem.length; i++ ){
				elem[i].style.height = height +'px';
			}
		}
	}


	function getMaxHeightElems(elem){

		var compleStyle = [];

		for(var i = 0; i < elem.length; i++){
			compleStyle.push(elem[i].clientHeight);
		}

		return  Math.max.apply( Math, compleStyle );
	}


	function setHeightForSecTwo(elem, height){

				for(var i = 0; i < elem.length; i++ ){
				elem[i].style.height = height +'px';
			}
	}

	//set Height elements section_1
	var s1_infoItem = document.querySelectorAll('.section_1 .section-content .info-item');
			setHeightOnElem( s1_infoItem, getMaxHeightElems(s1_infoItem));

	//set Height elements section_2
	var s2_infoItem = document.querySelectorAll('.section_2 .s2-items-container .s2-item-wrap .s2_item ');
			setHeightForSecTwo( s2_infoItem, getMaxHeightElems(s2_infoItem));

	//set Height elements section_3
	var s3_infoItem = document.querySelectorAll('.section_3 .section-content .info-item');
			setHeightOnElem( s3_infoItem, getMaxHeightElems(s3_infoItem));



	
	//set Height elements when resize window
	window.addEventListener("resize" , function(){

		//section_1
		var s1_infoItem = document.querySelectorAll('.section_1 .section-content .info-item');
			setAutoHeight(s1_infoItem);
			setHeightOnElem( s1_infoItem, getMaxHeightElems(s1_infoItem));

		//section_3
		var s3_infoItem = document.querySelectorAll('.section_3 .section-content .info-item');
			setAutoHeight(s3_infoItem);
			setHeightOnElem( s3_infoItem, getMaxHeightElems(s3_infoItem));



	});

})();

//////////////////////////////////////////////////////////////////////////////

// animate cards section_4
(function(){


window.addEventListener("scroll", function(){

	var scrolled = window.pageYOffset || document.documentElement.scrollTop,
			elemPointAnimate = document.querySelector('.section_4 ').getBoundingClientRect().top + scrolled - 130,
			elemsSours = document.querySelectorAll('.card'),
			index = 0;

	    if( elemPointAnimate <= scrolled ){


	    	var timeoutId = setTimeout(function funck(){

						if(index >= elemsSours.length) return clearTimeout(timeoutId);
							elemsSours[index].classList.remove('card-off');
							index++;
							timeoutId = setTimeout(funck, 30);

				}, 30);

	    }

}, false);

})();

///////////////////////////////////////////////////////////////////////////////////////
//animate svg arrow

(function(){

	

	window.addEventListener("scroll", function(){

	var scrolled = window.pageYOffset || document.documentElement.scrollTop,
			elemPointAnimate = document.querySelector('.section_5 ').getBoundingClientRect().top + scrolled - 200,
			elemsSours = document.querySelectorAll('.tc-item'),
			index = 0;

	    if( elemPointAnimate <= scrolled ){


	    	var timeoutId = setTimeout(function funck(){

						if(index >= elemsSours.length) return clearTimeout(timeoutId);

							elemsSours[index].classList.remove('tc-item-off');
							index++;
							timeoutId = setTimeout(funck, 50);

				}, 50);

	    }

}, false);



// var myAnimation = new DrawFillSVG({
//       elementId: "tc-svg-1"
//     });

})();

/////////////////////////////////////////////////////////////////////////////////////////

//slider
(function(){

	//access elements
	var slider = document.getElementsByClassName('slider')[0],
			slide = document.getElementsByClassName('slide')[0],

			arrowLeft = document.querySelector('.ar_left'),
			arrowRight = document.querySelector('.ar_right'),
			slideItems = document.querySelectorAll('.slide-items'),
			sliders = document.querySelector('.sliders');


	//configuration
	var width = slideItems[0].clientWidth,
			count = slideItems.length,
			position = 0;

	window.addEventListener('resize', function(){

			width = slideItems[0].clientWidth;

			slider.style.width = width +'px';
			slide.style.width = width +'px';
			for(var i = 0 ; i< slideItems.length; i++){
				slideItems[i].style.width = width +'px';
			}

	});


	arrowLeft.addEventListener('click', function(){

			position = Math.min(position + width, 0);

			sliders.style.marginLeft = position +'px';
		
	});

	arrowRight.addEventListener('click', function(){

			if(position > (count-1)*-width || position == 0){

				position = position - width;
				sliders.style.marginLeft = position +'px';
		}	
		
	});

})();

//////////////////////////////////////////////////////////////////////////////

// animate section_2 items
(function(){


	window.addEventListener("scroll", function(){

	//determine the monitor data 
	var scrolled = window.pageYOffset || document.documentElement.scrollTop,
			elemPointAnimateS2 = document.querySelector('.section_2 ').getBoundingClientRect().top + scrolled-100,
			elemsSoursItems = document.querySelectorAll('.s2-item-wrap'),
			index = 0;

	    if( elemPointAnimateS2 <= scrolled ){

	    	var timeoutId = setTimeout(function funck(){

						if(index >= elemsSoursItems.length) return clearTimeout(timeoutId);

							elemsSoursItems[index].classList.remove('s2-item-wrap-off');
							index++;
							timeoutId = setTimeout(funck, 80);

				}, 10);
	    }
	  

	}, false);

})();

///////////////////////////////////////////////////////////////////////////////////////////

//popup


(function(){

	
	var div = document.createElement('div');
	div.className = 'blackout';
	var blackout = document.body.appendChild(div),
			popupBox = document.getElementsByClassName('popup-box')[0],
			boxWidth = 320;

	function ceneterBox(){

		//determine the monitor data
		var winWith = document.body.clientWidth,
				winHeight = document.body.clientHeight,
				scrollPos = window.pageYOffset;

		//calculate the position
		var disWith = (winWith - boxWidth)/2;
		var disHeight = scrollPos + 150;

		//add style to the blocks
		popupBox.style.maxWidth= boxWidth+"px";
		popupBox.style.left= disWith+"px";
		popupBox.style.top= disHeight+"px";

		blackout.style.width = winWith+"px";
		blackout.style.height = winHeight+"px";
	}

	ceneterBox();

	window.addEventListener('resize', function(){
		ceneterBox();
	});

	window.addEventListener('scroll', function(){
		ceneterBox();
	});

 var popupLink = document.querySelector('.popup-box .forms');

	popupLink.addEventListener('click', function(event){

		event.stopPropagation();
		event.preventDefault();

	});


	document.body.addEventListener('click', function(event){

		var res = event.target.className;

		if( event.target.className == "buttons popup-button"){

				popupBox.style.display = 'block';
				blackout.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.documentElement.style.overflow = 'hidden';

			}else{
				popupBox.style.display = 'none';
				blackout.style.display = 'none';
				document.body.style.overflow = 'auto';
				document.documentElement.style.overflow = 'auto';

			}
		
	});



	
})();