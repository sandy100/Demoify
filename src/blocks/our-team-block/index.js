/**
 * BLOCK: Our Team
 *
 */

/**
 * Internal dependencies
 */

import './styles/style.scss';
import './styles/editor.scss';
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
import { OurTeamIcon } from '../../icons';

export const edit = ( props ) => {
	const {
		isSelected,
		editable,
		setState,
		setAttributes,
	} = props;

	const {
		name,
		nameTwo,
		nameThree,
		description,
		descriptionTwo,
		descriptionThree,
		position,
		positionTwo,
		positionThree,
		mediaID,
		mediaIDTwo,
		mediaIDThree,
		mediaURL,
		mediaURLTwo,
		mediaURLThree,
		columns,
		nameColor,
		positionColor,
		descriptionColor,
		iconColor,
		shapes,
	} = props.attributes;

	const column = [
		{ value: '1', label: __( 'One Column' ) },
		{ value: '2', label: __( 'Two Column' ) },
		{ value: '3', label: __( 'Three Column' ) },
	];
	const shape = [
		{ value: 'square', label: __( 'Square' ) },
		{ value: 'circle', label: __( 'Circle' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};
	return [
		isSelected && (
			<BlockControls key="controls" />
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<PanelBody>
					<SelectControl
						label={ __( 'Image Shape' ) }
						value={ shapes }
						options={ shape.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newShape ) => {
							setAttributes( { shapes: newShape } );
						} }
					/>
					<SelectControl
						label={ __( 'Column Number' ) }
						value={ columns }
						options={ column.map( ({ value, label }) => ( {
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
							value: nameColor,
							onChange: ( colorValue ) => setAttributes( { nameColor: colorValue } ),
							label: __( 'Name Color' ),
						},
						{
							value: positionColor,
							onChange: ( colorValue ) => setAttributes( { positionColor: colorValue } ),
							label: __( 'Position Color' ),
						},
						{
							value: descriptionColor,
							onChange: ( colorValue ) => setAttributes( { descriptionColor: colorValue } ),
							label: __( 'Description Color' ),
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
		<div key={ 'editable' } className={ `dgb-team-member column-${ columns } image-${ shapes }` }>
			<div className={ 'dgb-team-member-column-one' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
						type={ 'image' }
						value={ mediaID }
						render={ function( obj ) {
							return <Button
								className={ mediaID ? '' : 'button button-large' }
								onClick={ obj.open } >
								{
									mediaID ? <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURL })` } }></div> : __( 'Upload Image' )
								}
							</Button>;
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ name }
					onChange={ ( text ) => setAttributes( { name: text } ) }
					isSelected={ isSelected && editable === 'name' }
					onFocus={ onSetActiveEditable( 'name' ) }
					style={ {
						color: nameColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ position }
					className={ 'dgb-team-member-position' }
					onChange={ ( text ) => setAttributes( { position: text } ) }
					isSelected={ isSelected && editable === 'position' }
					onFocus={ onSetActiveEditable( 'position' ) }
					style={ {
						color: positionColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ description }
					className={ 'dgb-team-member-description' }
					onChange={ ( text ) => setAttributes( { description: text } ) }
					isSelected={ isSelected && editable === 'description' }
					onFocus={ onSetActiveEditable( 'description' ) }
					style={ {
						color: descriptionColor,
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'dgb-team-member-column-two' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURLTwo: media.url, mediaIDTwo: media.id } ) }
						type={ 'image' }
						value={ mediaIDTwo }
						render={ function( obj ) {
							return <Button
								className={ mediaIDTwo ? '' : 'button button-large' }
								onClick={ obj.open } >
								{
									mediaIDTwo ? <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURLTwo })` } }></div> : __( 'Upload Image' )
								}
							</Button>;
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ nameTwo }
					onChange={ ( text ) => setAttributes( { nameTwo: text } ) }
					isSelected={ isSelected && editable === 'nameTwo' }
					onFocus={ onSetActiveEditable( 'nameTwo' ) }
					style={ {
						color: nameColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ positionTwo }
					className={ 'dgb-team-member-position' }
					onChange={ ( text ) => setAttributes( { positionTwo: text } ) }
					isSelected={ isSelected && editable === 'positionTwo' }
					onFocus={ onSetActiveEditable( 'positionTwo' ) }
					style={ {
						color: positionColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ descriptionTwo }
					className={ 'dgb-team-member-description-two' }
					onChange={ ( text ) => setAttributes( { descriptionTwo: text } ) }
					isSelected={ isSelected && editable === 'descriptionTwo' }
					onFocus={ onSetActiveEditable( 'descriptionTwo' ) }
					style={ {
						color: descriptionColor,
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'dgb-team-member-column-three' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURLThree: media.url, mediaIDThree: media.id } ) }
						type={'image'}
						value={ mediaIDThree }
						render={ function( obj ) {
							return <Button
								className={ mediaIDThree ? '' : 'button button-large' }
								onClick={ obj.open } >
								{
									mediaIDThree ? <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURLThree })` } }></div> : __( 'Upload Image' )
								}
							</Button>;
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ nameThree }
					onChange={ ( text ) => setAttributes( { nameThree: text } ) }
					isSelected={ isSelected && editable === 'nameThree' }
					onFocus={ onSetActiveEditable( 'nameThree' ) }
					style={ {
						color: nameColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ positionThree }
					className={ 'dgb-team-member-position' }
					onChange={ ( text ) => setAttributes( { positionThree: text } ) }
					isSelected={ isSelected && editable === 'positionThree' }
					onFocus={ onSetActiveEditable( 'positionThree' ) }
					style={ {
						color: positionColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ descriptionThree }
					className={ 'dgb-team-member-description-three' }
					onChange={ ( text ) => setAttributes( { descriptionThree: text } ) }
					isSelected={ isSelected && editable === 'descriptionThree' }
					onFocus={ onSetActiveEditable( 'descriptionThree' ) }
					style={ {
						color: descriptionColor,
					} }
					keepPlaceholderOnFocus
				/>
			</div>
		</div>,
	];
};
export const save = ( props ) => {
	const {
		name,
		nameTwo,
		nameThree,
		shapes,
		description,
		descriptionTwo,
		descriptionThree,
		position,
		positionTwo,
		positionThree,
		mediaURL,
		mediaURLTwo,
		mediaURLThree,
		nameColor,
		positionColor,
		descriptionColor,
		columns,
	} = props.attributes;

	return (
		<div className={ `dgb-team-member column-${ columns } image-${ shapes }` }>
			<div className={ 'dgb-team-member-column-one' }>
				{ mediaURL && <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURL })` } } data-src={ mediaURL }></div> }
				{ name && !! name.length && (
					<h4 style={ { color: nameColor } }>
						{ name }
					</h4>
				) }
				{ position && !! position.length && (
					<p className={ 'dgb-team-member-position' } style={ { color: positionColor } }>
						{ position }
					</p>
				) }
				{ description && !! description.length && (
					<p className={ 'dgb-team-member-description' } style={ { color: descriptionColor } }>
						{ description }
					</p>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'dgb-team-member-column-two' }>
					{ mediaURLTwo && <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURLTwo })` } } data-src={ mediaURLTwo }></div> }
					{ nameTwo && !! nameTwo.length && (
						<h4 style={ { color: nameColor } }>
							{ nameTwo }
						</h4>
					) }
					{ positionTwo && !! positionTwo.length && (
						<p className={ 'dgb-team-member-position' } style={ { color: positionColor } }>
							{ positionTwo }
						</p>
					) }
					{ descriptionTwo && !! descriptionTwo.length && (
						<p className={ 'dgb-team-member-description-two' } style={ { color: descriptionColor } }>
							{ descriptionTwo }
						</p>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'dgb-team-member-column-three' }>
					{ mediaURLThree && <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURLThree })` }} data-src={ mediaURLThree }></div> }
					{ nameThree && !! nameThree.length && (
						<h4 style={ { color: nameColor } }>
							{ nameThree }
						</h4>
					) }
					{ positionThree && !! positionThree.length && (
						<p className={ 'dgb-team-member-position' } style={ { color: positionColor } }>
							{ positionThree }
						</p>
					) }
					{ descriptionThree && !! descriptionThree.length && (
						<p className={ 'dgb-team-member-description-three' } style={ { color: descriptionColor } }>
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
registerBlockType( 'dgb/our-team', {
	title: __( 'Our Team' ),
	icon: OurTeamIcon,
	category: 'demoify-blocks',
	description: 'Demoify Our Team block is used to insert team member profile with member details spaces on pages.',
	keywords: [
		__( 'Our Team' ),
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
		mediaID: {
			type: 'number',
		},
		mediaIDTwo: {
			type: 'number',
		},
		mediaIDThree: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-team-member-column-one .team-member-image',
			attribute: 'data-src',
		},
		mediaURLTwo: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-team-member-column-two .team-member-image',
			attribute: 'data-src',
		},
		mediaURLThree: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-team-member-column-three .team-member-image',
			attribute: 'data-src',
		},
		name: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-column-one h4',
			default: __( 'Chandra Thapa' ),
		},
		nameTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-column-two h4',
			default: __( 'Sandeep Bhatt' ),
		},
		nameThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-column-three h4',
			default: __( 'John Doe' ),
		},
		position: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-column-one .dgb-team-member-position',
			default: __( 'Chairman' ),
		},
		positionTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-column-two .dgb-team-member-position',
			default: __( 'Founder/CEO' ),
		},
		positionThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-column-three .dgb-team-member-position',
			default: __( 'Software Engineer' ),
		},
		description: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-description',
			default: __( 'Chandra is the chairman and founder of Demoify, which he started from his dorm room in 2010. During the company’s early years, Chandra acted as the sole engineer, designer, and support representative for the entire Demoify platform.' ),
		},
		descriptionTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-description-two',
			default: __( 'As CEO of Demoify, Sandeep is driving the company’s vision of connecting businesses with great talent to work without limits.' ),
		},
		descriptionThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-team-member-description-three',
			default: __( 'John, Senior Software Engineer, oversees Demoify’s vast engineering organization which drives the core programming for the company.' ),
		},
		nameColor: {
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
		shapes: {
			type: 'select',
			default: 'square',
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
