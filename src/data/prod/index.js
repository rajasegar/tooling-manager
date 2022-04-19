import StateManagement from './state-management';
import Charting from './charting';
import Svg from './svg';
import DateTimeManipulation from './date-time-manipulation';
import Animations from './animations';
import ErrorMonitoring from './error-monitoring';
import Dropdowns from './dropdown';
import Cryptography from './cryptography';
import Utilities from './utilities';
import Immutability from './immutability';
import LocalStorage from './local-storage';
import TableGridComponents from './table-grid-components';
import RichTextEditors from './rich-text-editors';
import virtualizedLists from './virtualized-lists';
import routing from './routing';
import i18nTooling from './i18n-tooling';
import formValidation from './form-validation';
import LazyLoading from './lazy-loading';
import APIMiddleware from './api-middleware';
import TooltipPopovers from './tooltips-popovers';
import DateTimeRangePickers from './date-time-range-pickers';
import DocumentHeadManagement from './document-head-management';
import DragnDrop from './drag-n-drop';
import XSSSanitizers from './xss-sanitizers';
import ColorManipulation from './color-manipulation';
import UUIDTooling from './uuids';
import SkeletonLoading from './skeleton-loading';
import IFrameHandling from './iframes';
import ModalDialogs from './modal-dialogs';
import UrlUtilities from './url-utilities';
import GraphQL from './graphql';

export default [
  {
    "name": "node-sass",
	    "category": "CSS Precompilers"
  },
  {
    "name": "normalizr",
	    "category": "CSS Utilities"
  },
  {
    "name": "sanitize.css",
	    "category": "CSS Utilities"
  },
  {
    "name": "cssjanus",
	    "category": "RTL"
  },
  {
    "name": "prismjs",
	    "category": "Syntax Highlighting"
  },
    ...StateManagement,
    ...Charting,
    ...Svg,
    ...DateTimeManipulation,
    ...Animations,
    ...ErrorMonitoring,
    ...Dropdowns,
    ...Cryptography,
    ...Utilities,
    ...Immutability,
    ...LocalStorage,
    ...TableGridComponents,
    ...RichTextEditors,
    ...virtualizedLists,
    ...routing,
    ...i18nTooling,
    ...formValidation,
    ...LazyLoading,
    ...APIMiddleware,
    ...TooltipPopovers,
    ...DateTimeRangePickers,
    ...DocumentHeadManagement,
    ...DragnDrop,
    ...XSSSanitizers,
    ...ColorManipulation,
    ...UUIDTooling,
    ...SkeletonLoading,
    ...IFrameHandling,
    ...ModalDialogs,
    ...UrlUtilities,
    ...GraphQL,
    
];
