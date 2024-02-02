import * as React from "react";

export default function AddressForm({ data }) {
  return (
    <div>
      <form className="row g-3">
        <div className="col-6">
          <label htmlFor="country" className="form-label">
            Country/Region
          </label>
          <input
            type="text"
            className="form-control bg-light"
            id="country"
            value={data.country}
            onChange={(e) => data.setCountry(e.target.value)}
          />
          {data.errors.country && (
            <p style={{ color: "red" }}>{data.errors.country}</p>
          )}
        </div>
        <div className="col-6"></div>

        <div className="col-3">
          <label htmlFor="postalcode" className="form-label">
            Pincode
          </label>
          <input
            type="text"
            id="postalcode"
            className="form-control bg-light"
            value={data.postalCode}
            onChange={(e) => data.setPostalCode(e.target.value)}
          />
          {data.errors.postalCode && (
            <p style={{ color: "red" }}>{data.errors.postalCode}</p>
          )}
        </div>
        <div className="col-6"></div>

        <div className="col-8">
          <label htmlFor="house_no" className="form-label">
            Flat, House no., Building, Company, Apartment
          </label>
          <input
            type="text"
            id="house_no"
            name="house_no"
            className="form-control bg-light"
            value={data.house}
            onChange={(e) => data.setHouse(e.target.value)}
          />
          {data.errors.house && (
            <p style={{ color: "red" }}>{data.errors.house}</p>
          )}
        </div>

        <div className="col-8">
          <label htmlFor="street" className="form-label">
            Area, Street, Sector, Village
          </label>
          <input
            type="text"
            id="street"
            name="street"
            className="form-control bg-light"
            value={data.streetAddress}
            onChange={(e) => data.setStreetAddress(e.target.value)}
          />
          {data.errors.streetAddress && (
            <p style={{ color: "red" }}>{data.errors.streetAddress}</p>
          )}
        </div>
        <div className="col-4"></div>

        <div className="col-4">
          <label htmlFor="city" className="form-label">
            Town/City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-control bg-light"
            value={data.city}
            onChange={(e) => data.setCity(e.target.value)}
          />
          {data.errors.city && (
            <p style={{ color: "red" }}>{data.errors.city}</p>
          )}
        </div>

        <div className="col-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="form-control bg-light"
            value={data.state}
            onChange={(e) => data.setState(e.target.value)}
          />
          {data.errors.state && (
            <p style={{ color: "red" }}>{data.errors.state}</p>
          )}
        </div>
      </form>
    </div>
  );
}
