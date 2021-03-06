import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Input, Divider, Button, Modal } from 'antd'
import { FaBars, FaGlobe, FaFire } from 'react-icons/fa'
import './header.css'
import Dropdown from '../dropdown/dropdown.component'

const Header = () => {
  const [visible, setModal] = useState(false)
  const [type, setType] = useState('')
  // const [isNavVisible, setToggleNav] = useState(false)
  const toggleSideNav = e => {
    // setToggleNav(!isNavVisible)
  }
  const showLoginSignupModal = e => {
    const { type } = e.target.dataset
    setType(type)
    setModal(true)
  }
  return (
    <div className="Navbar">
      <div className="Navbar__Link Navbar__Link-brand">
        <img
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
          alt="logo"
        />
      </div>
      <div className="Navbar__Link Navbar__Link-toggle" onClick={toggleSideNav}>
        <FaBars />
      </div>
      <Input
        style={{ width: '500px', borderRadius: 2 }}
        type="text"
        placeholder="Search"
      />
      {/* <nav
        className="Navbar__Items-mobile"
        style={
          isNavVisible
            ? { display: 'initial', width: 200 }
            : { display: 'none', width: 0 }
        }
      >
        <div className="Navbar__Items-mobileitems">
          <div className="Navbar__Link">Link</div>
          <div className="Navbar__Link">Link</div>
          <div className="Navbar__Link">Link</div>
        </div>
      </nav> */}
      <nav className="Navbar__Items">
        <div className="Navbar__Links flexLeft">
          <FaGlobe />
        </div>
        <div className="Navbar__Links flexLeft">
          <FaFire />
        </div>
        <div className="Navbar__Links flexLeft">
          <FaGlobe />
        </div>
        <Divider
          style={{
            height: 34,
            top: 0,
            bottom: 0,
          }}
          type="vertical"
        />
        <div className="Navbar__Links" onClick={showLoginSignupModal}>
          <Button data-type="log in" type="default">
            LOG IN
          </Button>
          <Button data-type="sign up" type="primary">
            SIGN UP
          </Button>
        </div>
        <Dropdown />
      </nav>

      <Modal
        title={`${type.toUpperCase()}`}
        visible={visible}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        {type === 'log in' ? <div>Login Modal</div> : <div>Sign up Modal</div>}
      </Modal>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
