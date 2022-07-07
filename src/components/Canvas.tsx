import React, { useRef, useEffect } from "react"

const Canvas = (props: any) => {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		// const context = canvas.getContext("2d")
	}, [])

	return <canvas ref={canvasRef} {...props} />
}

export default Canvas
