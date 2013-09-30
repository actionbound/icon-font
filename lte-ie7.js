/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Actionbound-Icons-1-0\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-music' : '&#xf001;',
			'icon-search' : '&#xf002;',
			'icon-Actionbound-Logo-Icon' : '&#xe001;',
			'icon-picture' : '&#xf03e;',
			'icon-wrench' : '&#xf0ad;',
			'icon-apple' : '&#xf179;',
			'icon-android' : '&#xf17b;',
			'icon-windows' : '&#xf17a;',
			'icon-star' : '&#xf005;',
			'icon-star-empty' : '&#xf006;',
			'icon-star-half-full' : '&#xf123;',
			'icon-verified' : '&#xe002;',
			'icon-globe' : '&#xf0ac;',
			'icon-earth' : '&#xe003;',
			'icon-play-circle' : '&#xf01d;',
			'icon-play' : '&#xf04b;',
			'icon-play-sign' : '&#xf144;',
			'icon-copy' : '&#xf0c5;',
			'icon-pencil' : '&#xe004;',
			'icon-trash' : '&#xf014;',
			'icon-pacman-copy' : '&#xe005;',
			'icon-flag' : '&#xe006;',
			'icon-info' : '&#xe007;',
			'icon-help' : '&#xe008;',
			'icon-exclamation-sign' : '&#xf06a;',
			'icon-qrcode' : '&#xf029;',
			'icon-map-marker' : '&#xf041;',
			'icon-comments' : '&#xf086;',
			'icon-quill' : '&#xe009;',
			'icon-vimeo' : '&#xe00a;',
			'icon-vimeo2' : '&#xe00b;',
			'icon-facebook' : '&#xe00c;',
			'icon-twitter' : '&#xe00d;',
			'icon-google-plus' : '&#xe00e;',
			'icon-switch' : '&#xe00f;',
			'icon-heart' : '&#xf004;',
			'icon-impressum' : '&#xe000;',
			'icon-berlin' : '&#xe010;',
			'icon-tag' : '&#xf02b;',
			'icon-tags' : '&#xf02c;',
			'icon-clock' : '&#xe011;',
			'icon-directions' : '&#xe012;',
			'icon-spinner' : '&#xf110;',
			'icon-bug' : '&#xf188;',
			'icon-road' : '&#xf018;',
			'icon-user' : '&#xe013;',
			'icon-users' : '&#xe014;',
			'icon-italic' : '&#xf033;',
			'icon-bold' : '&#xf032;',
			'icon-film' : '&#xf008;',
			'icon-link' : '&#xe015;',
			'icon-ok' : '&#xf00c;',
			'icon-remove' : '&#xf00d;',
			'icon-upload' : '&#xe016;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};