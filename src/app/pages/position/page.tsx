'use client';

import  LongParagraphs from '../../../../components/longParagraphs';

export default function Page() {
 

  return (
    <>
   
    <main>

      <section>
        <h2>Contoh Posisi Box</h2>

        {/* Box Static */}
        <div className="box">
          <strong>Static</strong>
        </div>
        {/* Box Relative */}
        <div className="box relative">
          <strong>Relative</strong><br />
        </div>
        <div className="box">
          <strong>Static</strong>
        </div>
        <div className="box">
          <strong>Static</strong>
        </div>
      </section>


      {/* Position Absolute | fixed */}
      <section>
        <div className="box absolute">
          <strong>Absolute</strong>
        </div>
        <div className="box fixed">
          <strong>Fixed</strong>
        </div>
      </section>

      <section>
        <div className="scrollingBox">
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <div className="box sticky"> Sticky</div>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          <p>Blah Blah Blah Blah</p>
          
        </div>
      </section>


      <h2>Contoh Paragraf Panjang</h2>
      <LongParagraphs jumlah={3} />

    </main>


    <style jsx>{`
            section {
                padding: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                }
            

            div.box {
                background-color:#f87171; /* Merah muda */
                padding: 8px 16px;
                margin-bottom: 16px;
                display: inline-block;
                border-radius: 4px;
              }
            
            div.box.relative{
             background-color: #ebf871;
             position: relative;

            }
            div.box.absolute{
              background-color:rgb(136, 248, 113);
              position: absolute;
              
            }
            div.box.fixed{
              background-color:rgb(55, 53, 180);
              position: fixed;
            }
            
            div.scrollingBox {
              border: 2px solid #10b981; /* Warna hijau solid */
              padding: 10px;
              margin-top: 10px;
              margin-bottom: 10px;
              max-height: 100px;
              border-radius: 4px;
              overflow-y: auto; /* Aktifkan scroll vertikal */
            }
            
            div.box.sticky {
              background-color:#970000;
              position: sticky;
              top: 20px;
            }


            
            `}
    </style>

  </>
  );
}
