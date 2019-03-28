import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ logo, siteTitle }) => (
  <header style={{ background: `#563d7c`, marginBottom: `1.45rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0.5rem 0.5rem` }}>
      <Image
        filename={logo}
        alt="logo"
        style={{ width: `100%`, maxWidth: `29px`, float: `left` }}
      />
      <nav
        style={{
          margin: 0,
          float: `left`,
          paddingLeft: 20,
          lineHeight: `29px`,
        }}
      >
        <Link
          to="/"
          style={{ color: `white`, textDecoration: `none` }}
          activeClassName="active"
        >
          Home
        </Link>
        <Link
          to="/blog"
          partiallyActive={true}
          style={{ color: `white`, textDecoration: `none`, marginLeft: 20 }}
          activeClassName="active"
        >
          Blog
        </Link>
        <Link
          to="/tags"
          partiallyActive={true}
          style={{ color: `white`, textDecoration: `none`, marginLeft: 20 }}
          activeClassName="active"
        >
          Tags
        </Link>
        <Link
          to="/about"
          partiallyActive={true}
          style={{ color: `white`, textDecoration: `none`, marginLeft: 20 }}
          activeClassName="active"
        >
          About
        </Link>
      </nav>
      <div style={{ float: `right`, lineHeight: `29px` }}>
        <a
          href="https://github.com/cclc"
          title="GitHub"
          style={{ color: `white` }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar-nav-svg"
            viewBox="0 0 512 499.36"
            role="img"
            focusable="false"
          >
            <title>GitHub</title>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
            />
          </svg>
        </a>
        <a
          href="https://blog.csdn.net/Cooldiok"
          title="CSDN"
          style={{ color: `white`, marginLeft: 20 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            className="navbar-nav-svg"
            viewBox="0 0 32.41 28.313"
          >
            <path
              fill="currentColor"
              d="M32.392,1.067 C32.118,3.080 31.876,4.863 31.571,7.111 C27.992,6.559 24.431,6.049 20.851,6.345 C17.574,6.616 14.398,7.235 12.079,9.747 C7.821,14.358 10.138,20.714 16.570,21.848 C20.574,22.555 24.627,22.174 28.643,21.624 C28.488,24.734 28.480,24.260 28.340,27.301 C28.310,27.966 28.462,27.705 23.753,28.183 C18.758,28.433 13.767,28.493 8.980,26.720 C4.444,25.041 0.872,22.370 0.148,17.436 C-0.597,12.358 1.533,8.258 5.612,5.096 C11.733,0.349 22.443,-1.321 32.392,1.067 Z"
            />
          </svg>
        </a>
        <a
          href="mailto:luchen111@vip.qq.com"
          title="mail"
          style={{ color: `white`, marginLeft: 20 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="envelope"
            className="navbar-nav-svg"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
            />
          </svg>
        </a>
      </div>
      <div style={{ clear: `both` }} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
