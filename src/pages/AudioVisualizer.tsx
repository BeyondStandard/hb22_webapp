import React, { Ref } from "react"

const getAudioData = async (analyserCanvas: any) => {
	if (navigator.mediaDevices.getUserMedia !== null) {
		const options = {
			video: false,
			audio: true,
		}

		try {
			const stream = await navigator.mediaDevices.getUserMedia(options)
			const audioCtx = new AudioContext()
			const analyser = audioCtx.createAnalyser()
			analyser.fftSize = 2048
			const audioSrc = audioCtx.createMediaStreamSource(stream)
			audioSrc.connect(analyser)
			const data = new Uint8Array(analyser.frequencyBinCount)

			const ctx = analyserCanvas.current.getContext("2d")
			const draw = (dataParm: any) => {
				dataParm = [...dataParm]
				ctx.fillStyle = "white" //white background
				ctx.lineWidth = 2 //width of candle/bar
				ctx.strokeStyle = "#65d45d" //color of candle/bar
				const space = analyserCanvas.current.width / dataParm.length
				dataParm.forEach((value: number, i: number) => {
					ctx.beginPath()
					ctx.moveTo(space * i, analyserCanvas.current.height) //x,y
					ctx.lineTo(space * i, analyserCanvas.current.height - value) //x,y
					ctx.stroke()
				})
			}
			const loopingFunction = () => {
				requestAnimationFrame(loopingFunction)
				analyser.getByteFrequencyData(data)
				draw(data)
			}
			/* "requestAnimationFrame" requests the browser to execute the code during the next repaint cycle. This allows the system to optimize resources and frame-rate to reduce unnecessary reflow/repaint calls. */
			requestAnimationFrame(loopingFunction)
		} catch (err) {
			// error handling
		}
	}
}

const AudioVisualizer = () => {
	const analyserCanvas: any = React.useRef(null)
	getAudioData(analyserCanvas)

	return (
		<div>
			<canvas ref={analyserCanvas} className=""></canvas>
		</div>
	)
}

export default AudioVisualizer
