module.exports = {
	schema: 'http://localhost:8080/graphql',
	output: './src/graphql-env.d.ts',
	tsconfig: './tsconfig.base.json'
  };

//   {
// 	"root": true,
// 	"ignorePatterns": [
// 		"**/*"
// 	],
// 	"plugins": [
// 		"@nx",
// 		"react",
// 		"@typescript-eslint",
// 		"prefer-arrow",
// 		"react-hook",
// 		"perfectionist"
// 	],
// 	"rules": {
// 		"quotes": [
// 			"error",
// 			"single"
// 		],
// 		"react-hooks/rules-of-hooks": "warn",
// 		"react-hooks/exhaustive-deps": "warn",
// 		"@typescript-eslint/no-inferrable-types": "error",
// 		"@typescript-eslint/ban-types": "error",
// 		"@typescript-eslint/type-annotation-spacing": "warn",
// 		"@typescript-eslint/no-var-requires": "off",
// 		"@typescript-eslint/no-extra-semi": "off",
// 		"@typescript-eslint/no-non-null-assertion": "off",
// 		"@typescript-eslint/ban-ts-comment": "off",
// 		"@typescript-eslint/no-empty-function": "off",
// 		"@typescript-eslint/no-explicit-any": "off",
// 		"@typescript-eslint/indent": [
// 			"warn",
// 			4
// 		],
// 		"prefer-const": "error",
// 		"key-spacing": "warn",
// 		"no-multi-spaces": "warn",
// 		"react/jsx-curly-brace-presence": [
// 			"warn"
// 		],
// 		"object-curly-spacing": [
// 			"warn",
// 			"always"
// 		],
// 		"no-multiple-empty-lines": [
// 			"warn",
// 			{
// 				"max": 1
// 			}
// 		],
// 		"import/no-unresolved": "off",
// 		"react/jsx-space-before-closing": [
// 			"warn",
// 			"always"
// 		]
// 	},
// 	"overrides": [
// 		{
// 			"files": [
// 				"*.ts",
// 				"*.tsx",
// 				"*.js",
// 				"*.jsx"
// 			],
// 			"rules": {
// 				"@nx/enforce-module-boundaries": [
// 					"error",
// 					{
// 						"enforceBuildableLibDependency": true,
// 						"allow": [],
// 						"depConstraints": [
// 							{
// 								"sourceTag": "*",
// 								"onlyDependOnLibsWithTags": [
// 									"*"
// 								]
// 							}
// 						]
// 					}
// 				]
// 			}
// 		},
// 		{
// 			"files": [
// 				"*.ts",
// 				"*.tsx"
// 			],
// 			"extends": [
// 				"plugin:@nx/typescript"
// 			],
// 			"rules": {}
// 		},
// 		{
// 			"files": [
// 				"*.js",
// 				"*.jsx"
// 			],
// 			"extends": [
// 				"plugin:@nx/javascript"
// 			],
// 			"rules": {}
// 		}
// 	]
// }