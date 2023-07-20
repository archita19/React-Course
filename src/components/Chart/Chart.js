import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart({dataPoints}) {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const maximumValue = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {
                dataPoints.map(dataPoint => 
                    <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maximumValue} label={dataPoint.label}/>
                )
            }
        </div>
    )
}