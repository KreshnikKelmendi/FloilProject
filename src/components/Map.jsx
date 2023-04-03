import React from 'react'

const Map = () => {
  return (
    <div className="mapouter">
        <div className="gmap_canvas">
            <iframe className='floilMap' 
                    id="gmap_canvas" 
                    title="Location of Floil" 
                    src="https://maps.google.com/maps?q=rruga%20e%20pejes&t=&z=15&ie=UTF8&iwloc=&output=embed">
            </iframe>
        </div>
    </div>
  )
}

export default Map