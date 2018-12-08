/**
 * BLOCK: Button Block.
 *
 */

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
import { ButtonIcon } from '../../icons';

import {
	registerBlockType,
	__,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	RichText,
	PanelColorSettings,
	Dashicon,
	IconButton,
	SelectControl,
	RangeControl,
	URLInput,
	PanelBody,
} from '../../wp-imports';

export const edit = ( props ) => {
	const { isSelected, setAttributes } = props;
	const { url, text, color, textColor, size, textAlignment, cornerButtonRadius } = props.attributes;
	const linkOptions = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	return [
		isSelected && (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlignment: nextAlign } );
					} }
				/>
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<PanelBody>
					<SelectControl
						label={ __( 'Size' ) }
						value={ size }
						options={ linkOptions.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => { setAttributes( { size: newSize } ) } }
					/>
					<RangeControl
						label={ __( 'Corner Radius' ) }
						value={ cornerButtonRadius }
						min='1'
						max='50'
						onChange={ ( cornerRad ) => setAttributes( { cornerButtonRadius: cornerRad } ) }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: color,
							onChange: ( colorValue ) => setAttributes( { color: colorValue } ),
							label: __( 'Background Color' ),
						},
						{
							value: textColor,
							onChange: ( colorValue ) => setAttributes( { textColor: colorValue } ),
							label: __( 'Text Color' ),
						},
					] }
				>
				</PanelColorSettings>

			</InspectorControls>
		),
		<span key={ 'button' }
			className={ `wp-block-button dgb-button-${textAlignment}` }>
			<RichText
				tagName={ 'span' }
				placeholder={ __( 'Enter Text' ) }
				value={ text }
				onChange={ (text) => setAttributes( { text: text } ) }
				formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
				className={`wp-dgb-button dgb-button-${size}`}
				style={ {
					backgroundColor: color,
					color: textColor,
					borderRadius: cornerButtonRadius + 'px',
				} }
				isSelected={ isSelected }
				keepPlaceholderOnFocus
			/>
		</span>,
		isSelected && (
			<form
				key={ 'form-link' }
				onSubmit={ ( event ) => event.preventDefault() }
				className={ `blocks-button-inline-link dgb-button-${textAlignment}`}>
				<Dashicon icon={ 'admin-links' } />
				<URLInput
					value={ url }
					onChange={ ( value ) => setAttributes( { url: value } ) }
				/>
				<IconButton
					icon={ 'editor-break' }
					label={ __( 'Apply' ) }
					type={ 'submit' }
				/>
			</form>
		),
	];
}

export const save = ( props ) => {
	const { url, text, textAlignment, color, textColor, size, cornerButtonRadius } = props.attributes;
	const buttonStyle = {
		backgroundColor: color,
		color: textColor,
		borderRadius: cornerButtonRadius + 'px',
	};

	return (
		<div className={ `dgb-button-${textAlignment}` }>
			<a href={ url } className={ `wp-dgb-button dgb-button-${size}` } style={ buttonStyle }>
				{ text }
			</a>
		</div>
	);
};
/**
 * Register: Gutenberg Block.
 *
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'dgb/button', {
	title: __( 'Button' ), // Block title.
	icon: ButtonIcon, // Button Block Icon. Change icon by adding svg code to icons.js
	description: 'Demoify button includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.',
	category: 'demoify-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed, etc. We have used demoify-blocks, which category is registered on init.php
	keywords: [
		__( 'Button' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		text: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		textAlignment: {
			type: 'string',
			default: 'center',
		},
		color: {
			type: 'string',
			default: '#007bff',
		},
		textColor: {
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
		}
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
