"use client";
import React from "react";

type PackageSpec = {
  name: string;
  price: string;
  description: React.ReactNode;
  perks: string[];
};

const defaultSpec: PackageSpec = {
  name: "Paket Unggulan",
  price: "Rp200,000",
  description: (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur nisi
      ipsum debitis neque eius maiores, aspernatur, ea natus in incidunt sapiente. Esse
      et ipsum, est rerum ut reiciendis illum.
    </p>
  ),
  perks: ["Murah", "Cepat", "Viral"],
};

function PackageData({ name, price, description, perks }: PackageSpec) {
  return (
    <div className="container">
      <h2>{name}</h2>
      <h3>{price}</h3>
      <div className="desc">{description}</div>
      <div className="perkList">
        {perks.map((item, index) => (
          <label key={index} className="row">
            <input type="checkbox" className="circle-check" />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <button>Pilih</button>

      <style jsx>{`
        .container {
          background-color: #f1f5f9;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 16px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin: 0;
        }

        h3 {
          margin: 8px 0;
          font-size: 20px;
          font-weight: bold;
        }

        .perkList {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
        }

        .row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .circle-check {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #3b82f6;
          position: relative;
          cursor: pointer;
          margin: 0;
        }

        .circle-check:checked {
          background-color: #3b82f6;
        }

        .circle-check:checked::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
        }

        button {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 10px;
          width: 100%;
          margin-top: 12px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }

        button:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  );
}

const availablePackages = Array(9).fill(defaultSpec);

export default function Page() {
  return (
    <main>
      <div className="grid">
        {availablePackages.map((item, index) => (
          <PackageData key={index} {...item} />
        ))}
      </div>

      <style jsx>{`
        main {
          margin: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 12px;
          row-gap: 12px;
        }

        @media (max-width: 540px) {
            .grid {
                grid-template-columns: 1fr 1fr;

            }
        }

        @media (max-width: 360px) {
            .grid {
                grid-template-columns: 1fr;

            }
        }
      `}</style>
    </main>
  );
}
