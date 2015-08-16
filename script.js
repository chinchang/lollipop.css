var docs = [
	{ name: 'Menu animation', slug: 'chinchang/pen/yNyaEx/' },
	{ name: 'Home navigation', slug: 'chinchang/pen/yNyaEx/' },
	{ name: 'Something blah', slug: 'chinchang/pen/yNyaEx/' },
	{ name: 'Hello', slug: 'chinchang/pen/yNyaEx/' }
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

ui.openDoc = function openDoc(e) {
	history.pushState(null, null, e.target.href);
	e.preventDefault();
};


ui.populateList();