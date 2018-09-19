/**
 * BLOCK: Spacer
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
	InspectorControls,
	RangeControl,
	PanelBody,
	ToggleControl,
	PanelColorSettings,
} from '../../wp-imports';
import { SpacerIcon } from '../../icons';

export const edit = ( props ) => {
	const { isSelected, setAttributes } = props;

	const { height, showLine, backgroundColor } = props.attributes;

	return [
		!! isSelected && (
			<InspectorControls key="inspector">
				<PanelBody>
					<RangeControl
						label={ __( 'Height' ) }
						value={ height }
						min="20"
						max="250"
						onChange={ function( height ) {
							props.setAttributes( { height: height } );
						} }
					/>
					<ToggleControl
						label={ __( 'Separate With Line' ) }
						checked={ showLine }
						onChange={ () => setAttributes( { showLine: ! showLine } ) }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
							label: __( 'Line Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		),
		<div key="" className={ props.className } style={ { height: height + 'px' } }>
			<div className={ `dgb-spacer-line-${ showLine }` }
				style={ {
					backgroundColor: backgroundColor,
				} } >
			</div>
		</div>
	];
};
export const save = ( props ) => {
	const { height, showLine, backgroundColor } = props.attributes;
	const lineStyle = {
		backgroundColor: backgroundColor,
	};
	return (
		<div style={ { height: height + 'px' } }>
			<div className={ `dgb-spacer-line-${ showLine }` } style={ lineStyle }>
			</div>
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
registerBlockType( 'dgb/spacer', {
	title: __( 'Spacer' ),
	icon: SpacerIcon,
	category: 'demoify-blocks',
	description: 'Demoify Spacer block is used to insert empty spaces on pages.',
	keywords: [
		__( 'Spacer' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		height: {
			default: 20,
			type: 'number',
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
