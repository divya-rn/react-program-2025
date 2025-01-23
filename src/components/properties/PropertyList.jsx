import { useState } from "react";
import { deleteProperty, getAllProperties } from "./property-data";

export function PropertyList() {
  let [allProperties, setAllProperties] = useState(getAllProperties());
  let mappedAllProperties = allProperties.map((property) => {
    return (
      <div className="col-md-4 col-sm-6 col-12 mb-4" key={property.propertyId}>
        <div className="card">
          <div className="card-header bg-secondary text-white">
            <img
              src={property.propertyImageUrl}
              width="320"
              height="300"
              alt={property.propertyName}
            />
          </div>
          <div className="card-body">
            <h3>{property.propertyName}</h3>
          </div>
          <p className="card-text mx-3">Property Owner: {property.propertyOwner}</p>
          <p className="card-text mx-3">Property Location: {property.propertyLocation}</p>
          <p className="card-text mx-3">Property Cost: Rs. {property.propertyCost}</p>
          <div className="card-footer">
            <button type="button" className="btn btn-primary mx-5" onClick={() => editProperty(property.propertyId)}>
              EDIT
            </button>
            <button type="button" className="btn btn-danger mx-4" onClick={() => removeProperty(property.propertyId)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  });

  function removeProperty(propertyId) {
    deleteProperty(propertyId);
    setAllProperties(getAllProperties());
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-10">
            <h2>LIST OF PROPERTIES</h2>
          </div>
          {mappedAllProperties}
        </div>
      </div>
    </>
  );
}
