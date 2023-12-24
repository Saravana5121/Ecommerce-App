// Logo.js

const Logo = ({ src, alt, className }) => {
  return (
    <div className={`logo ${className}`}>
      <img src={src} alt={alt} className="w-100 h-40" />
      {/* You can adjust the width and height as needed */}
    </div>
  );
};

export default Logo;
