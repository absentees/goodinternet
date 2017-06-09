class Layout {
	constructor() {
		this.modalTargets = document.querySelectorAll('.tile img');
		this.container = document.querySelectorAll('.container')[0];
		this.modal = document.querySelectorAll('.modal')[0];
		this.modalImage = document.querySelectorAll('.modal img')[0];
		this.modalClose = document.querySelectorAll('.modal .close')[0];
	}
	init() {
		Array.prototype.forEach.call(this.modalTargets, (el) => {
			el.addEventListener("click", (clickEvent) => {
				this.showModal(clickEvent.target.src);
			});
		});

		this.modalClose.addEventListener("click", () => {
			this.closeModal();
		});
	}

	showModal(imagePath) {
		this.modalImage.src = imagePath;

		if (this.modal.classList) {
		  this.modal.classList.add('-show');
		} else {
		  this.modal.className += ' ' + '-show';
		}
	}

	closeModal() {
		if (this.modal.classList) {
		  this.modal.classList.remove('-show');
		} else {
		  this.modal.className -= ' ' + '-show';
		}
	}
}

export default Layout;
