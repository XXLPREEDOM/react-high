import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children ? (
        <div style={{ border: "1px solid #333", padding: "8px 20px" }}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
