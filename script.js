ui = {};
ui.itemContainerEl = document.querySelector('#js-item-container');
ui.embedIframeContainerEl = document.querySelector('#js-item-container > div');
ui.embedPenEl = document.querySelector('#js-embed-pen');

function fetchCodepenScript() {
	var script = document.createElement('script');
	script.src = '//assets.codepen.io/assets/embed/ei.js';
	document.head.appendChild(script);
}

ui.openItem = function openItem(e) {
	var slug = e.currentTarget.getAttribute('href');
	var clone = ui.embedPenEl.cloneNode();
	clone.removeAttribute('data-dummy-pen');
	clone.setAttribute('class', 'codepen');
	clone.setAttribute('data-slug-hash', slug.match(/([\w\d]+)\/$/)[1]);

	ui.embedIframeContainerEl.innerHTML = '';
	ui.embedIframeContainerEl.appendChild(clone);
	new __CPEmbed();
	document.body.classList.add('item-state');
	e.preventDefault();
};

ui.closeItem = function closeItem(e) {
	document.body.classList.remove('item-state');
};

window.addEventListener('keyup', function (e) {
	if (e.which === 27) {
		ui.closeItem();
	}
});

// Prefetch codepen embed script
setTimeout(function () {
	fetchCodepenScript();
}, 500);
