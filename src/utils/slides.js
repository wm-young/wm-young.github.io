/**
 * URL to a sample image.
 *
 * @type {string}
 */
export const IMAGE_URL = '../assests/slides/';

/**
 * Return an object containing data of sample images.
 *
 * @param {number} length - Optional. A number of slides.
 * @param {number} sig    - Optional. The signature for getting a different image.
 *
 * @return {Object} - An object containing data of sample images.
 */
export function createSlides(path) {
	return Array.apply( null, Array(5) ).map( ( value, index ) => {

		return {
			src: `${ IMAGE_URL }${path}`,
			alt: `Image ${ index }`,
		};
	} );
}