// Page.tsx
import { longParagraphs } from '../../../../components/longParagraphs';


export default function Page() {
  const paragraphs = longParagraphs(3); // generate 3 paragraf

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Contoh Paragraf Panjang</h2>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </main>
  );
}
