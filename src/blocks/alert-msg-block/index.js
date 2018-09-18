/**
 * BLOCK: Alert Message Block
 *
 */

/**
 * Internal dependencies
 */
import md5 from 'md5';
import './styles/style.scss';
import './styles/editor.scss';
import { AlertMsgIcon } from '../../icons';
import {
	registerBlockType,
	__,
	SelectControl,
	PanelColorSettings,
	ToggleControl,
	InspectorControls,
	RichText,
	BlockControls,
	PanelBody,
} from '../../wp-imports';
export const edit = ( props ) => {
	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	const allAlerts = [
		{ value: 'primary', label: __( 'Primary' ) },
		{ value: 'success', label: __( 'Success' ) },
		{ value: 'error', label: __( 'Error' ) },
		{ value: 'warning', label: __( 'Warning' ) },
		{ value: 'info', label: __( 'Information' ) },
	];

	const {
		isSelected,
		editable,
		setState,
		setAttributes	} = props;

	const {
		text,
		color,
		textColor,
		borderColor,
		alertType,
		dismissible,
		showBorder,
	} = props.attributes;

	return [
		isSelected && (
			<BlockControls key="controls" />
		), (
			<div key={ 'editable' } className={ `dgb-alert alert-${ alertType } dismissible-${ dismissible } show-border-${ showBorder }` }
				style={ {
					borderColor: borderColor,
				} }>
				{
					dismissible && (
						<span key="button" className={ 'close-button' }>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" style={ { fill: textColor } }>
								<path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
							</svg>
						</span>
					)
				}
				<RichText
					tagName="p"
					placeholder={ props.attributes.text.default }
					value={ text }
					isSelected={ isSelected && editable === 'content' }
					onFocus={ onSetActiveEditable( 'content' ) }
					onChange={ ( text ) => setAttributes( { text: text } ) }
					className={ `dgb-alert-msg type-${ alertType }` }
					style={ {
						backgroundColor: color,
						color: textColor,
					} }
				/>
				{
					isSelected &&
					<InspectorControls key={ 'inspector' }>
						<PanelBody>
							<ToggleControl
								label={ __( 'Dismissible' ) }
								checked={ dismissible }
								onChange={ () => setAttributes( { dismissible: ! dismissible } ) }
							/>
							<SelectControl
								label={ __( 'Alert Type' ) }
								value={ alertType }
								options={ allAlerts.map( ( { value, label } ) => ( {
									value: value,
									label: label,
								} ) ) }
								onChange={ ( newSize ) => {
									setAttributes( { alertType: newSize } );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Border' ) }
								checked={ showBorder }
								onChange={ () => setAttributes( { showBorder: ! showBorder } ) }
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
								{
									value: borderColor,
									onChange: ( colorValue ) => setAttributes( { borderColor: colorValue } ),
									label: __( 'Border Color' ),
								},
							] }
						>
						</PanelColorSettings>
					</InspectorControls>
				}
			</div>
		) ];
};

export const save = ( props ) => {
	const {
		text,
		color,
		textColor,
		alertType,
		dismissible,
		showBorder,
		borderColor,
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: color,
		color: textColor,
	};

	// messageId is a unique string depending on the contents and is used for.
	// remembering whether the alert message was closed in the frontend.
	const messageId = md5( text + alertType ).substr( 0, 6 );
	const alertBlockStyle = {
		borderColor: borderColor,
	};

	return (
		<div className={ `dgb-alert alert-${ alertType } dismissible-${ dismissible } show-border-${ showBorder }` } style={ alertBlockStyle } data-messageId={messageId}>
			{
				dismissible && (
					<span key="button" className={ 'close-button' }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" style={ { fill: textColor } }>
							<path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
						</svg>
					</span>
				)
			}
			<p className={ `dgb-alert-msg type-${ alertType }` } style={ buttonStyle }>
				{ text }
			</p>
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
registerBlockType( 'dgb/alert-msg', {
	title: __( 'Alert Message' ),
	icon: AlertMsgIcon,
	category: 'demoify-blocks',
	description: 'Demoify alert message block provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
	keywords: [
		__( 'Alert' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the options available or make your custom.' ),
		},
		color: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		alertType: {
			type: 'string',
			default: 'primary',
		},
		dismissible: {
			type: 'boolean',
			default: false,
		},
	},
	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
