import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#1a73e8", color: "white" }}>
      <h2 style={{ margin: "0", display: "inline-block" }}>EasySarkari</h2>
      <div style={{ display: "inline-block", marginLeft: "20px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;
