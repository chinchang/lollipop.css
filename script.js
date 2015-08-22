var docs = [
	{ title: 'Menu animation', slug: 'chinchang/pen/yNyaEx/' },
	{ title: 'Menu animation', slug: 'chinchang/pen/yNyaEx/' }
];
var docBaseUrl = '://codepen.io/';

// DOM Elements
var menuBtn = document.querySelector('#js-menu-btn'),
	docsList = document.querySelector('#js-docs');

// docs.push
function toggleMenu() {
	document.body.classList.toggle('is-sidebar-open');
}
window.addEventListener('keyup', function (e) {
	if (e.which === 27) {
		toggleMenu();
	}
});

ui = {};
ui.itemContainerEl = document.querySelector('#js-item-container');
ui.embedPenEl = document.querySelector('#js-embed-pen');

ui.populateList = function populateList() {
	var html = docs.map(function mapCallback(doc) {
		return '<li class="doc"><a href="' + doc.slug + '" onclic="openDoc(event)">' + doc.name + '</a></li>';
	}).join('');
	docsList.innerHTML = html;

	var anchors = document.querySelectorAll('.doc a'), anchor;
    for (var i = 0; i < anchors.length; i++) {
        anchor = anchors[i];
        anchor.addEventListener('click', ui.openDoc);
    }

};

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

	ui.itemContainerEl.innerHTML = '';
	ui.itemContainerEl.appendChild(clone);
	CodePenEmbed.init();
	ui.reverseAnimate = cta(e.currentTarget, ui.itemContainerEl, function () {
		document.body.classList.add('item-state');
	});

	e.preventDefault();
};

ui.closeItem = function closeItem(e) {
	if (ui.reverseAnimate) {
		// ui.reverseAnimate();
		// ui.reverseAnimate = null;
	}
	document.body.classList.remove('item-state');
};


ui.populateList();
// Prefetch codepen embed script
setTimeout(function () {
	fetchCodepenScript();
}, 500);
