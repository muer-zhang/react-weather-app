import { Accordion } from 'react-accessible-accordion'

const Forecast = ({ data }) => {
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded></Accordion>
    </>
  )
}

export default Forecast
