/**
 * Icons for all Demoify blocks.
 * All the icons used here are taken from IonIcons.
 * Icons svg is taken from IonIcons: https://simplesvg.com/icon-sets/ion/
 */

const Gradient = ( props ) => (
	<defs>
		<linearGradient { ...props } gradientTransform="rotate(120)">
			<stop offset="0%" stopColor="#12c2e9" stopOpacity="1" />
			<stop offset="20%" stopColor="#c471ed" stopOpacity="1" />
			<stop offset="50%" stopColor="#DA65A8" stopOpacity="1" />
			<stop offset="100%" stopColor="#f64f59" stopOpacity="1" />
		</linearGradient>
	</defs>
);

let iconNum = 1;
const iconID = () => `dgb-icon-${ iconNum++ }`;

export const CardIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M424 64H88c-22 0-40 18-40 40v304c0 22 18 40 40 40h336c22 0 40-18 40-40V104c0-22-18-40-40-40zm12 176c0 8.8-7.2 16-16 16h-86.8c-6.8 0-12.8 4.2-15.1 10.6C314 278.2 303.8 288 292 288h-72c-11.9 0-22.1-9.8-26.1-21.4-2.2-6.4-8.3-10.6-15.1-10.6H92c-8.8 0-16-7.2-16-16V108c0-8.8 7.2-16 16-16h328c8.8 0 16 7.2 16 16v132z" />
			<path fill={ `url(#${ id })` } d="M386 156H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14z" />
			<path fill={ `url(#${ id })` } d="M386 220H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14z" />
		</svg>
	);
};

export const ButtonIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z" />
		</svg>
	);
};

export const GhostButtonIcon = () => <ButtonIcon />;

export const QuoteIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z" />
			<path fill={ `url(#${ id })` } d="M385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z" />
		</svg>
	);
};

export const AlertMsgIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm17.2 109.6l-3.1 115.1c-.2 8.2-5.9 14.8-14.1 14.8s-13.9-6.6-14.1-14.8l-3.1-115.1c-.2-9.6 7.5-17.6 17.2-17.6 9.6 0 17.4 7.9 17.2 17.6zM256 354c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4c10.7 0 19.1 8.1 19.1 18.4S266.7 354 256 354z" />
		</svg>
	);
};

export const SpacerIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M396.795 396.8H320V448h128V320h-51.205z" />
			<path fill={ `url(#${ id })` } d="M396.8 115.205V192H448V64H320v51.205z" />
			<path fill={ `url(#${ id })` } d="M115.205 115.2H192V64H64v128h51.205z" />
			<path fill={ `url(#${ id })` } d="M115.2 396.795V320H64v128h128v-51.205z" />
		</svg>
	);
};

export const OurTeamIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M256 48C148.5 48 60.1 129.5 49.2 234.1c-.8 7.2-1.2 14.5-1.2 21.9 0 7.4.4 14.7 1.2 21.9C60.1 382.5 148.5 464 256 464c114.9 0 208-93.1 208-208S370.9 48 256 48zm135.8 326.1c-22.7-8.6-59.5-21.2-82.4-28-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2 1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15 51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-23.7 7-58.9 19.4-80 27.8C91.6 341.4 76 299.9 76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256c0 43.9-15.6 85.4-44.2 118.1z" />
		</svg>
	);
};

export const HeroIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8z" />
			<path fill={ `url(#${ id })` } d="M306.7 254.3l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3z" />
			<path fill={ `url(#${ id })` } d="M351.1 167.9c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z" />
			<path fill={ `url(#${ id })` } d="M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z" />
		</svg>
	);
};
export const CallToActionIcon = () => {
	const id = iconID();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
			<Gradient id={ id } />
			<path fill={ `url(#${ id })` } d="M90.1 187c0-33.4 17.1-62.8 43.5-78.9 2.8-1.7 1.6-6-1.7-6-38.2 0-68.5 30.4-74.1 69.8-5.6.9-9.9 7.3-9.9 14.9 0 8 4.7 14.3 10.8 14.8 6.7 33.8 33.8 55.4 61.2 64.5 4.3.9 7.1-4.5 3.8-7.5-19.6-17.7-33.6-44.3-33.6-71.6z" />
			<path fill={ `url(#${ id })` } d="M450.2 102.8c-1-2.7-2.1-5.2-3.2-7.7-6-13.4-13.4-24.2-21.7-32.2-10.5-9.7-21.4-14.9-34.8-14.9-13.5 0-21.5 5.2-25.8 7.8-43.1 25.9-112.3 46-154 46s-39.4.2-39.4.2c-31.6 14-54.8 46.9-54.8 85 0 34.2 17.8 64.2 44.4 80 12.1 10.1 23.6 8.8 21.1 22.2-2.5 13.4-22.5 97.5-25 115s-2.9 27.5 4 36c7 8.5 49.5 23.8 68 23.8s13.8-8.7 13.8-43.8-9.3-131.7 16.5-131.7c48.3 0 73.5 17.3 111.3 31.7 9 3.4 14.1 4.7 20.1 4.7 6 0 18.7-1.9 34.7-18.2 9.2-9.4 15.7-18.8 21.7-32.2 1.1-2.6 2.2-5.2 3.3-8 8.9-23.2 13.7-51.9 13.7-81.9-.1-29.8-4.9-58.6-13.9-81.8zm-26.6 157c-6.4 15.7-17.6 28.2-26.9 28.2-9.3 0-17.8-12.5-24.2-28.2-7.5-18.3-12.3-45-12.3-74.7 0-29.8 4.8-56.6 12.3-74.9 6.4-15.6 14.9-25 24.1-25 9.3 0 20.3 9.5 26.8 25 7.6 18.3 14.5 45.1 14.5 74.9.1 29.7-6.8 56.4-14.3 74.7z" />
		</svg>
	);
};

