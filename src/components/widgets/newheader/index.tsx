import "./index.less"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { gettoken } from '@src/utils/index'
import { Menu, Dropdown } from 'antd';
import mySegment from '@api/segment'
import { Discord, Mirrordefault, Medium, Twitter } from '@components/Icon/index'
const HeaderBar: React.FC<any> = (props: any) => {
  const { globalStore, theme = 'night', show } = props
  const [userName, setUserName] = useState('')
  const isLogin = !!gettoken()
  const [showLogin, setShowLogin] = useState(false)

  const router = useRouter()
  const { asPath } = router
  
  let time: any = 0
  const showInfo = () => {
    const info = document.getElementsByClassName('userInfo')[0] as HTMLElement
    clearTimeout(time)
    info.style.display = 'block'
  }
  const hiddenInfo = () => {
    const info = document.getElementsByClassName('userInfo')[0] as HTMLElement
    time = setTimeout(() => {
      info.style.display = 'none'
    }, 500)
  }
  const toRefer = () => {
    if (isLogin) {
      router.push('/refer')
    } else {
      router.push('/login')
    }
  }

  const handleLaunchAppClick = () => {
    window.open("https://testnet.app.seacows.io/", "_blank");
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="https://discord.gg/BwQZpqJt63" className="resource" target="_blank">
          <Discord className="menbuicon" fill="#fff" />
           <span>Discord</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://twitter.com/SeaCowsNFT" className="resource"  target="_blank">
          <Twitter className="menbuicon" fill="#fff" />
           <span>Twitter</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://medium.com/@SeaCows/about" className="resource"  target="_blank">
          <Medium className="menbuicon" fill="#fff" />
           <span>Medium</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://mirror.xyz/0xfD541c8A6710006a63C83eC32B9F2D7b3291eFa3" className="resource"  target="_blank">
          <Mirrordefault className="menbuicon" fill="#fff" />
            <span>Mirror</span>
        </a>
      </Menu.Item>
    </Menu>
  )
  const usecase = (
    <Menu>
      <Menu.Item>
        <a href="/usecase/gamefi" style={{ paddingLeft: '12px' }} className="resource">
          <span>GameFi</span>
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={"headerbox headerbox" + props.home + ' headerbox' + props.theme}>
      <header className={ "header-bar " + theme + ` ${asPath.indexOf('/collection') > -1 ? 'indexpagebar'  : ''}`}>
        <Link href="/">
          <div className="logo-box">
            <img className="logo" src="/v2/logo.png" alt="logo" />
          </div>
        </Link>
        <nav>
          <ul>
            <li>
                <a className="ant-dropdown-link" href="https://docs.seacows.io/" target="_blank">Documentation</a>
            </li>
            <li>
              <Dropdown overlay={menu} placement="bottomCenter" overlayClassName={ theme === 'light' ? '' : 'mydropdown' }>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                &nbsp;&nbsp;Community
                </a>
              </Dropdown>
            </li>
            <li>
            <Dropdown overlay={usecase} placement="bottomCenter" overlayClassName={ theme === 'light' ? '' : 'mydropdown' }>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Use Cases
                </a>
              </Dropdown>
              {/* <Link href="/usecase">
                <a onClick={ () => mySegment('track', {
                  event: 'click discover'
                }) }>Use Cases</a>
              </Link> */}
            </li>
            <li>
              <button onClick={handleLaunchAppClick} className="btn">Launch App</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
   
  )
}

export default HeaderBar
