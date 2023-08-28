import '@mobile/style/header.less'
import { useState } from 'react'
import Link from 'next/link'
import Menu from '../menu'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const close = () => {
    setShowMenu(false)
  }
  const onshowMenu = () => {
    setShowMenu(true)
  }
  return  <header className='m-header'>
      <Link href="/">
        <img className='logo' src="/v2/logo.png" alt="seacows" />
      </Link>
      <div className="icon">
        <img className='menu' src="/imgs/mobile/menu1.png" onClick={onshowMenu} alt="menu" />
      </div>
      {
        showMenu && <Menu close={close} />
      }
    </header>
  }
export default Header