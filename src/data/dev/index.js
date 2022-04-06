import Testing from './testing';
import BuildTooling from './build-tooling';
import BabelTooling from './babel';
import ESLintTooling from './eslint-tooling';
import StyleLintTooling from './stylelint-tooling';
import WebpackTooling from './webpack-tooling';
import LintTooling from './lint-tooling';
import ComponentPlaygrounds from './component-playgrounds';
import TypeScriptTooling from './typescript-tooling';
import A11yTooling from './a11y-tooling';
import BundleAnalysis from './bundle-analysis';
import PrettierTooling from './prettier-tooling';

export default [
  {
    "name": "node-sass",
	    "category": "CSS Compilers & Tooling"
  },
  {
    "name": "sass",
	    "category": "CSS Compilers & Tooling"
  },
  {
    "name": "postcss",
	    "category": "CSS Compilers & Tooling"
  },
  {
    "name": "autoprefixer",
	    "category": "CSS Compilers & Tooling"
  },
  {
    "name": "mini-css-extract-plugin",
	    "category": "CSS Compilers & Tooling"
  },
  {
    "name": "tailwindcss",
	    "category": "CSS Compilers & Tooling"
  },
  
    ...Testing,
    ...BuildTooling,
    ...BabelTooling,
    ...ESLintTooling,
    ...StyleLintTooling,
    ...WebpackTooling,
    ...LintTooling,
    ...ComponentPlaygrounds,
    ...TypeScriptTooling,
    ...A11yTooling,
    ...BundleAnalysis,
    ...PrettierTooling,
];
