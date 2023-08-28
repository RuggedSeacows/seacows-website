import '@mobile/style/gamefi.less'
import Header from '@components/mobile/header'
import Footer from '@src/components/mobile/footer'
import Join from '@src/components/mobile/Join'
import { useEffect, useState } from 'react'
const Mobile = () => {
  const [ showJoin, setShowJoin] = useState(false)
  const [ isSafari, setIsSafari ] = useState(false)
  const handleJoinBetaTestClick = () => {
    window.open("https://discord.com/invite/KSfmSkgmMb", "_blank");
  }
  useEffect(() => {
    if((/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))) {
      setIsSafari(true)
    }
  }, [])
  return <div className="m-gamefi">
    <Header />
    <div className={ `firstpage ${isSafari && 'safarifirstpage'}` }>
     <div>
        <h1>Increase NFT transactions with your native decentralized NFT marketplace.</h1>
        <p>SeaCows is an easy-to-integrate NFT AMM protocol for GameFi projects.</p>
        <button className='btn' onClick={handleJoinBetaTestClick}>Join beta test</button>
     </div>
    </div>
    <div className="experience block">
      <h2>Boost your play-to-own experience</h2>
      <p>Easily integrate an NFT marketplace into your game to upgrade your play-to-own experience.</p>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/98cd8e56-c197-4c03-0f2a-96bf5ab7ad00/public" alt="" />
      <a href="https://docs.seacows.io/" target='_blank'>
        <button className='btn'>Documentation</button>
      </a>
    </div>
    <div className="block">
      <h2>Strengthen your game economy</h2>
      <p>Set your game native token as payment currency to boost its utility and strenghten your game economy.</p>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/99ddcb0e-7e8b-4408-0c8e-10acd8d78900/public" alt="" />
    </div>
    <div className="block">
      <h2>Enable utility-based pricing</h2>
      <p>Make use of the AI price oracle to price NFTs based on their value in-game.</p>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/15059b29-69e9-42e0-9fbd-7c6381362c00/public" alt="" />
    </div>
    <div className="block">
      <h2>Set and earn your own trading fee</h2>
      <p>Earn a trading fee as a liqudity provider that goes directly back to your project and community.</p>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/05248705-f841-4158-8f4b-9e207a03a100/public" alt="" />
    </div>
    <div className="experience block">
      <h2>How to integrate with SeaCows</h2>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/0386911c-45aa-4b98-f84e-fb6bf3b8c000/public" alt="" />
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/6f12dd20-094b-45a0-84f8-589dde49d500/public" alt="" />
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/2901b34b-9023-4498-d6f7-bde9c12b0b00/public" alt="" />
    </div>
    <div className="partners block">
      <h2>Partners</h2>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/6cf9875b-7703-4492-b586-93411e931700/public" alt="" />
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/108a7a31-b08b-4c04-3c2f-ba0a045da200/public" alt="" />
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/7fa85684-6851-4efa-863c-6c14e8dcb900/public" alt="" />
    </div>
    <div className="talk">
      <div className="talkbox">
        <h3>Kick-off your decentralized in-game marketplace!</h3>
        <button className='btn'  onClick={() => setShowJoin(true)}>Talk to Us!</button>
      </div>
    </div>
    <Footer />
    {showJoin && <Join close={ () => setShowJoin(false) } /> }
  </div>
}
export default Mobile