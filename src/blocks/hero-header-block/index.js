/**
 * BLOCK: Hero Header Section
 *
 */

/**
 * Internal dependencies
 */

import classnames from 'classnames';

import './styles/style.scss';
import './styles/editor.scss';
import { HeroIcon } from '../../icons';
import {
	registerBlockType,
	__,
	IconButton,
	PanelColorSettings,
	Dashicon,
	RangeControl,
	SelectControl,
	Toolbar,
	Button,
	RichText,
	AlignmentToolbar,
	MediaUpload,
	BlockControls,
	InspectorControls,
	PanelBody,
	URLInput,
} from '../../wp-imports';

export const edit = ( props ) => {
	const {
		setAttributes,
		isSelected,
		editable,
		setState,
	} = props;

	const {
		url,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		buttonRadius,
		size,
		title,
		headingColor,
		description,
		descriptionColor,
		contentAlign,
		id,
		backgroundColor,
		opacity,
	} = props.attributes;

	const style = url ? { backgroundImage: `url(${ url })` } : undefined;
	const imageClass = url ? 'has-image' : '';
	const opacityClass = classnames(
		addOpacityToClass( opacity ),
		{
			'overlay-opacity': opacity !== 0,
		}
	);
	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	return [
		isSelected  && (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ ( newAlign ) => setAttributes( { contentAlign: newAlign } ) }
				/>
				<Toolbar>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { url: media.url, id: media.id } ) }
						type="image"
						value={ id }
						render={ ( { open } ) => (
							<IconButton
								className="components-toolbar-control"
								label={ __( 'Edit image' ) }
								icon="edit"
								onClick={ open }
							/>
						) }
					/>
				</Toolbar>
			</BlockControls>
		),
		isSelected && (
			<InspectorControls>
				<PanelBody title={ __( 'General' ) }>
					<RangeControl
						label={ __( 'Background Opacity' ) }
						value={ opacity }
						min={ 0 }
						max={ 10 }
						step={ 1 }
						onChange={ ( ratio ) => setAttributes( { opacity: ratio } ) }
					/>
					<SelectControl
						label={ __( 'Button Size' ) }
						value={ size }
						options={ buttonSizes.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => {
							setAttributes( { size: newSize } );
						} }
					/>
					<RangeControl
						label={ __( 'Corner Radius' ) }
						value={ buttonRadius }
						min="1"
						max="50"
						onChange={ ( cornerRadius ) => setAttributes( { buttonRadius: cornerRadius } ) }
					/>
				</PanelBody>
				<PanelColorSettings
					initialOpen={ false }
					title={ __( 'Text Colors' ) }
					colorSettings={ [
						{
							value: headingColor,
							onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
							label: __( 'Heading Color' ),
						},
						{
							value: descriptionColor,
							onChange: ( colorValue ) => setAttributes( { descriptionColor: colorValue } ),
							label: __( 'Description Color' ),
						},
						{
							value: backgroundColor,
							onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
							label: __( 'Hero Section Background Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelColorSettings
					initialOpen={ false }
					title={ __( 'Button Colors' ) }
					colorSettings={ [
						{
							value: buttonColor,
							onChange: ( colorValue ) => setAttributes( { buttonColor: colorValue } ),
							label: __( 'Button Color' ),
						},
						{
							value: buttonTextColor,
							onChange: ( colorValue ) => setAttributes( { buttonTextColor: colorValue } ),
							label: __( 'Button Text Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		),
		<div key={ 'editable' }
			className={ `dgb-hero ${ imageClass } ` }
		>
			<div className={ `dgb-hero-overlay ${ opacityClass }` }
				style={ {
					backgroundColor: backgroundColor,
				} }
			>
			</div>
			<MediaUpload
				onSelect={ ( media ) => setAttributes( { url: media.url, id: media.id } ) }
				type={ 'image' }
				value={ id }
				render={ function( obj ) {
					return [
						! url && (
							<Button
								className={ id ? '' : 'button button-large' }
								onClick={ obj.open }
							>
								{ __( 'Upload Image' ) }
							</Button>
						),
					];
				} }
			/>
			<section
				key="preview"
				data-url={ url }
				style={ style }
				className={ 'dgb-hero-section' }
			>
				<RichText
					tagName="h2"
					className={ 'dgb-hero-title' }
					placeholder={ title.default }
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					isSelected={ isSelected && editable === 'title' }
					onFocus={ onSetActiveEditable( 'title' ) }
					style={ {
						textAlign: contentAlign,
						color: headingColor,
					} }
				/>
				<RichText
					tagName="p"
					className={ 'dgb-hero-description' }
					placeholder={ description.default }
					value={ description }
					onChange={ ( value ) => setAttributes( { description: value } ) }
					isSelected={ isSelected && editable === 'description' }
					onFocus={ onSetActiveEditable( 'description' ) }
					style={ {
						textAlign: contentAlign,
						color: descriptionColor,
					} }
				/>
				<span key={ 'button' }
					className={ `wp-block-button dgb-button-${contentAlign}` }>
					<RichText
						tagName={ 'span' }
						placeholder={ buttonText.default }
						value={ buttonText }
						onChange={ ( text ) => setAttributes( { buttonText: text } ) }
						className={ `wp-dgb-button dgb-button-${ size }` }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: buttonRadius + 'px',
						} }
						isSelected={ isSelected && editable === 'buttonText' }
						onFocus={ onSetActiveEditable( 'buttonText' ) }
						keepPlaceholderOnFocus
					/>
				</span>

			</section>
		</div>,
		isSelected && (
			<form
				key={ 'form-link' }
				onSubmit={ ( event ) => event.preventDefault() }
				className={ `blocks-button__inline-link dgb-button-${ contentAlign }` }>
				<Dashicon icon={ 'admin-links' } />
				<URLInput
					value={ buttonURL }
					onChange={ ( value ) => setAttributes( { buttonURL: value } ) }
				/>
				<IconButton
					icon={ 'editor-break' }
					label={ __( 'Apply' ) }
					type={ 'submit' }
				/>
			</form>
		),
	];
};
export const save = ( props ) => {
	const {
		url,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		buttonRadius,
		size,
		title,
		headingColor,
		description,
		descriptionColor,
		backgroundColor,
		opacity,
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: buttonColor,
		color: buttonTextColor,
		borderRadius: buttonRadius + 'px',
	};

	const style = url ? { backgroundImage: `url(${ url })` } : undefined;
	const imageClass = url ? 'has-image' : '';
	const opacityClass = classnames(
		addOpacityToClass( opacity ),
		{
			'overlay-opacity': opacity !== 0,
		}
	);

	const displayNone = ( ! title.length && ! description.length && ! buttonText.length ) ? 'has-no-content' : 'has-content';

	return (
		<div className={ `dgb-hero ${ imageClass } ${ displayNone }` }>
			<div className={ `dgb-hero-overlay ${ opacityClass }` }
				style={ { backgroundColor: backgroundColor } }>
			</div>
			<section
				key="preview"
				data-url={ url }
				style={ style }
				className={ 'dgb-hero-section' }>
				{ title && !! title.length && (
					<h2 className={ 'dgb-hero-title' } style={ { color: headingColor } }>
						{ title }
					</h2>
				) }
				{ description && !! description.length && (
					<p className={ 'dgb-hero-description' } style={ { color: descriptionColor } }>
						{ description }
					</p>
				) }
				{ buttonText && !! buttonText.length && (
					<a
						href={ buttonURL }
						className={ `wp-dgb-button dgb-button-${ size }` }
						style={ buttonStyle }>
						{ buttonText }
					</a>
				) }
			</section>
		</div>
	);

};
/**
 * Register: Gutenberg Block.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

// Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block. Here we have used "dgb".
registerBlockType( 'dgb/hero', {
	title: __( 'Hero Section' ),
	icon: HeroIcon,
	category: 'demoify-blocks',
	description: 'Demoify Hero Header block is Lightweight, flexible component for showcasing hero unit style content.',
	keywords: [
		__( 'Hero Header' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
			default: __( 'Heading Title' ),
		},
		description: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.' ),
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-hero .dgb-hero-section',
			attribute: 'data-url',
		},
		buttonURL: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		headingColor: {
			type: 'string',
			default: '#ffffff',
		},
		descriptionColor: {
			type: 'string',
			default: '#ffffff',
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: '.dgb-hero a.wp-dgb-button',
			default: __( 'Button' ),
		},
		buttonColor: {
			type: 'string',
			default: '#2091e1',
		},
		buttonTextColor: {
			type: 'string',
			default: '#ffffff',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		buttonRadius: {
			type: 'number',
			default: 4,
		},
		contentAlign: {
			type: 'string',
			default: 'center',
		},
		id: {
			type: 'number',
		},
		backgroundColor: {
			type: 'string',
			default: '#000000',
		},
		opacity: {
			type: 'number',
			default: 5,
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );

function addOpacityToClass( ratio ) {
	return ( ratio === 0 ) ?
		null :
		'overlay-opacity-' + ( 1 * Math.round( ratio / 1 ) );
}
