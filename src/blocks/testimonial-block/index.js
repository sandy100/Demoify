/**
 * BLOCK: Testimonial Block
 *
 */
/**
 * Internal dependencies
 */

import './styles/style.scss';
import './styles/editor.scss';
import { TestimonialIcon } from '../../icons';

import {
	registerBlockType,
	__,
	PanelColorSettings,
	Button,
	SelectControl,
	InspectorControls,
	RichText,
	MediaUpload,
	BlockControls,
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
		testimonialTitleOne,
		testimonialTitleTwo,
		testimonialTitleThree,
		descriptionOne,
		descriptionTwo,
		descriptionThree,
		positionOne,
		positionTwo,
		positionThree,
		mediaIdOne,
		mediaIdTwo,
		mediaIdThree,
		mediaUrlOne,
		mediaUrlTwo,
		mediaUrlThree,
		columns,
		titleColor,
		authorColor,
		descriptionTextColor,
		iconColor,
	} = props.attributes;

	const column = [
		{ value: '1', label: __( 'One Column' ) },
		{ value: '2', label: __( 'Two Column' ) },
		{ value: '3', label: __( 'Three Column' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	return [
		isSelected && (
			<BlockControls />
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<PanelBody>
					<SelectControl
						label={ __( 'Column Number' ) }
						value={ columns }
						options={ column.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newColumns ) => {
							setAttributes( { columns: newColumns } );
						} }
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
							value: authorColor,
							onChange: ( colorValue ) => setAttributes( { authorColor: colorValue } ),
							label: __( 'Position Color' ),
						},
						{
							value: descriptionTextColor,
							onChange: ( colorValue ) => setAttributes( { descriptionTextColor: colorValue } ),
							label: __( 'Body Text Color' ),
						},
						{
							value: iconColor,
							onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
							label: __( 'Icon Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		),
		<div key={ 'editable' } className={ `dgb-testimonial column-${ columns }` }>
			<div className={ 'dgb-testimonial-column-one' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaUrlOne: media.url, mediaIdOne: media.id } ) }
						type={ 'image' }
						value={ mediaIdOne }
						render={ function( obj ) {
							return <Button
								className={ mediaIdOne ? '' : 'button button-large' }
								onClick={ obj.open } >
								{
									mediaIdOne ? <div className="testimonial-image" style={ { backgroundImage: `url(${ mediaUrlOne })` } }></div> : __( 'Upload Image' )
								}
							</Button>;
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ testimonialTitleOne }
					onChange={ ( text ) => setAttributes( { testimonialTitleOne: text } ) }
					isSelected={ isSelected && editable === 'testimonialTitleOne' }
					onFocus={ onSetActiveEditable( 'testimonialTitleOne' ) }
					style={ {
						color: titleColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ positionOne }
					className={ 'dgb-testimonial-position-one' }
					onChange={ ( text ) => setAttributes( { positionOne: text } ) }
					isSelected={ isSelected && editable === 'position' }
					onFocus={ onSetActiveEditable( 'position' ) }
					style={ {
						color: authorColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ descriptionOne }
					className={ 'dgb-testimonial-description-one' }
					onChange={ ( text ) => setAttributes( { descriptionOne: text } ) }
					isSelected={ isSelected && editable === 'body' }
					onFocus={ onSetActiveEditable( 'body' ) }
					style={ {
						color: descriptionTextColor,
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'dgb-testimonial-column-two' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaUrlTwo: media.url, mediaIdTwo: media.id } ) }
						type={ 'image' }
						value={ mediaIdTwo }
						render={ function( obj ) {
							return <Button
								className={ mediaIdTwo ? '' : 'button button-large' }
								onClick={ obj.open } >
								{
									mediaIdTwo ? <div className="testimonial-image" style={ { backgroundImage: `url(${ mediaUrlTwo })` } }></div> : __( 'Upload Image' )
								}
							</Button>;
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ testimonialTitleTwo }
					onChange={ ( text ) => setAttributes( { testimonialTitleTwo: text } ) }
					isSelected={ isSelected && editable === 'testimonialTitleTwo' }
					onFocus={ onSetActiveEditable( 'testimonialTitleTwo' ) }
					style={ {
						color: titleColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ positionTwo }
					className={ 'dgb-testimonial-position-two' }
					onChange={ ( text ) => setAttributes( { positionTwo: text } ) }
					isSelected={ isSelected && editable === 'positionTwo' }
					onFocus={ onSetActiveEditable( 'positionTwo' ) }
					style={ {
						color: authorColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ descriptionTwo }
					className={ 'dgb-testimonial-description-two' }
					onChange={ ( text ) => setAttributes( { descriptionTwo: text } ) }
					isSelected={ isSelected && editable === 'descriptionTwo' }
					onFocus={ onSetActiveEditable( 'descriptionTwo' ) }
					style={ {
						color: descriptionTextColor,
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'dgb-testimonial-column-three' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaUrlThree: media.url, mediaIdThree: media.id } ) }
						type={ 'image' }
						value={ mediaIdThree }
						render={ function( obj ) {
							return <Button
								className={ mediaIdThree ? '' : 'button button-large' }
								onClick={ obj.open } >
								{
									mediaIdThree ? <div className="testimonial-image" style={ { backgroundImage: `url(${ mediaUrlThree })` } }></div> : __( 'Upload Image' )
								}
							</Button>;
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ testimonialTitleThree }
					onChange={ ( text ) => setAttributes( { testimonialTitleThree: text } ) }
					isSelected={ isSelected && editable === 'testimonialTitleThree' }
					onFocus={ onSetActiveEditable( 'testimonialTitleThree' ) }
					style={ {
						color: titleColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ positionThree }
					className={ 'dgb-testimonial-position-three' }
					onChange={ ( text ) => setAttributes( { positionThree: text } ) }
					isSelected={ isSelected && editable === 'positionThree' }
					onFocus={ onSetActiveEditable( 'positionThree' ) }
					style={ {
						color: authorColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ descriptionThree }
					className={ 'dgb-testimonial-description-three' }
					onChange={ ( text ) => setAttributes( { descriptionThree: text } ) }
					isSelected={ isSelected && editable === 'descriptionThree' }
					onFocus={ onSetActiveEditable( 'descriptionThree' ) }
					style={ {
						color: descriptionTextColor,
					} }
					keepPlaceholderOnFocus
				/>
			</div>
		</div>,
	];
};

export const save = ( props ) => {
	const {
		testimonialTitleOne,
		testimonialTitleTwo,
		testimonialTitleThree,
		descriptionOne,
		descriptionTwo,
		descriptionThree,
		positionOne,
		positionTwo,
		positionThree,
		mediaUrlOne,
		mediaUrlTwo,
		mediaUrlThree,
		titleColor,
		authorColor,
		descriptionTextColor,
		iconColor,
		columns,
	} = props.attributes;

	const quoteIcon = (
		<div key="button" className={ 'quote-icon' }>
			<svg viewBox="0 0 512 512" style={ { fill: iconColor } }>
				<path d="M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z" />
			</svg>
		</div>
	);

	return (
		<div className={ `dgb-testimonial column-${ columns }` }>
			<div className={ 'dgb-testimonial-column-one' }>
				{ mediaUrlOne ? <div className="testimonial-image" style={ { backgroundImage: `url(${ mediaUrlOne })` } } data-src={ mediaUrlOne }></div> : quoteIcon }
				{ testimonialTitleOne && !! testimonialTitleOne.length && (
					<h4 style={ { color: titleColor } }>
						{ testimonialTitleOne }
					</h4>
				) }
				{ positionOne && !! positionOne.length && (
					<p className={ 'dgb-testimonial-position-one' } style={ { color: authorColor } }>
						{ positionOne }
					</p>
				) }
				{ descriptionOne && !! descriptionOne.length && (
					<p className={ 'dgb-testimonial-description-one' } style={ { color: descriptionTextColor } }>
						{ descriptionOne }
					</p>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'dgb-testimonial-column-two' }>
					{ mediaUrlTwo ? <div className="testimonial-image" style={ { backgroundImage: `url(${ mediaUrlTwo })` } } data-src={ mediaUrlTwo }></div> : quoteIcon }
					{ testimonialTitleTwo && !! testimonialTitleTwo.length && (
						<h4 style={ { color: titleColor } }>
							{ testimonialTitleTwo }
						</h4>
					) }
					{ positionTwo && !! positionTwo.length && (
						<p className={ 'dgb-testimonial-position-two' } style={ { color: authorColor } }>
							{ positionTwo }
						</p>
					) }
					{ descriptionTwo && !! descriptionTwo.length && (
						<p className={ 'dgb-testimonial-description-two' } style={ { color: descriptionTextColor } }>
							{ descriptionTwo }
						</p>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'dgb-testimonial-column-three' }>
					{ mediaUrlThree ? <div className="testimonial-image" style={ { backgroundImage: `url(${ mediaUrlThree })` } } data-src={ mediaUrlThree }></div> : quoteIcon }
					{ testimonialTitleThree && !! testimonialTitleThree.length && (
						<h4 style={ { color: titleColor } }>
							{ testimonialTitleThree }
						</h4>
					) }
					{ positionThree && !! positionThree.length && (
						<p className={ 'dgb-testimonial-position-three' } style={ { color: authorColor } }>
							{ positionThree }
						</p>
					) }
					{ descriptionThree && !! descriptionThree.length && (
						<p className={ 'dgb-testimonial-description-three' } style={ { color: descriptionTextColor } }>
							{ descriptionThree }
						</p>
					) }
				</div>
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
registerBlockType( 'dgb/testimonial', {
	title: __( 'Testimonial' ),
	icon: TestimonialIcon,
	category: 'demoify-blocks',
	description: 'Demoify testimonial block block is used to show consists of a person \'s written or spoken statement extolling the virtue of a product.',
	keywords: [
		__( 'Testimonial' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		href: {
			type: 'url',
		},
		hrefTwo: {
			type: 'url',
		},
		hrefThree: {
			type: 'url',
		},
		mediaIdOne: {
			type: 'number',
		},
		mediaIdTwo: {
			type: 'number',
		},
		mediaIdThree: {
			type: 'number',
		},
		mediaUrlOne: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-testimonial-column-one .testimonial-image',
			attribute: 'data-src',
		},
		mediaUrlTwo: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-testimonial-column-two .testimonial-image',
			attribute: 'data-src',
		},
		mediaUrlThree: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-testimonial-column-three .testimonial-image',
			attribute: 'data-src',
		},
		testimonialTitleOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-column-one h4',
			default: __( 'CP Thapa' ),
		},
		testimonialTitleTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-column-two h4',
			default: __( 'Sandeep Bhatt' ),
		},
		testimonialTitleThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-column-three h4',
			default: __( 'John Doe' ),
		},
		positionOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-position-one',
			default: __( 'Founder' ),
		},
		positionTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-position-two',
			default: __( 'Editor' ),
		},
		positionThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-position-three',
			default: __( 'Programmer' ),
		},
		descriptionOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-description-one',
			default: __( 'We love Demoify and actively use Demoify products to shape our work.' ),
		},
		descriptionTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-description-two',
			default: __( 'Demoify is a very useful, first point of call reference and information tool for us when we\'re starting new projects.' ),
		},
		descriptionThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-testimonial-description-three',
			default: __( 'Knowledge is power and Demoify gives you the competitive edge. It’s a rich source of insights and can be the secret weapon for a powerful strategy.' ),
		},
		titleColor: {
			type: 'string',
		},
		positionColor: {
			type: 'string',
		},
		descriptionColor: {
			type: 'string',
		},
		iconColor: {
			type: 'string',
		},
		columns: {
			type: 'select',
			default: '1',
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
