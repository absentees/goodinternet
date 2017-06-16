class Tiles {
	constructor() {
		this.tileImages = document.querySelectorAll('.tile img');
	}
	init() {
		Array.prototype.forEach.call(this.tileImages, (el) => {

			el.addEventListener("mouseover", (hoverEvent) => {
				// var height = hoverEvent.target.height -
				
				hoverEvent.target.style.top = '-' + hoverEvent.target.height.toString() + 'px';
			});

			el.addEventListener("mouseleave", (hoverEvent) => {
				hoverEvent.target.style.top = '0px';
			});
		});
		// for (var i = 0; i < this.tiles.length; i++) {
		// 	var image = this.tiles[i].querySelectorAll('.img img')[0];
		// 	console.log(image.height);
		// 	image.setAttribute('data-imageHeight', image.height);
		//

	}

	addImageHeights() {

	}

	hoverEffect() {

	}
}

export default Tiles;
