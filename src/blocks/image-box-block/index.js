/**
 * BLOCK: Image Box Block.
 *
 */

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
import { ImageBoxIcon } from '../../icons';

import {
	registerBlockType,
	__,
	IconButton,
	PanelColorSettings,
	Toolbar,
	Button,
	RangeControl,
	SelectControl,
	ToggleControl,
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls,
	PanelBody,
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
		heading,
		headingColor,
		subHeading,
		subHeadingColor,
		overlayColor,
		id,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		full,
	} = props.attributes;

	const imageClass = url ? 'has-image' : '';

	const fullWidth = full ? 'full-width' : '';

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	const vertical = [
		{ value: 'flex-start', label: __( 'Top' ) },
		{ value: 'center', label: __( 'Center' ) },
		{ value: 'flex-end', label: __( 'Bottom' ) },
	];

	const horizontal = [
		{ value: 'flex-start', label: __( 'Left' ) },
		{ value: 'center', label: __( 'Center' ) },
		{ value: 'flex-end', label: __( 'Right' ) },
	];

	return [
		isSelected && (
			<BlockControls key="controls">
				{ url && (
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
				) }
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<PanelBody>
					<ToggleControl
						label="Full-Width"
						checked={ !! full }
						onChange={ () => setAttributes( { full: ! full } ) }
					/>
					<RangeControl
						label={ __( 'Height' ) }
						value={ height }
						min="135"
						max="700"
						onChange={ ( height ) => setAttributes( { height: height } ) }
					/>
					<RangeControl
						label={ __( 'Width' ) }
						value={ width }
						min="400"
						max="999"
						onChange={ ( width ) => setAttributes( { width: width } ) }
					/>
					<SelectControl
						label={ __( 'Vertical Alignment' ) }
						value={ verticalAlign }
						options={ vertical.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => {
							setAttributes( { verticalAlign: newSize } );
						} }
					/>
					<SelectControl
						label={ __( 'Horizontal Alignment' ) }
						value={ horizontalAlign }
						options={ horizontal.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => {
							setAttributes( { horizontalAlign: newSize } );
						} }
					/>
				</PanelBody>
				<PanelColorSettings
					heading={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: overlayColor,
							onChange: ( colorValue ) => setAttributes( { overlayColor: colorValue } ),
							label: __( 'Overlay Color' ),
						},
						{
							value: headingColor,
							onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
							label: __( 'heading Color' ),
						},
						{
							value: subHeadingColor,
							onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
							label: __( 'Sub Heading Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		),
		<div key={ 'editable' }
			className={ `dgb-image-box ${ imageClass } ${ fullWidth }` }
			data-url={ url }
			style={ {
				width: width + 'px',
				height: height + 'px',
				backgroundImage: `url(${ url })`,
				alignItems: horizontalAlign,
				justifyContent: verticalAlign,
			} }
		>
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
			<a href="#" style={ { backgroundColor: overlayColor } } />
			<RichText
				tagName="h4"
				placeholder={ heading.default }
				value={ heading }
				onChange={ ( value ) => setAttributes( { heading: value } ) }
				isSelected={ isSelected && editable === 'heading' }
				onFocus={ onSetActiveEditable( 'heading' ) }
				style={ {
					color: headingColor,
				} }
			/>
			<RichText
				tagName="p"
				placeholder={ subHeading.default }
				value={ subHeading }
				onChange={ ( value ) => setAttributes( { subHeading: value } ) }
				isSelected={ isSelected && editable === 'subHeading' }
				onFocus={ onSetActiveEditable( 'subHeading' ) }
				style={ {
					color: subHeadingColor,
				} }
			/>
		</div>,
	];
};

export const save = ( props ) => {
	const {
		url,
		heading,
		headingColor,
		subHeading,
		subHeadingColor,
		overlayColor,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		full,
	} = props.attributes;

	const imageClass = url ? 'has-image' : '';
	const fullWidth = full ? 'full-width' : '';
	const displayNone = ( ! heading.length && ! subHeading.length ) ? 'has-no-content' : 'has-content';

	return (
		<div className={ `dgb-image-box ${ imageClass } ${ displayNone } ${ fullWidth }` }
			data-url={ url }
			style={ {
				width: width + 'px',
				height: height + 'px',
				backgroundImage: `url(${ url })`,
				alignItems: horizontalAlign,
				justifyContent: verticalAlign,
			} }
		>
			<a href="#" style={ { backgroundColor: overlayColor } } />
			{ heading && !! heading.length && (
				<h4 style={ { color: headingColor } }>
					{ heading }
				</h4>
			) }
			{ subHeading && !! subHeading.length && (
				<p style={ { color: subHeadingColor } }>
					{ subHeading }
				</p>
			) }
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
registerBlockType( 'dgb/image-box', {
	title: __( 'Image Box' ),
	icon: ImageBoxIcon,
	description: 'Demoify image box block is used to show image block with gradient overlay and the content you want to display ahead of overlay.',
	category: 'demoify-blocks',
	keywords: [
		__( 'Image Block' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		heading: {
			type: 'array',
			source: 'children',
			selector: 'h4',
			default: __( 'Main Heading' ),
		},
		subHeading: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'SubHeading Must Be Here.' ),
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-image-box',
			attribute: 'data-url',
		},
		headingColor: {
			type: 'string',
			default: '#ffffff',
		},
		subHeadingColor: {
			type: 'string',
			default: '#ffffff',
		},
		overlayColor: {
			type: 'string',
			default: '#000000',
		},
		id: {
			type: 'number',
		},
		width: {
			type: 'number',
			default: '500',
		},
		height: {
			type: 'number',
			default: '500',
		},
		verticalAlign: {
			type: 'string',
			default: 'center',
		},
		horizontalAlign: {
			type: 'string',
			default: 'center',
		},
		full: {
			type: 'boolean',
			default: false,
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
