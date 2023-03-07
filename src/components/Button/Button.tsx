import React, {type FC } from "react"
import "./Button.css"

/**
 * A Button that takes label text as a mandatory prop
 * and returns a React Button component.
 *
 * @param {string} label - text to be displayed inside the button
 * @param {string} size - `"lg" | "md" | "sm"`
 * @param {string} type - normal html button types - `"button" | "submit" | "reset"`
 * @param {string} btnType - `"primary" | "secondary" | "ghost"`
 * @param {string} className - additional class to be applied
 * @func onClick - function of MouseEventHandler type, returns void
 * @param {string} shape - - "default" | "rounded" | "pill"
 * @param {object} styles - inline styles to be applied
 * @param {boolean} isDarkMode - default `false`
 * @returns Button
 */

interface ButtonParams {
	name: string
}

const Button: FC<ButtonParams> = ({ name }: ButtonParams) => {
	const handleClick = () => {
		console.log('magic btn working:', name)
	}

	return (
		<button onClick={handleClick}>
			Magic Button
		</button>
	)
}

export default Button
