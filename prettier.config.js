/**
 * Options for Prettier.
 *
 * @see https://prettier.io/docs/en/options.html
 */

// prettier.config.js
module.exports = {
	semi: false,
	singleQuote: true,
	tailwindAttributes: ["className", "classNames"],
	plugins: ["prettier-plugin-tailwindcss"],
};
