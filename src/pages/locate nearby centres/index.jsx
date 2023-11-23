import React from 'react'
import './styles.scss'

const LocateNearbyCentres = () => {
  return (
    <div className="locate-container">
      <div id="search-location">
        <input type='text' placeholder="Enter Pincode" />
        <img src="assets/search.png" alt="Search" />
      </div>

      <div className="heading">
        <h2>E-Waste Facilities in "pincode"</h2>
      </div>

      <div className="map">

      </div>

      <div className="table-container">

        <table className="location-table">

          <tr>
            <thead>

              <th>S.No.</th>
              <th>Facility Name</th>
              <th>State</th>
              <th>Pincode</th>
              <th>MTA</th>
              <th></th>

            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a href="">
                    Locate on map
                  </a>
                </td>
              </tr>
            </tbody>
          </tr>

        </table>
      </div>

    </div>
  )
}

export default LocateNearbyCentres