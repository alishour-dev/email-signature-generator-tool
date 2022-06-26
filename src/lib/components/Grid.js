import React from "react"

function Cell({ children, ...props }) {
	return <td {...props}>{children}</td>
}

function Row({ children, ...props }) {
	return <tr {...props}>{children}</tr>
}

function Grid({ children, ...props }) {
	return (
		<table {...props} cellPadding='0' cellSpacing='0'>
			<tbody>{children}</tbody>
		</table>
	)
}

Grid.Row = Row
Grid.Cell = Cell

export default Grid
