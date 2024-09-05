export class Carrousel {
	constructor({ element, leftButton, rightButton, onChange, length = 1 }) {
		this.current = 0;
		this.element = element;
		this.leftButton = leftButton;
		this.rightButton = rightButton;
		this.length = length;

		this.leftButton.addEventListener("click", () => this.previous());
		this.rightButton.addEventListener("click", () => this.next());

		this.onChange = onChange || function (self) {
			Array.from(self.element.children).forEach((c, i) => {
				if (i >= self.current && i < self.current + length) {
					c.classList.remove("hidden");
					c.classList.add("fade-in");

					setTimeout(() => {
						c.classList.add("visible");
					}, 10);
				} else {
					c.classList.remove("visible");
					c.classList.add("hidden");
					// Remove fade-in class when hidden to reset animation
					c.classList.remove("fade-in");
				}
			});
		};

		this.update();
	}

	next() {
		if (this.current < this.element.children.length - this.length) {
			this.current++;
			this.update();
		}
	}

	previous() {
		if (this.current > 0) {
			this.current--;
			this.update();
		}
	}

	update() {
        this.onChange(this);
		this.updateButtons();
	}

	updateButtons() {
		this.leftButton.disabled = this.current === 0;
		this.rightButton.disabled = this.current === this.element.children.length - this.length;
	}
}