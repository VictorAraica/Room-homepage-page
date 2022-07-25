export default function Img({ img, className, children }) {
  return (
    <div
      className={`relative pt-image xl:pt-0 bg-contain xl:bg-cover bg-no-repeat bg-center ${className}`}
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    >
      {children}
    </div>
  );
}
