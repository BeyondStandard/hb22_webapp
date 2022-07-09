export type IDataProps = {
    audio_encoded: string
    car_type: string
    file_name: string
    engine_type: string
    speed: string
    probability: {
        Spectrograph: string
        Waveform: string
        confidence: Record<number, number>
        winner_confidence: number
        winner_index: number
        winner_label: string
    }
    time: string
}
