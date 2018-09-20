/**
 * BLOCK: Card
 *
 */

/**
 * Internal dependencies
 */

import './styles/style.scss';
import './styles/editor.scss';
import { CardIcon } from '../../icons';
import {
	registerBlockType,
	__,
	PanelColorSettings,
	Button,
	IconButton,
	Dashicon,
	SelectControl,
	RangeControl,
	Toolbar,
	InspectorControls,
	RichText,
	MediaUpload,
	BlockControls,
	AlignmentToolbar,
	URLInput,
	PanelBody,
} from '../../wp-imports';

export const edit = ( props ) => {
	const {
		isSelected,
		editable,
		setState,
		setAttributes,
	} = props;

	const {
		heading,
		tagline,
		description,
		mediaID,
		mediaURL,
		headingColor,
		taglineColor,
		descriptionColor,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		size,
		cornerButtonRadius,
		contentAlign,
	} = props.attributes;

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	const imageClass = mediaURL ? 'has-image' : '';

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	return [
		isSelected && (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ ( newAlign ) => setAttributes( { contentAlign: newAlign } ) }
				/>
				<Toolbar>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
						type="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<IconButton
								className="components-toolbar__control"
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
			<InspectorControls key={ 'inspector' }>
				<PanelColorSettings
					title={ __( 'Text Colors' ) }
					colorSettings={ [
						{
							value: headingColor,
							onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
							label: __( 'Heading Color' ),
						},
						{
							value: taglineColor,
							onChange: ( colorValue ) => setAttributes( { taglineColor: colorValue } ),
							label: __( 'Tagline Color' ),
						},
						{
							value: descriptionColor,
							onChange: ( colorValue ) => setAttributes( { descriptionColor: colorValue } ),
							label: __( 'Description Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBody
					initialOpen={ false }
					title={ __( 'Button Size' ) }
				>
					<SelectControl
						label={ __( 'Button Size' ) }
						value={ size }
						options={ buttonSizes.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => { setAttributes( { size: newSize } ) } }
					/>
					<RangeControl
						label={ __( 'Corner Radius' ) }
						value={ cornerButtonRadius }
						min="1"
						max="50"
						onChange={ ( cornerRad ) => setAttributes( { cornerButtonRadius: cornerRad } ) }
					/>
				</PanelBody>
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
		<div key={'editable'} className={ `dgb-card ${imageClass}` }>
			<div className="dgb-card-image-container" style={{ backgroundImage: `url(${mediaURL})`, textAlign: contentAlign }}>
				<MediaUpload
					onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
					type={'image'}
					value={mediaID}
					render={ function( obj ) {
						return [
							! mediaURL && (
								<Button
									className={ mediaID ? '' : 'button button-large' }
									onClick={ obj.open }
								>
									{__('Upload Image')}
								</Button>
							)
						]
					} }
				/>
			</div>
			<RichText
				tagName={ 'h4' }
				value={ heading }
				className={ 'dgb-card-heading' }
				onChange={ (text) => setAttributes( { heading: text } ) }
				isSelected={ isSelected && editable === 'heading' }
				onFocus={ onSetActiveEditable( 'heading' ) }
				style={ {
					color: headingColor,
					textAlign: contentAlign
				} }
				keepPlaceholderOnFocus
			/>
			<RichText
				tagName={'p'}
				value={ tagline }
				className={ 'dgb-tagline' }
				onChange={ (text) => setAttributes( { tagline: text } ) }
				isSelected={ isSelected && editable === 'tagline' }
				onFocus={ onSetActiveEditable( 'tagline' ) }
				style={ {
					color: taglineColor,
					textAlign: contentAlign
				} }
				keepPlaceholderOnFocus
			/>
			<RichText
				tagName={'p'}
				value={ description }
				className={ 'dgb-card-description' }
				onChange={ (text) => setAttributes( { description: text } ) }
				isSelected={ isSelected && editable === 'description' }
				onFocus={ onSetActiveEditable( 'description' ) }
				style={ {
					color: descriptionColor,
					textAlign: contentAlign
				} }
				keepPlaceholderOnFocus
			/>
			<span key={ 'button' }
				className={ `wp-block-button dgb-button-${contentAlign}` }>
				<RichText
					tagName={ 'span' }
					placeholder={ buttonText.default }
					value={ buttonText }
					onChange={ (text) => setAttributes( { buttonText: text } ) }
					className={`wp-dgb-button dgb-button-${size}`}
					style={ {
						backgroundColor: buttonColor,
						color: buttonTextColor,
						borderRadius: cornerButtonRadius + 'px',
					} }
					isSelected={ isSelected && editable === 'buttonText' }
					onFocus={ onSetActiveEditable( 'buttonText' ) }
					keepPlaceholderOnFocus
				/>
			</span>
		</div>,

		isSelected && (
			<form key={ 'form-link' }
				onSubmit={ ( event ) => event.preventDefault() }
				className={ `blocks-button__inline-link dgb-button-${contentAlign}` }
				style={ { marginTop: 10 } }
			>
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
		heading,
		tagline,
		description,
		mediaURL,
		headingColor,
		taglineColor,
		descriptionColor,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		size,
		cornerButtonRadius,
		contentAlign,
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: buttonColor,
		color: buttonTextColor,
		borderRadius: cornerButtonRadius + 'px',
	};

	const imageClass = mediaURL ? 'has-image' : ''
	const displayNone = ( ! heading.length && ! tagline.length && ! description.length && ! buttonText.length ) ? 'has-no-content' : 'has-content'

	return (
		<div className={ `dgb-card ${imageClass} ${displayNone}` }>
			{ mediaURL && <div className="dgb-card-image-container" style={{ backgroundImage: `url(${mediaURL})`, textAlign: contentAlign }} data-src={mediaURL}></div> }
			{ heading && !! heading.length && (
				<h4 style={ { color: headingColor, textAlign: contentAlign } }>
					{ heading }
				</h4>
			) }
			{ tagline && !! tagline.length && (
				<p className={ 'dgb-tagline' } style={ { color: taglineColor, textAlign: contentAlign } }>
					{ tagline }
				</p>
			) }
			{ description && !! description.length && (
				<p className={ 'dgb-card-description' } style={ { color: descriptionColor, textAlign: contentAlign } }>
					{ description }
				</p>
			) }
			{ buttonText && !! buttonText.length && (
				<a
					href={ buttonURL }
					className={ `wp-dgb-button wp-block-button dgb-button-${size} dgb-button-${contentAlign}` }
					style={ buttonStyle }>
					{ buttonText }
				</a>
			) }
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
registerBlockType( 'dgb/card', {
	title: __( 'Card' ),
	icon: CardIcon, // Card Block Icon. Change icon by adding svg code to icons.js
	category: 'demoify-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed, etc. We have used demoify-blocks, which category is registered on init.php
	description: 'Demoify cards provide a flexible and extensible content container with multiple variants and options.',
	keywords: [
		__( 'Card' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-card-image-container',
			attribute: 'data-src',
		},
		heading: {
			type: 'array',
			source: 'children',
			selector: '.dgb-card h4',
			default: __( 'Sandeep Bhatt' ),
		},
		tagline: {
			type: 'array',
			source: 'children',
			selector: '.dgb-tagline',
			default: __( 'Sandeep is the React JS Developer.' ),
		},
		description: {
			type: 'array',
			source: 'children',
			selector: '.dgb-card-description',
			default: __( 'Sandeep is the React JS developer. He loves programming and traveling.' ),
		},
		headingColor: {
			type: 'string',
		},
		taglineColor: {
			type: 'string',
		},
		descriptionColor: {
			type: 'string',
		},
		buttonURL: {
			type: 'string',
			source: 'attribute',
			selector: '.wp-dgb-button',
			attribute: 'href',
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: '.wp-block-button',
			default: __( 'Button' ),
		},
		buttonColor: {
			type: 'string',
			default: '#007bff',
		},
		buttonTextColor: {
			type: 'string',
			default: '#ffffff',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		cornerButtonRadius: {
			type: 'number',
			default: 4,
		},
		contentAlign: {
			type: 'string',
			default: 'left',
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
