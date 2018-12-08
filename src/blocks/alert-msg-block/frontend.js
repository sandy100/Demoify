import domReady from '@wordpress/dom-ready';

/**
 * Permanently hide the dismissible alert message if clicked.
 */
domReady(() => {
	const elements = document.querySelectorAll('.dgb-alert.dismissible-true[data-messageId]');
	elements.forEach(el => {
		const messageId = el.getAttribute( 'data-messageId' )
		if ( ! localStorage.getItem(`dgb-alert-${messageId}`) ) {
			el.style.display = 'block';
		}
		el.querySelector('.close-button').addEventListener('click', () => {
			localStorage.setItem(`dgb-alert-${messageId}`, 1)
			el.style.display = '';
		})
	})
})
