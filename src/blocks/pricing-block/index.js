/**
 * BLOCK: Pricing
 *
 */
/**
 * Internal dependencies
 */

import './styles/style.scss';
import './styles/editor.scss';
import { PricingIcon } from '../../icons';

import {
	registerBlockType,
	__,
	PanelColorSettings,
	SelectControl,
	Dashicon,
	IconButton,
	RangeControl,
	InspectorControls,
	RichText,
	BlockControls,
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
		buttonUrlOne,
		buttonUrlTwo,
		buttonUrlThree,
		pricingBoxTitleOne,
		pricingPlanTitleTwo,
		pricingPlanTitleThree,
		planPriceOne,
		planPriceTwo,
		planPriceThree,
		planLabelOne,
		planLabelTwo,
		planLabelThree,
		buttonTextOne,
		buttonTextTwo,
		buttonTextThree,
		featureListOne,
		featureListTwo,
		featureListThree,
		pricingBoxColor,
		priceColor,
		planLabelColor,
		buttonColor,
		buttonTextColor,
		featureListColor,
		columns,
		size,
		buttonCornerRadius,
	} = props.attributes;

	const column = [
		{ value: '1', label: __( 'One Column' ) },
		{ value: '2', label: __( 'Two Column' ) },
		{ value: '3', label: __( 'Three Column' ) },
	];

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	return [
		isSelected && <BlockControls key="controls" />,
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
					<RangeControl
						label={ __( 'Button Radius' ) }
						value={ buttonCornerRadius }
						min="1"
						max="50"
						onChange={ ( cornerRad ) => setAttributes( { buttonCornerRadius: cornerRad } ) }
					/>
					<SelectControl
						label={ __( 'Button Size' ) }
						value={ size }
						options={ buttonSizes.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => {
							setAttributes( { size: newSize } );
						} }
					/>
				</PanelBody>
				<PanelColorSettings
					initialOpen={ false }
					title={ __( 'Text Colors' ) }
					colorSettings={ [
						{
							value: pricingBoxColor,
							onChange: ( colorValue ) => setAttributes( { pricingBoxColor: colorValue } ),
							label: __( 'Pricing Title Color' ),
						},
						{
							value: priceColor,
							onChange: ( colorValue ) => setAttributes( { priceColor: colorValue } ),
							label: __( 'Price Color' ),
						},
						{
							value: planLabelColor,
							onChange: ( colorValue ) => setAttributes( { planLabelColor: colorValue } ),
							label: __( 'Per Month Label Color' ),
						},
						{
							value: featureListColor,
							onChange: ( colorValue ) => setAttributes( { featureListColor: colorValue } ),
							label: __( 'Feature List Color' ),
						},
					] }
				>
				</PanelColorSettings>
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
		<div key={ 'editable' } className={ `dgb-pricing-box column-${ columns }` }>
			<div className={ 'dgb-pricing-box-column-one' }>
				<RichText
					tagName={ 'h3' }
					value={ pricingBoxTitleOne }
					onChange={ ( text ) => setAttributes( { pricingBoxTitleOne: text } ) }
					isSelected={ isSelected && editable === 'pricingBoxTitleOne' }
					onFocus={ onSetActiveEditable( 'pricingBoxTitleOne' ) }
					style={ {
						color: pricingBoxColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ planPriceOne }
					className={ 'dgb-pricing-box-price' }
					onChange={ ( text ) => setAttributes( { planPriceOne: text } ) }
					isSelected={ isSelected && editable === 'planPriceOne' }
					onFocus={ onSetActiveEditable( 'planPriceOne' ) }
					style={ {
						color: priceColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ planLabelOne }
					className={ 'dgb-pricing-box-price-label' }
					onChange={ ( text ) => setAttributes( { planLabelOne: text } ) }
					focus={ isSelected && editable === 'planLabelOne' }
					onFocus={ onSetActiveEditable( 'planLabelOne' ) }
					style={ {
						color: planLabelColor,
					} }
					keepPlaceholderOnFocus
				/>
				<span key={ 'button' }
					className={ 'wp-block-button' }>
					<RichText
						tagName={ 'span' }
						value={ buttonTextOne }
						onChange={ ( text ) => setAttributes( { buttonTextOne: text } ) }
						className={ `wp-dgb-button dgb-button-${ size }` }
						isSelected={ isSelected && editable === 'buttonTextOne' }
						onFocus={ onSetActiveEditable( 'buttonTextOne' ) }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: buttonCornerRadius + 'px',
						} }
						keepPlaceholderOnFocus
					/>
				</span>
				<RichText
					tagName="ul"
					multiline="li"
					className="dgb-pricing-box-feature-list"
					onChange={ ( nextFeatures ) => setAttributes( { featureListOne: nextFeatures } ) }
					value={ featureListOne }
					style={ {
						color: featureListColor,
					} }
					placeholder={ __( 'Add features' ) }
					isSelected={ isSelected && editable === 'featureListOne' }
					onFocus={ onSetActiveEditable( 'featureListOne' ) }
					keepPlaceholderOnFocus
				/>
				{
					isSelected && (
						<form
							key={ 'form-link' }
							onSubmit={ ( event ) => event.preventDefault() }
							className={ 'blocks-button-inline-link pricing-box' }>
							<Dashicon icon={ 'admin-links' } />
							<URLInput
								value={ buttonUrlOne }
								onChange={ ( value ) => setAttributes( { buttonUrlOne: value } ) }
							/>
							<IconButton
								icon={ 'editor-break' }
								label={ __( 'Apply' ) }
								type={ 'submit' }
							/>
						</form>
					)
				}
			</div>
			<div className={ 'dgb-pricing-box-column-two' }>
				<RichText
					tagName={ 'h3' }
					value={ pricingPlanTitleTwo }
					onChange={ ( text ) => setAttributes( { pricingPlanTitleTwo: text } ) }
					isSelected={ isSelected && editable === 'pricingPlanTitleTwo' }
					onFocus={ onSetActiveEditable( 'pricingPlanTitleTwo' ) }
					style={ {
						color: pricingBoxColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ planPriceTwo }
					className={ 'dgb-pricing-box-price' }
					onChange={ ( text ) => setAttributes( { planPriceTwo: text } ) }
					isSelected={ isSelected && editable === 'planPriceTwo' }
					onFocus={ onSetActiveEditable( 'planPriceTwo' ) }
					style={ {
						color: priceColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ planLabelTwo }
					className={ 'dgb-pricing-box-price-label' }
					onChange={ ( text ) => setAttributes( { planLabelTwo: text } ) }
					focus={ isSelected && editable === 'planLabelTwo' }
					onFocus={ onSetActiveEditable( 'planLabelTwo' ) }
					style={ {
						color: planLabelColor,
					} }
					keepPlaceholderOnFocus
				/>
				<span key={ 'button' }
					className={ 'wp-block-button' }>
					<RichText
						tagName={ 'span' }
						value={ buttonTextTwo }
						onChange={ ( text ) => setAttributes( { buttonTextTwo: text } ) }
						className={ `wp-dgb-button dgb-button-${ size }` }
						isSelected={ isSelected && editable === 'buttonTextTwo' }
						onFocus={ onSetActiveEditable( 'buttonTextTwo' ) }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: buttonCornerRadius + 'px',
						} }
						keepPlaceholderOnFocus
					/>
				</span>
				<RichText
					tagName="ul"
					multiline="li"
					className="dgb-pricing-box-feature-list"
					onChange={ ( nextFeatures ) => setAttributes( { featureListTwo: nextFeatures } ) }
					value={ featureListTwo }
					style={ {
						color: featureListColor,
					} }
					placeholder={ __( 'Add features' ) }
					isSelected={ isSelected && editable === 'featureListTwo' }
					onFocus={ onSetActiveEditable( 'featureListTwo' ) }
					keepPlaceholderOnFocus
				/>
				{
					isSelected && (
						<form
							key={ 'form-link' }
							onSubmit={ ( event ) => event.preventDefault() }
							className={ 'blocks-button-inline-link pricing-box' }>
							<Dashicon icon={ 'admin-links' } />
							<URLInput
								value={ buttonUrlTwo }
								onChange={ ( value ) => setAttributes( { buttonUrlTwo: value } ) }
							/>
							<IconButton
								icon={ 'editor-break' }
								label={ __( 'Apply' ) }
								type={ 'submit' }
							/>
						</form>
					)
				}
			</div>
			<div className={ 'dgb-pricing-box-column-three' }>
				<RichText
					tagName={ 'h3' }
					value={ pricingPlanTitleThree }
					onChange={ ( text ) => setAttributes( { pricingPlanTitleThree: text } ) }
					isSelected={ isSelected && editable === 'pricingPlanTitleThree' }
					onFocus={ onSetActiveEditable( 'pricingPlanTitleThree' ) }
					style={ {
						color: pricingBoxColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ planPriceThree }
					className={ 'dgb-pricing-box-price' }
					onChange={ ( text ) => setAttributes( { planPriceThree: text } ) }
					isSelected={ isSelected && editable === 'planPriceThree' }
					onFocus={ onSetActiveEditable( 'planPriceThree' ) }
					style={ {
						color: priceColor,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={ 'p' }
					value={ planLabelThree }
					className={ 'dgb-pricing-box-price-label' }
					onChange={ ( text ) => setAttributes( { planLabelThree: text } ) }
					focus={ isSelected && editable === 'planLabelThree' }
					onFocus={ onSetActiveEditable( 'planLabelThree' ) }
					style={ {
						color: planLabelColor,
					} }
					keepPlaceholderOnFocus
				/>
				<span key={ 'button' }
					className={ 'wp-block-button' }>
					<RichText
						tagName={ 'span' }
						value={ buttonTextThree }
						onChange={ ( text ) => setAttributes( { buttonTextThree: text } ) }
						className={ `wp-dgb-button dgb-button-${ size }` }
						isSelected={ isSelected && editable === 'buttonTextThree' }
						onFocus={ onSetActiveEditable( 'buttonTextThree' ) }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: buttonCornerRadius + 'px',
						} }
						keepPlaceholderOnFocus
					/>
				</span>
				<RichText
					tagName="ul"
					multiline="li"
					className="dgb-pricing-box-feature-list"
					onChange={ ( nextFeatures ) => setAttributes( { featureListThree: nextFeatures } ) }
					value={ featureListThree }
					style={ {
						color: featureListColor,
					} }
					placeholder={ __( 'Add features' ) }
					isSelected={ isSelected && editable === 'featureListThree' }
					onFocus={ onSetActiveEditable( 'featureListThree' ) }
					keepPlaceholderOnFocus
				/>
				{
					isSelected && (
						<form
							key={ 'form-link' }
							onSubmit={ ( event ) => event.preventDefault() }
							className={ 'blocks-button-inline-link pricing-box' }>
							<Dashicon icon={ 'admin-links' } />
							<URLInput
								value={ buttonUrlThree }
								onChange={ ( value ) => setAttributes( { buttonUrlThree: value } ) }
							/>
							<IconButton
								icon={ 'editor-break' }
								label={ __( 'Apply' ) }
								type={ 'submit' }
							/>
						</form>
					)
				}
			</div>
		</div>,
	];
};

