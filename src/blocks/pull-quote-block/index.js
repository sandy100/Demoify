/**
 * BLOCK: Pull Quote
 *
 */
/**
 * Internal dependencies
 */

import './styles/style.scss';
import './styles/editor.scss';
import { PullQuoteIcon } from '../../icons';
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
			className={ 'dgb-pullquote' }
			style={ {
				borderTopColor: borderColor,
				borderBottomColor: borderColor,
			} }>
			<RichText
				tagName={ 'p' }
				className={ 'dgb-pullquote-text' }
				value={ text }
				onChange={ ( nextValue ) => setAttributes( { text: nextValue } ) }
				placeholder={ __( 'Write Quote…' ) }
				formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
				isSelected={ isSelected }
				keepPlaceholderOnFocus
				style={ {
					color: color,
				} }
			/>
		</blockquote>,
		isSelected && (
			<InspectorControls>
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
			className={ 'dgb-pullquote' }
			style={ {
				borderTopColor: borderColor,
				borderBottomColor: borderColor,
			} }>
			<p style={ { color: color } }>{ text }</p>
		</blockquote>
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
registerBlockType( 'dgb/pullquote', {
	title: __( 'Pull Quote' ),
	icon: PullQuoteIcon,
	category: 'demoify-blocks',
	description: 'Demoify PullQuote Block Highlight a quote from your post or page by displaying it as a graphic element.',
	keywords: [
		__( 'pullquote' ),
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
			default: '#2091e1',
		},
		borderColor: {
			type: 'string',
			default: '#2091e1',
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
