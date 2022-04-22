import APIMiddleware from './api-middleware';
import Animations from './animations';
import Charting from './charting';
import ColorManipulation from './color-manipulation';
import Cryptography from './cryptography';
import DateTimeManipulation from './date-time-manipulation';
import DateTimeRangePickers from './date-time-range-pickers';
import DragnDrop from './drag-n-drop';
import Dropdowns from './dropdown';
import ErrorMonitoring from './error-monitoring';
import FormValidation from './form-validation';
import GraphQL from './graphql';
import I18nTooling from './i18n-tooling';
import Immutability from './immutability';
import LocalStorage from './local-storage';
import RichTextEditors from './rich-text-editors';
import Routing from './routing';
import Svg from './svg';
import TooltipPopovers from './tooltips-popovers';
import UUIDTooling from './uuids';
import UrlUtilities from './url-utilities';
import Utilities from './utilities';
import XSSSanitizers from './xss-sanitizers';

export default [
	{
		name: 'node-sass',
		category: 'CSS Precompilers'
	},
	{
		name: 'normalizr',
		category: 'CSS Utilities'
	},
	{
		name: 'sanitize.css',
		category: 'CSS Utilities'
	},
	{
		name: 'cssjanus',
		category: 'RTL'
	},
	{
		name: 'prismjs',
		category: 'Syntax Highlighting'
	},
	...APIMiddleware,
	...Animations,
	...Charting,
	...ColorManipulation,
	...Cryptography,
	...DateTimeManipulation,
	...DateTimeRangePickers,
	...DragnDrop,
	...Dropdowns,
	...ErrorMonitoring,
	...FormValidation,
	...GraphQL,
	...I18nTooling,
	...Immutability,
	...LocalStorage,
	...RichTextEditors,
	...Routing,
	...Svg,
	...TooltipPopovers,
	...UUIDTooling,
	...UrlUtilities,
	...Utilities,
	...XSSSanitizers
];
