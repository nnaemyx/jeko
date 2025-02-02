import eslintReact from "@eslint-react/eslint-plugin";
import { fixupPluginRules } from "@eslint/compat";
import eslintJs from "@eslint/js";
import eslintStylistic from "@stylistic/eslint-plugin";
import eslintImportX from "eslint-plugin-import-x";
// import eslintPerfectionist from "eslint-plugin-perfectionist";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintSonarjs from "eslint-plugin-sonarjs";
import eslintTailwind from "eslint-plugin-tailwindcss";
import eslintUnicorn from "eslint-plugin-unicorn";
import typegen from "eslint-typegen";
import globals from "globals";
import tsEslint from "typescript-eslint";

/**
 * @import { FlatESLintConfig } from "eslint-define-config"
 * @import { Linter } from "eslint"
 * @typedef {Array<Linter.Config & FlatESLintConfig>} ConfigArray
 */

/**
 *
 * @param {[configs:Promise<ConfigArray> | ConfigArray, options?: TypeGenOptions]} args
 *
 * @returns Promise<ConfigArray>
 */

const augumentedTypegen = (...args) => typegen(...args);

const eslintConfigArray = augumentedTypegen([
	// == Global Options
	{
		name: "zayne/defaults/ignores",
		ignores: ["dist/**", "build/**", ".next/**", "eslint-typegen.d.ts"],
	},
	{
		name: "zayne/defaults/languageOptions",
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsEslint.parser,
			parserOptions: {
				project: "config/tsconfig.eslint.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},

	// == Base Eslint Rules
	{ ...eslintJs.configs.recommended, name: "eslint/recommended" },
	{
		name: "zayne/eslint",
		rules: {
			"no-return-assign": ["error", "except-parens"],
			"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
			"no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
			"no-console": ["error", { allow: ["warn", "error", "info", "trace"] }],
			"no-restricted-exports": [
				"error",
				{
					restrictedNamedExports: [
						"default", // use `export default` to provide a default export
						"then", // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
					],
				},
			],
			"no-useless-computed-key": "error",
			"no-useless-constructor": "error",
			"no-useless-rename": [
				"error",
				{ ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
			],
			"no-unreachable-loop": "error",
			"no-constant-condition": "warn",
			"no-await-in-loop": "error",
			"no-template-curly-in-string": "error",
			"object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
			"prefer-template": "error",
			"symbol-description": "error",
			"no-restricted-imports": ["off", { paths: [], patterns: [] }],
			"no-restricted-globals": [
				"error",
				{
					name: "isFinite",
					message:
						"Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
				},
				{
					name: "isNaN",
					message:
						"Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
				},
			],
			"no-undef-init": "error",
			"array-callback-return": ["error", { allowImplicit: true }],
			"class-methods-use-this": "error",
			complexity: ["warn", 25],
			curly: ["error", "multi-line"],
			"default-case": ["error", { commentPattern: "^no default$" }],
			"default-case-last": "error",
			eqeqeq: ["error", "always", { null: "ignore" }],
			"grouped-accessor-pairs": "error",
			"no-alert": "warn",
			"no-constructor-return": "error",
			"no-else-return": ["error", { allowElseIf: false }],
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-lone-blocks": "error",
			"no-loop-func": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"default-param-last": "error",
			"no-param-reassign": [
				"error",
				{
					props: true,
					ignorePropertyModificationsFor: [
						"acc", // for reduce accumulators
						"accumulator", // for reduce accumulators
						"e", // for e.returnvalue
						"ctx", // for Koa routing
						"context", // for Koa routing
						"req", // for Express requests
						"request", // for Express requests
						"res", // for Express responses
						"response", // for Express responses
						"$scope", // for Angular 1 scopes
						"staticContext", // for ReactRouter context
					],
				},
			],
			"no-restricted-properties": [
				"error",
				{
					object: "arguments",
					property: "callee",
					message: "arguments.callee is deprecated",
				},
				{
					object: "global",
					property: "isFinite",
					message: "Please use Number.isFinite instead",
				},
				{
					object: "self",
					property: "isFinite",
					message: "Please use Number.isFinite instead",
				},
				{
					object: "window",
					property: "isFinite",
					message: "Please use Number.isFinite instead",
				},
				{
					object: "global",
					property: "isNaN",
					message: "Please use Number.isNaN instead",
				},
				{
					object: "self",
					property: "isNaN",
					message: "Please use Number.isNaN instead",
				},
				{
					object: "window",
					property: "isNaN",
					message: "Please use Number.isNaN instead",
				},
				{
					object: "Math",
					property: "pow",
					message: "Use the exponentiation operator (**) instead.",
				},
			],
			"no-script-url": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-useless-concat": "error",
			"no-useless-return": "error",
			"prefer-object-has-own": "error",
			"prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
			radix: "error",
			"vars-on-top": "error",
			"max-depth": ["error", 2],
			"logical-assignment-operators": "warn",
			"operator-assignment": "warn",
			"no-implicit-coercion": "warn",
			"prefer-object-spread": "warn",
			"no-unmodified-loop-condition": "error",
			"no-unneeded-ternary": "warn",
			"no-unused-vars": "warn",
		},
	},

	// == Typescript Eslint Rules
	// == Typescript Eslint Rules
	...tsEslint.configs.strictTypeChecked.map((config) => ({
		...config,
		files: ["**/*.ts", "**/*.tsx"],
	})),
	...tsEslint.configs.stylisticTypeChecked.map((config) => ({
		...config,
		files: ["**/*.ts", "**/*.tsx"],
	})),
	{
		name: "zayne/@typescript-eslint",
		files: ["**/*.ts", "**/*.tsx"],

		plugins: {
			"@typescript-eslint": tsEslint.plugin,
		},

		rules: {
			"@typescript-eslint/no-unused-expressions": [
				"error",
				{
					allowShortCircuit: true,
					allowTernary: true,
				},
			],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ ignoreRestSiblings: true, argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/array-type": ["error", { default: "array-simple" }],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/no-useless-constructor": "error",
			"@typescript-eslint/member-ordering": "error",
			"@typescript-eslint/no-confusing-void-expression": "off",
			"@typescript-eslint/non-nullable-type-assertion-style": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/method-signature-style": ["error", "property"],
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true, allowNullish: true, allowBoolean: true },
			],
			"@typescript-eslint/default-param-last": "error",
			"@typescript-eslint/return-await": ["error", "in-try-catch"],
			"@typescript-eslint/require-await": "error",
			"@typescript-eslint/no-empty-function": [
				"error",
				{ allow: ["arrowFunctions", "functions", "methods"] },
			],
			"@typescript-eslint/dot-notation": "error",
			"@typescript-eslint/no-shadow": "error",
			"@typescript-eslint/prefer-nullish-coalescing": ["error", { ignoreConditionalTests: true }],
			"@typescript-eslint/no-unnecessary-type-parameters": "off",
		},
	},

	// == Stylistic Rules
	{
		name: "zayne/@stylistic",
		plugins: { "@stylistic": eslintStylistic },
		rules: {
			"@stylistic/spaced-comment": [
				"warn",
				...eslintStylistic.configs["recommended-flat"].rules["@stylistic/spaced-comment"].filter(
					(item) => item !== "error"
				),
			],
			"@stylistic/jsx-self-closing-comp": "error",
			"@stylistic/no-floating-decimal": "error",
		},
	},

	// // == Perfectionist Rules
	// {
	// 	name: "zayne/perfectionist/alphabetical",
	// 	plugins: { perfectionist: eslintPerfectionist },
	// 	rules: {
	// 		"perfectionist/sort-variable-declarations": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		// "perfectionist/sort-intersection-types": [
	// 		// 	"warn",
	// 		// 	{
	// 		// 		type: "alphabetical",
	// 		// 		order: "asc",
	// 		// 	},
	// 		// ],
	// 		// "perfectionist/sort-svelte-attributes": [
	// 		// 	"warn",
	// 		// 	{
	// 		// 		type: "alphabetical",
	// 		// 		order: "asc",
	// 		// 	},
	// 		// ],
	// 		// "perfectionist/sort-astro-attributes": [
	// 		// 	"warn",
	// 		// 	{
	// 		// 		type: "alphabetical",
	// 		// 		order: "asc",
	// 		// 	},
	// 		// ],
	// 		// "perfectionist/sort-vue-attributes": [
	// 		// 	"warn",
	// 		// 	{
	// 		// 		type: "alphabetical",
	// 		// 		order: "asc",
	// 		// 	},
	// 		// ],
	// 		"perfectionist/sort-array-includes": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		"perfectionist/sort-object-types": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		// "perfectionist/sort-union-types": [
	// 		// 	"warn",
	// 		// 	{
	// 		// 		type: "alphabetical",
	// 		// 		order: "asc",
	// 		// 	},
	// 		// ],
	// 		"perfectionist/sort-switch-case": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		"perfectionist/sort-interfaces": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		// "perfectionist/sort-jsx-props": [
	// 		// 	"warn",
	// 		// 	{
	// 		// 		type: "alphabetical",
	// 		// 		order: "asc",
	// 		// 	},
	// 		// ],
	// 		"perfectionist/sort-classes": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		"perfectionist/sort-objects": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 		"perfectionist/sort-maps": [
	// 			"warn",
	// 			{
	// 				type: "alphabetical",
	// 				order: "asc",
	// 			},
	// 		],
	// 	},
	// },

	// == Import rules
	{
		name: "zayne/import-x",
		languageOptions: {
			parserOptions: eslintImportX.configs.react.parserOptions,
		},
		settings: {
			...eslintImportX.configs.typescript.settings,
			...eslintImportX.configs.react.settings,
		},

		plugins: { "import-x": eslintImportX },
		rules: {
			...eslintImportX.configs.recommended.rules,
			...eslintImportX.configs.typescript.rules,
			"import-x/extensions": [
				"error",
				"never",
				{ ignorePackages: true, pattern: { svg: "always", png: "always" } },
			],
			"import-x/no-extraneous-dependencies": ["error", { devDependencies: true }],
			"import-x/prefer-default-export": "off",
			"import-x/no-cycle": ["error", { ignoreExternal: true, maxDepth: 3 }],
			"import-x/no-unresolved": "off",
			"import-x/export": "error",
			"import-x/no-named-as-default": "error",
			"import-x/namespace": "off",
			"import-x/no-named-as-default-member": "error",
			"import-x/no-mutable-exports": "error",
			"import-x/first": "error",
			"import-x/no-duplicates": "error",
			"import-x/newline-after-import": "error",
			"import-x/no-absolute-path": "error",
			"import-x/no-named-default": "error",
			"import-x/no-self-import": "error",
			"import-x/no-useless-path-segments": ["error", { commonjs: true }],
			"import-x/no-relative-packages": "error",
		},
	},

	// == React Rules
	{
		name: "zayne/@eslint-react",
		plugins: {
			...eslintReact.configs["recommended-type-checked"].plugins,
			"react-hooks": fixupPluginRules(eslintReactHooks),
		},

		rules: {
			...eslintReact.configs["recommended-type-checked"].rules,
			"@eslint-react/function-component-definition": "off",
			"@eslint-react/no-missing-component-display-name": "error",
			"@eslint-react/prefer-destructuring-assignment": "error",
			"@eslint-react/avoid-shorthand-boolean": "error",
			"@eslint-react/prefer-shorthand-fragment": "error",
			"@eslint-react/no-array-index-key": "error",
			"@eslint-react/no-children-prop": "error",
			"@eslint-react/naming-convention/use-state": "warn",
			"@eslint-react/naming-convention/component-name": "warn",
			"@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks": "error",
			"@eslint-react/hooks-extra/prefer-use-state-lazy-initialization": "error",
			"@eslint-react/prefer-read-only-props": "off",
			"@eslint-react/no-children-to-array": "off",
			"@eslint-react/no-children-only": "off",
			"@eslint-react/no-children-count": "off",
			"@eslint-react/no-clone-element": "off",

			// Hook rules
			"react-hooks/exhaustive-deps": "warn",
			"react-hooks/rules-of-hooks": "error",
		},
	},

	// == Unicorn rules
	eslintUnicorn.configs["flat/recommended"],
	{
		name: "zayne/unicorn",
		rules: {
			"unicorn/no-null": "off",
			"unicorn/filename-case": [
				"warn",
				{
					cases: {
						camelCase: true,
						pascalCase: true,
						kebabCase: true,
					},
				},
			],
			"unicorn/no-negated-condition": "off",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/new-for-builtins": "off",
			"unicorn/numeric-separators-style": "off",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-array-for-each": "off",
			"unicorn/no-useless-undefined": ["error", { checkArguments: true }],
		},
	},

	// == Sonarjs Rules
	{ ...eslintSonarjs.configs.recommended, name: "sonarjs/recommended" },
	{
		name: "zayne/sonarjs",
		rules: {
			"sonarjs/prefer-immediate-return": "off",
			"sonarjs/no-duplicate-string": "off",
		},
	},

	// == Tailwind Rules
	...eslintTailwind.configs["flat/recommended"],
	{
		name: "zayne/tailwindcss",
		settings: {
			tailwindcss: {
				callees: ["tv", "cnMerge", "cn", "cnJoin", "twMerge", "twJoin"],
				cssFiles: [],
				config: "./tailwind.config.ts",
				removeDuplicates: false, // Turned off cuz prettier already handles this via plugin
			},
		},
		rules: {
			"tailwindcss/no-contradicting-classname": "off", // Turned off cuz tw intellisense already handles this
			"tailwindcss/no-custom-classname": [
				"warn",
				{ ignoredKeys: ["compoundVariants", "defaultVariants", "responsiveVariants"] },
			],
		},
	},
]);

export default eslintConfigArray;