export const save = ( props ) => {
	const {
		buttonUrlOne,
		buttonUrlTwo,
		buttonUrlThree,
		pricingBoxTitleOne,
		pricingPlanTitleTwo,
		pricingPlanTitleThree,
		planPriceOne,
		planPriceTwo,
		planPriceThree,
		planLabelOne,
		planLabelTwo,
		planLabelThree,
		buttonTextOne,
		buttonTextTwo,
		buttonTextThree,
		featureListOne,
		featureListTwo,
		featureListThree,
		pricingBoxColor,
		priceColor,
		planLabelColor,
		buttonColor,
		buttonTextColor,
		featureListColor,
		columns,
		size,
		buttonCornerRadius,
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: buttonColor,
		color: buttonTextColor,
		borderRadius: buttonCornerRadius + 'px',
	};

	return (
		<div className={ `dgb-pricing-box column-${ columns }` }>
			<div className={ 'dgb-pricing-box-column-one' }>
				{ pricingBoxTitleOne && !! pricingBoxTitleOne.length && (
					<h3 style={ { color: pricingBoxColor } }>
						{ pricingBoxTitleOne }
					</h3>
				) }
				{ planPriceOne && !! planPriceOne.length && (
					<p className={ 'dgb-pricing-box-price' } style={ { color: priceColor } }>
						{ planPriceOne }
					</p>
				) }
				{ planLabelOne && !! planLabelOne.length && (
					<p className={ 'dgb-pricing-box-price-label' } style={ { color: planLabelColor } }>
						{ planLabelOne }
					</p>
				) }
				{ buttonTextOne && !! buttonTextOne.length && (
					<a
						href={ buttonUrlOne }
						className={ `wp-dgb-button dgb-button-${ size }` }
						style={ buttonStyle }>
						{ buttonTextOne }
					</a>
				) }
				{ featureListOne && !! featureListOne.length && (
					<ul className={ 'dgb-pricing-box-feature-list' } style={ { color: featureListColor } }>
						{ featureListOne }
					</ul>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'dgb-pricing-box-column-two' }>
					{ pricingPlanTitleTwo && !! pricingPlanTitleTwo.length && (
						<h3 style={ { color: pricingBoxColor } }>
							{ pricingPlanTitleTwo }
						</h3>
					) }
					{ planPriceTwo && !! planPriceTwo.length && (
						<p className={ 'dgb-pricing-box-price' } style={ { color: priceColor } }>
							{ planPriceTwo }
						</p>
					) }
					{ planLabelTwo && !! planLabelTwo.length && (
						<p className={ 'dgb-pricing-box-price-label' } style={ { color: planLabelColor } }>
							{ planLabelTwo }
						</p>
					) }
					{ buttonTextTwo && !! buttonTextTwo.length && (
						<a
							href={ buttonUrlTwo }
							className={ `wp-dgb-button dgb-button-${ size }` }
							style={ buttonStyle }>
							{ buttonTextTwo }
						</a>
					) }
					{ featureListTwo && !! featureListTwo.length && (
						<ul className={ 'dgb-pricing-box-feature-list' } style={ { color: featureListColor } }>
							{ featureListTwo }
						</ul>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'dgb-pricing-box-column-three' }>
					{ pricingPlanTitleThree && !! pricingPlanTitleThree.length && (
						<h3 style={ { color: pricingBoxColor } }>
							{ pricingPlanTitleThree }
						</h3>
					) }
					{ planPriceThree && !! planPriceThree.length && (
						<p className={ 'dgb-pricing-box-price' } style={ { color: priceColor } }>
							{ planPriceThree }
						</p>
					) }
					{ planLabelThree && !! planLabelThree.length && (
						<p className={ 'dgb-pricing-box-price-label' } style={ { color: planLabelColor } }>
							{ planLabelThree }
						</p>
					) }
					{ buttonTextThree && !! buttonTextThree.length && (
						<a
							href={ buttonUrlThree }
							className={ `wp-dgb-button dgb-button-${ size }` }
							style={ buttonStyle }>
							{ buttonTextThree }
						</a>
					) }
					{ featureListThree && !! featureListThree.length && (
						<ul className={ 'dgb-pricing-box-feature-list' } style={ { color: featureListColor } }>
							{ featureListThree }
						</ul>
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
registerBlockType( 'dgb/pricing', {
	title: __( 'Pricing Block' ),
	icon: PricingIcon,
	category: 'demoify-blocks',
	description: 'Demoify Pricing block helps to build your pricing page as effective in winning sales as you want it to be. ',
	keywords: [
		__( 'Pricing' ),
		__( 'Demoify' ),
		__( 'Gutenberg' ),
	],
	attributes: {
		pricingBoxTitleOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-one h3',
			default: __( 'Basic' ),
		},
		pricingPlanTitleTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-two h3',
			default: __( 'Premium' ),
		},
		pricingPlanTitleThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-three h3',
			default: __( 'Elite' ),
		},
		planPriceOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-one .dgb-pricing-box-price',
			default: __( '$19' ),
		},
		planPriceTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-two .dgb-pricing-box-price',
			default: __( '$49' ),
		},
		planPriceThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-three .dgb-pricing-box-price',
			default: __( '$99' ),
		},
		planLabelOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-one .dgb-pricing-box-price-label',
			default: __( 'per month' ),
		},
		planLabelTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-two .dgb-pricing-box-price-label',
			default: __( 'per month' ),
		},
		planLabelThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-three .dgb-pricing-box-price-label',
			default: __( 'per month' ),
		},
		buttonTextOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-one a',
			default: __( 'Buy Now' ),
		},
		buttonTextTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-two a',
			default: __( 'Buy Now' ),
		},
		buttonTextThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-three a',
			default: __( 'Buy Now' ),
		},
		buttonUrlOne: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-pricing-box-column-one a',
			attribute: 'href',
		},
		buttonUrlTwo: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-pricing-box-column-two a',
			attribute: 'href',
		},
		buttonUrlThree: {
			type: 'string',
			source: 'attribute',
			selector: '.dgb-pricing-box-column-three a',
			attribute: 'href',
		},
		featureListOne: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-one .dgb-pricing-box-feature-list',
			default: __( ' Features List' ),
		},
		featureListTwo: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-two .dgb-pricing-box-feature-list',
			default: __( 'Features List' ),
		},
		featureListThree: {
			type: 'array',
			source: 'children',
			selector: '.dgb-pricing-box-column-three .dgb-pricing-box-feature-list',
			default: __( 'Features List' ),
		},
		pricingBoxColor: {
			type: 'string',
		},
		priceColor: {
			type: 'string',
		},
		planLabelOneColor: {
			type: 'string',
		},
		buttonColor: {
			type: 'string',
		},
		buttonTextColor: {
			type: 'string',
		},
		featureListColor: {
			type: 'string',
		},
		columns: {
			type: 'select',
			default: '1',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		cornerButtonRadius: {
			type: 'number',
			default: 4,
		},
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
