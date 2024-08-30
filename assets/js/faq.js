document.addEventListener('DOMContentLoaded', function () {
	const headings = document.querySelectorAll('#accordion-js .heading');

	headings.forEach(function (heading) {
		heading.addEventListener('click', function () {
			this.classList.toggle('accord_active');
			const nextElement = this.nextElementSibling;
			if (nextElement) {
				if (this.classList.contains('accord_active')) {
					nextElement.style.display = 'block';
				} else {
					nextElement.style.display = 'none';
				}
			}
		});
	});
});
