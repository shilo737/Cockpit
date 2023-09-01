import React from 'react'
import useMonitor from '../hooks/useMonitor';

const VisualCockpit = () => {
    const {ADI,HIS,altitude} = useMonitor()

  return (
    <div>Visual</div>
  )
}

export default VisualCockpit