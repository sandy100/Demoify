/**
 * BLOCK: Call To Action
 *
 */

/**
 * Internal dependencies
 */

import './styles/style.scss';
import './styles/editor.scss';
import { CallToActionIcon } from '../../icons';

import {
	registerBlockType,
	__,
	PanelColorSettings,
	Dashicon,
	IconButton,
	SelectControl,
	RangeControl,
	InspectorControls,
	RichText,
	PanelBody,
	URLInput,
} from '../../wp-imports';

export const edit = ( props ) => {
	const {
		isSelected,
		editable,
		setState,
		setAttributes,
	} = props;

	const {
		url,
		buttonText,
		callToActionTitle,
		description,
		color,
		textColor,
		size,
		buttonBorderRadius,
		descriptionColor,
		titleColor,
		backgroundColor,
	} = props.attributes;

	const linkOptions = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	return [
		<div key={ 'editable' } className={ 'dgb-cta' } style={ { backgroundColor: backgroundColor } }>
			<RichText
				className={ 'dgb-cta-title' }
				tagName={ 'h3' }
				placeholder={ __( 'Add Title' ) }
				value={ callToActionTitle }
				onChange={ ( text ) => setAttributes( { callToActionTitle: text } ) }
				isSelected={ isSelected && editable === 'callToActionTitle' }
				onFocus={ onSetActiveEditable( 'callToActionTitle' ) }
				keepPlaceholderOnFocus
				style={ {
					color: titleColor,
				} }
			/>
			<RichText
				tagName={ 'p' }
				value={ description }
				className={ 'dgb-cta-description' }
				onChange={ ( text ) => setAttributes( { description: text } ) }
				isSelected={ isSelected && editable === 'description' }
				onFocus={ onSetActiveEditable( 'description' ) }
				placeholder={ __( 'Write body text…' ) }
				style={ {
					color: descriptionColor,
				} }
			/>
			<span key={ 'button' }
				className={ 'wp-block-button dgb-cta-button' }>
				<RichText
					tagName={ 'span' }
					placeholder={ __( 'Add Text' ) }
					value={ buttonText }
					onChange={ ( text ) => setAttributes( { buttonText: text } ) }
					isSelected={ isSelected && editable === 'buttonText' }
					onFocus={ onSetActiveEditable( 'buttonText' ) }
					className={ `wp-dgb-button dgb-button-${ size }` }
					style={ {
						backgroundColor: color,
						color: textColor,
						borderRadius: buttonBorderRadius + 'px',
					} }
					keepPlaceholderOnFocus
				/>
				{
					isSelected &&
					<InspectorControls key={ 'inspector' }>
						<PanelBody>
							<SelectControl
								label={ __( 'Button Size' ) }
								value={ size }
								options={ linkOptions.map( ( { value, label } ) => ( {
									value: value,
									label: label,
								} ) ) }
								onChange={ ( newSize ) => {
									setAttributes( { size: newSize } );
								} }
							/>
							<RangeControl
								label={ __( 'Button Border Radius' ) }
								value={ buttonBorderRadius }
								min="0"
								max="50"
								onChange={ ( borderRadius ) => setAttributes( { buttonBorderRadius: borderRadius } ) }
							/>
						</PanelBody>
						<PanelColorSettings
							initialOpen={ false }
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									value: titleColor,
									onChange: ( colorValue ) => setAttributes( { titleColor: colorValue } ),
									label: __( 'Title Color' ),
								},
								{
									value: descriptionColor,
									onChange: ( colorValue ) => setAttributes( { descriptionColor: colorValue } ),
									label: __( 'Description Color' ),
								},
							] }
						>
						</PanelColorSettings>
						<PanelColorSettings
							title={ __( 'Button Colors' ) }
							colorSettings={ [
								{
									value: color,
									onChange: ( colorValue ) => setAttributes( { color: colorValue } ),
									label: __( 'Button Background Color' ),
								},
								{
									value: textColor,
									onChange: ( colorValue ) => setAttributes( { textColor: colorValue } ),
									label: __( 'Button Text Color' ),
								},
								{
									value: backgroundColor,
									onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
									label: __( 'Background Color' ),
								},
							] }
						>
						</PanelColorSettings>
					</InspectorControls>
				}
			</span>
			{
				isSelected && (
					<form
						key={ 'form-link' }
						onSubmit={ ( event ) => event.preventDefault() }
						className={ 'blocks-button-inline-link' }>
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
				)
			}
		</div>,
	];
};
export const save = ( props ) => {
	const {
		url,
		buttonText,
		callToActionTitle,
		description,
		color,
		textColor,
		size,
		buttonBorderRadius,
		descriptionColor,
		titleColor,
		backgroundColor,
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: color,
		color: textColor,
		borderRadius: buttonBorderRadius + 'px',
	};

	return (
		<div className={ 'dgb-cta' } style={ { backgroundColor: backgroundColor } }>
			{ callToActionTitle && !! callToActionTitle.length && (
				<h3
					className={ 'dgb-cta-title' }
					style={ { color: titleColor } }>
					{ callToActionTitle }
				</h3>
			) }
			{ description && !! description.length && (
				<p
					className={ 'dgb-cta-description' }
					style={ { color: descriptionColor } }>
					{ description }
				</p>
			) }
			{ buttonText && !! buttonText.length && (
				<a
					href={ url }
					className={ `wp-dgb-button dgb-cta-button dgb-button-${ size }` }
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
registerBlockType( 'dgb/cta', {
	title: __( 'Call To Action' ),
	icon: CallToActionIcon,
	category: 'demoify-blocks',
	description: 'Demoify call to action block directs your audience to the action that you want on pages.',
	keywords: [
		__( 'Call To Action' ),
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
		callToActionTitle: {
			type: 'array',
			source: 'children',
			selector: 'h3',
			default: __( 'Get Started Today' ),
		},
		description: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'Demoify is a collection of content blocks for the new Gutenberg block editor. Blocks are chunks of content such as paragraphs, images, Tabs, columns, testimonials, buttons, and more. Demoify blocks give you more control to quickly create and launch any kind of site you want.' ),
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		color: {
			type: 'string',
			default: '#2091e1',
		},
		textColor: {
			type: 'string',
			default: '#ffffff',
		},
		titleColor: {
			type: 'string',
		},
		descriptionColor: {
			type: 'string',
		},
		backgroundColor: {
			type: 'string',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		buttonBorderRadius: {
			type: 'number',
			default: 4,
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
