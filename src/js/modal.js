class Layout {
	constructor() {
		this.modalTargets = document.querySelectorAll('.tile img');
		this.container = document.querySelectorAll('.container')[0];
		this.modal = document.querySelectorAll('.modal')[0];
		this.modalImage = document.querySelectorAll('.modal img')[0];
	}
	init() {
		console.log(this.modalTargets);

		Array.prototype.forEach.call(this.modalTargets, (el) => {
			el.addEventListener("click", (tile) => {
				console.log(tile.src);
				this.showModal(tile.src);
			});
		});
	}

	showModal(imagePath) {
		this.modalImage.src = imagePath;
	}
}

export default Layout;
