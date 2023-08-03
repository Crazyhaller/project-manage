import logo from './assets/logo.png'

export default function Header() {
  return (
    <nav className="navbar bg-dark mb-4 p-0">
      <div className="container justify-content-center">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>
              <h3 style={{ color: 'white' }}>Project Manager</h3>
            </div>
          </div>
        </a>
      </div>
    </nav>
  )
}
