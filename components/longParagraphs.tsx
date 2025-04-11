export default function LongParagraphs({ jumlah = 1 }: { jumlah?: number }) {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  return (
    <>
      {Array(jumlah).fill(null).map((_, i) => (
        <p key={i}>{lorem}</p>
      ))}
    </>
  );
}