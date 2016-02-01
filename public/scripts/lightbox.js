function handleLightbox(target, array) {
    var lightbox = document.getElementById('lightbox');
    var imagebox = lightbox.children[0].children[1];
    var image = imagebox.children[0];
    var title = imagebox.children[1];
    image.src = parseSource(array[parseInt(target.id)]);
    title.textContent = array[parseInt(target.id)].title;
    imagebox.id = parseInt(target.id);
    fadeIn(lightbox);
}

/*function initLightbox(array) {
	var lightbox = document.getElementById('lightbox');
	var imagebox = document.getElementById('imagebox');
	var prevBtn = document.getElementById('prev');
	var nextBtn = document.getElementById('next');

	prevBtn.addEventListener('click', function() {
		getPrevImage(imagebox, array);
	});
	nextBtn.addEventListener('click', function() {
		getNextImage(imagebox, array);
	});

}
*/
function initMain() {

	var main = document.getElementById("content");

	//initLightbox(LAZYOBJ);

	main.addEventListener('click', function(e) {
        if (e.target.parentNode.className === 'thumb') {
            handleLightbox(e.target.parentNode, LAZYOBJ);
            console.log('clicked thumb');
        }
    });

}



document.addEventListener('DOMContentLoaded', initMain);