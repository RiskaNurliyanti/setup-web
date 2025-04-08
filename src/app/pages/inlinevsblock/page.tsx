"use client"; // WAJIB kalau kamu pakai Next.js App Router

export default function TwoBoxes() {
  return (
    <div className="container">
      <div>Box 1</div>
      <div>Box 2</div>
      <div className="special">Box 3</div>

      <style jsx>{`
        .container {
          margin: 10px;
          border: 1px dashed #d4d4d4;
        }
        
        .container div {
            margin: 20px;
            border: 1px solid #fca5a5;
            padding: 20px;
            height: 100px;
            width: 50%;
        }
        
        .container div.special {
            border: 1px solid #10b981;
            margin: 1em;
            width: calc(100% - 2em);
            background: url("../../../../canva-background-virtual-idulfitri-ornamental-hijau-emas-RfUsa0JFstQ.jpg");
            backgroubd-size: cover;
        }

        
      `}</style>
    </div>
  );
}