import "./Header.scss";
const env = import.meta.env.VITE_API_VAR;
const Header = () => {
  return (
    <div className="Header">
      <h3>{env}</h3>
    </div>
  );
};
export default Header;
