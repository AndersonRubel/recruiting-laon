// components/Header.tsx
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-transparent mt-3"
      style={{ borderBottom: "1px solid white" }}
    >
      <div className="container-fluid">
        <a href="/">VOLTAR</a>
        <img
          src={"https://laonlabs.com/images/logoLaon.svg"}
          alt="logo"
          width={136}
        />
        <div className="d-flex justify-content-between">
          <a className="p-4" href="/register">
            CADASTRAR
          </a>
          <a className="p-4" href="/access">
            ENTRAR
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
