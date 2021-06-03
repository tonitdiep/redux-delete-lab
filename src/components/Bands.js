import React from 'react'
import Band from './Band'
export const Bands = (props) => {

    const bands = props.bands.map(band => 

        <Band key={band.id} {...band} deleteBand={props.deleteBand} />)
    return (
        <div>
            <ul>
                {bands}
            </ul>
       
        </div>
    )
}
export default Bands;