import '@mobile/style/menu.less'
import Link from 'next/link'
import { useState } from 'react'
import Launch from '@src/components/mobile/Launch'
import { Twitter, Discord, Medium, Mirrordefault  } from '@components/Icon' 
const Menu = (props: any) => {
  const { close } = props
  const [community, setCommunity] = useState(false)
  const [showLaunch, setShowLaunch] = useState(false)

  const toggleCommuity = () => {
    setCommunity(!community)
  }
  const Communitys = [
    {
      name: 'Twiter',
      img: <Twitter fill='rgba(255, 255, 255, 0.6)' />,
      href: 'https://twitter.com/SeaCowsNFT'
    },
    {
      name: 'Discord',
      img: <Discord fill='rgba(255, 255, 255, 0.6)' />,
      href: 'https://discord.gg/BwQZpqJt63'
    },
    {
      name: 'Medium',
      img: <Medium fill='rgba(255, 255, 255, 0.6)' />,
      href: 'https://medium.com/@SeaCows/about'
    },
    {
      name: 'Mirror',
      img: <Mirrordefault fill='rgba(255, 255, 255, 0.6)' />,
      href: 'https://mirror.xyz/0xfD541c8A6710006a63C83eC32B9F2D7b3291eFa3'
    }
  ]
  return (
    <>
      <div className="menubox">
        <header className='m-header'>
          <Link href="/">
            <img className='logo' src="/v2/logo.png" alt="kumo network" />
          </Link>
          <div className="icon">
            <img className='menu' onClick={ close } src="/imgs/mobile/close.png" alt="menu" />
          </div>
        </header>
        <ul className="nvas">
          <Link href={'https://docs.seacows.io/'} >
            <li className="item">
              Documentation
            </li>
          </Link>
          <li onClick={toggleCommuity} className={ `${ community ? 'active' : '' } drap` }>
            <div className='drapitem'>
              <p>Use Cases</p>
              <i></i>
            </div>
            {
              community && <div className="community">
                <Link href={'/usecase/gamefi'}>
                  <div onClick={close} className="communityitem">
                    <p>GameFi</p>
                  </div>
                </Link>
            </div>
            }
          </li>
          <li className='noborder'></li>
          {
            Communitys.map((item: any, index: number) => 
            <li key={index}>
              <a href={item.href}>
                { item.img }
                {/* <img src={item.img} alt="" /> */}
                <p>{item.name}</p>
              </a>
            </li>
          )
          }
        </ul>
        {/* <button className='btn' onClick={() => setShowLaunch(true)}>Launch App</button> */}
      </div>
      {
        showLaunch  && <Launch close={ () => setShowLaunch(false) } />
      }
    </>
  )
}

export default Menu