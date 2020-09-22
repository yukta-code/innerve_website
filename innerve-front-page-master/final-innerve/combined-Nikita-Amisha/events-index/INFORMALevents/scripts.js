function popupOpen1(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper1").length == 0){
		$(popup).wrapInner("<div class='wrapper1'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen2(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper2").length == 0){
		$(popup).wrapInner("<div class='wrapper2'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen3(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper3").length == 0){
		$(popup).wrapInner("<div class='wrapper3'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen4(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper4").length == 0){
		$(popup).wrapInner("<div class='wrapper4'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen5(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper5").length == 0){
		$(popup).wrapInner("<div class='wrapper5'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen6(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper6").length == 0){
		$(popup).wrapInner("<div class='wrapper6'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen7(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper7").length == 0){
		$(popup).wrapInner("<div class='wrapper7'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen8(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper8").length == 0){
		$(popup).wrapInner("<div class='wrapper8'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen9(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper9").length == 0){
		$(popup).wrapInner("<div class='wrapper9'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}
function popupOpen10(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper10").length == 0){
		$(popup).wrapInner("<div class='wrapper10'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}
function popupOpen11(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper11").length == 0){
		$(popup).wrapInner("<div class='wrapper11'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}
function popupOpen12(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper12").length == 0){
		$(popup).wrapInner("<div class='wrapper12'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});
}
	function popupOpen13(popup) {

		/* Add div inside popup for layout if one doesn't exist */
		if ($(".wrapper13").length == 0){
			$(popup).wrapInner("<div class='wrapper13'></div>");
		}
	
		/* Open popup */
		$(popup).show();
	
		/* Close popup if user clicks on background */
		$(popup).click(function(e) {
			if ( e.target == this ) {
				if ($(popup).is(':visible')) {
					$(popup).hide();
				}
			}
		});
	}
		function popupOpen14(popup) {

			/* Add div inside popup for layout if one doesn't exist */
			if ($(".wrapper14").length == 0){
				$(popup).wrapInner("<div class='wrapper14'></div>");
			}
		
			/* Open popup */
			$(popup).show();
		
			/* Close popup if user clicks on background */
			$(popup).click(function(e) {
				if ( e.target == this ) {
					if ($(popup).is(':visible')) {
						$(popup).hide();
					}
				}
			});
		}

$(document).ready(function () {
	$("[data-js=open1]").on("click", function() {
		popupOpen1($(".popup1"));
	});
	$("[data-js=open2]").on("click", function() {
		popupOpen2($(".popup2"));
	});
	$("[data-js=open3]").on("click", function() {
		popupOpen3($(".popup3"));
	});
	$("[data-js=open4]").on("click", function() {
		popupOpen4($(".popup4"));
	});
	$("[data-js=open5]").on("click", function() {
		popupOpen5($(".popup5"));
	});
	$("[data-js=open6]").on("click", function() {
		popupOpen6($(".popup6"));
	});
	$("[data-js=open7]").on("click", function() {
		popupOpen7($(".popup7"));
	});
	$("[data-js=open8]").on("click", function() {
		popupOpen8($(".popup8"));
	});
	$("[data-js=open9]").on("click", function() {
		popupOpen9($(".popup9"));
	});
	$("[data-js=open10]").on("click", function() {
		popupOpen10($(".popup10"));
	});
	$("[data-js=open11]").on("click", function() {
		popupOpen11($(".popup11"));
	});
	$("[data-js=open12]").on("click", function() {
		popupOpen12($(".popup12"));
	});
	$("[data-js=open13]").on("click", function() {
		popupOpen13($(".popup13"));
	});
	$("[data-js=open14]").on("click", function() {
		popupOpen14($(".popup14"));
	});
});


// **********************major events************



var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);

};
var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
