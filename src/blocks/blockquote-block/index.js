/**
 * BLOCK: BlockQuote
 *
 */

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
import { QuoteIcon } from '../../icons';

import {
	registerBlockType,
	__,
	PanelColorSettings,
	InspectorControls,
	RichText,
} from '../../wp-imports';

export const edit = ( props ) => {

	const { isSelected, setAttributes } = props;
	const { color, text, borderColor } = props.attributes;

	return [
		<blockquote
			key={ 'quote' }
			className={ 'dgb-blockquote' }
			style={ {
				borderLeftColor: borderColor,
			} }>
			<RichText
				tagName={ 'p' }
				className={ 'dgb-blockquote-text' }
				value={ text }
				onChange={ ( nextValue ) => setAttributes( { text: nextValue } ) }
				isSelected={ isSelected }
				style={ {
					color: color,
				} }
			/>
		</blockquote>,
		isSelected && (
			<InspectorControls key='inspector'>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: color,
							onChange: ( colorValue ) => setAttributes( { color: colorValue } ),
							label: __( 'Text Color' ),
						},
						{
							value: borderColor,
							onChange: ( colorValue ) => setAttributes( { borderColor: colorValue } ),
							label: __( 'Border Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		),
	];
};

export const save = ( props ) => {
	const { color, text, borderColor } = props.attributes;
	return (
		<blockquote
			className={ 'dgb-blockquote' }
			style={ {
				borderLeftColor: borderColor,
			} }>
			<p style={ { color: color } }>{ text }</p>
		</blockquote>
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
registerBlockType( 'dgb/blockquote', {
	title: __( 'BlockQuote' ),
	icon: QuoteIcon,
	category: 'demoify-blocks',
	description: 'Demoify BlockQuotes is used for quoting blocks of content',
	keywords: [
		__( 'Blockquote' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'It Doesn\'t Matter Where You Came From. All That Matters Is Where You Are Going.' ),
		},
		color: {
			type: 'string',
			default: '#424242',
		},
		borderColor: {
			type: 'string',
			default: '#007bff',
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
