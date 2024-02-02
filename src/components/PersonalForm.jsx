import React from "react";

export default function PersonalForm({ data }) {
  return (
    <div>
      <form className="row g-3">
        <div className="col-6">
          <label htmlFor="firstname" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control bg-light"
            id="firstname"
            value={data.firstName}
            onChange={(e) => data.setFirstName(e.target.value)}
          />
          {data.errors.firstName && (
            <p style={{ color: "red" }}>{data.errors.firstName}</p>
          )}
        </div>

        <div className="col-6">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control bg-light"
            value={data.lastName}
            onChange={(e) => data.setLastName(e.target.value)}
          />
          {data.errors.lastName && (
            <p style={{ color: "red" }}>{data.errors.lastName}</p>
          )}
        </div>

        <div className="">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control bg-light"
            value={data.email}
            onChange={(e) => data.setEmail(e.target.value)}
          />
          {data.errors.email && (
            <p style={{ color: "red" }}>{data.errors.email}</p>
          )}
        </div>

        <div className="col-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control bg-light"
            value={data.password}
            onChange={(e) => data.setPassword(e.target.value)}
          />
          {data.errors.password && (
            <p style={{ color: "red" }}>{data.errors.password}</p>
          )}
        </div>
      </form>
    </div>
  );
}
