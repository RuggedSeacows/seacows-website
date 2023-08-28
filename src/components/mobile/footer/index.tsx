import '@mobile/style/footer.less'
import { Twitter, Discord, Medium, Mirrordefault  } from '@components/Icon' 
const Footer = () => {
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
  return <footer className='mfooter'>
    <h4>Community</h4>
    <div className="communitys">
      {
        Communitys.map((item: any, index: number) => 
          <a key={index} href={item.href} target='_blank'>
            { item.img }
          </a>
        )
      }
    </div>
    <div className="joinus">
      <h5>JOIN US</h5>
      <p>Join Discord for Alpha Test!</p>
      <a href="https://discord.gg/BwQZpqJt63" target="_blank">
        <button className='btn'>JOIN US</button>
      </a>
    </div>
    <div className="copyright">2021 - 2022 seacows. All rights reserved.</div>
  </footer>
}

export default Footer