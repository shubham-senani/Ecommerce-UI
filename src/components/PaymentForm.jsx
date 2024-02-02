import * as React from "react";

export default function PaymentForm({data}) {
  return (
    <div>
      <form className="row g-3">
        <div className="col-8">
          <label htmlFor="cardNumber" className="form-label">
            Card number
          </label>
          <input
            type="text"
            className="form-control bg-light"
            id="cardNumber"
            value={data.cardNumber}
            onChange={(e) => data.setCardNumber(e.target.value)}
          />
          {data.errors.cardNumber && (
            <p style={{ color: "red" }}>{data.errors.cardNumber}</p>
          )}
        </div>

        <div className="col-8">
          <label htmlFor="cardName" className="form-label">
            Card holder name
          </label>
          <input
            type="text"
            id="cardName"
            className="form-control bg-light"
            value={data.cardName}
            onChange={(e) => data.setCardName(e.target.value)}
          />
          {data.errors.cardName && (
            <p style={{ color: "red" }}>{data.errors.cardName}</p>
          )}
        </div>

        <div className="col-6">
          <label htmlFor="expiryDate" className="form-label">
            Expiry date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className="form-control bg-light"
            value={data.expiryDate}
            onChange={(e) => data.setExpiryDate(e.target.value)}
          />
          {data.errors.expiryDate && (
            <p style={{ color: "red" }}>{data.errors.expiryDate}</p>
          )}
        </div>

        <div className="col-6">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="form-control bg-light"
            value={data.cvv}
            onChange={(e) => data.setCvv(e.target.value)}
          />
          {data.errors.cvv && (
            <p style={{ color: "red" }}>{data.errors.cvv}</p>
          )}
        </div>
      </form>
    </div>
  );
}
