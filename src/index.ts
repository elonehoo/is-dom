import isObject from "@elonehoo/is-object"
import isWindow from "@elonehoo/is-window"

function isDom(val:any) {
	if (!isObject(val) || !isWindow(window) || !(`Node` in window)) {
		return false
	}

	return typeof val.nodeType === `number`
		&& typeof val.nodeName === `string`
}

export default isDom
