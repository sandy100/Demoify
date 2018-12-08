export const { registerBlockType } = wp.blocks;
export const { __ } = wp.i18n;
export const {
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	Dashicon,
	IconButton,
	Button,
	Toolbar,
	PanelBody,
} = wp.components;

export const {
	InspectorControls,
	BlockControls,
	ColorPalette,
	AlignmentToolbar,
	RichText,
	URLInput,
	MediaUpload,
	DropDownMenu,
} = wp.editor.InspectorControls ? wp.editor : wp.blocks;

export const {
	PanelColorSettings,
} = wp.editor;
