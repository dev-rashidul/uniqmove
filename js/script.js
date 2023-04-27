// JavaScript for Sidebar Menu

accordionNav = $(function(){
	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		var toggleButton = $(this);
		if (toggleButton.next().hasClass('active')) {
			toggleButton.next().removeClass('active');
			toggleButton.next().slideUp(400);
			toggleButton.removeClass('active');
		 } else {
			toggleButton.parent().parent().find('li .sub-menu').removeClass('active');
			toggleButton.parent().parent().find('li .sub-menu').slideUp(400);
			toggleButton.parent().parent().find('.menu-toggle').removeClass('active');
			toggleButton.next().toggleClass('active');
			toggleButton.next().slideToggle(400);
			toggleButton.toggleClass('active');
		}
	});
});


// JavaScript For Menu Close

const bar_icon = document.getElementById("bar")
const close_icon = document.querySelector(".close")
const sidebar_nav = document.getElementById("sidebar-nav")
const link = document.querySelector(".link")

bar_icon.onclick = function(){
	sidebar_nav.classList.add("active")
}

close_icon.onclick = function(){
	sidebar_nav.classList.remove("active")
}

link.onclick = function(){
	sidebar_nav.classList.remove("active")
}

document.onclick = function(e){
	if(!bar_icon.contains(e.target) && !sidebar_nav.contains(e.target)){
		sidebar_nav.classList.remove("active")
	}
}