import React from 'react'
import Svg, {Path, rgbaArray} from 'react-native-svg'

interface EpuletekSvgProps {
  width?: string | number | undefined
  height?: string | number | undefined
  fill?: string | number | rgbaArray | undefined
}

export default function EpuletekSvg({width, height, fill}: EpuletekSvgProps) {
  return (
    <Svg viewBox="0 0 20 20" width={width} height={height}>
      <Path
        fill={fill}
        d="M18.39,14.11a.46.46,0,0,0-.47-.4h-3.7a.28.28,0,0,1-.2-.35.26.26,0,0,1,.2-.2h2.61a7.09,7.09,0,0,0-6-9L10.58.68A.73.73,0,0,0,9.8,0a.75.75,0,0,0-.68.68L8.89,4.21A7.08,7.08,0,0,0,3,12.31a8.45,8.45,0,0,0,.19.84H5.77a.28.28,0,0,1,.21.34.32.32,0,0,1-.21.21H2.08a.48.48,0,0,0-.47.4L.73,19.45a.46.46,0,0,0,.38.54h17.7a.47.47,0,0,0,.47-.47.19.19,0,0,0,0-.08Z"
      />
    </Svg>
  )
}
