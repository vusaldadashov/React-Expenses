import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(point => point.value)
    let totalMaximum = Math.max(...dataPointValues)
    return <div className='chart'>
        {props.dataPoints.map(point =>(
            <ChartBar
                key={point.label}
                label={point.label}
                maxValue={totalMaximum}
                value={point.value} />)
        )}
    </div>
}

export default Chart