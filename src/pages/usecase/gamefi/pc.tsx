import './index.less'
import Header from '@components/widgets/newheader/index'
import Footer from '@components/widgets/Footer'
import Launch from '@components/widgets/Launch'
import Join from '@components/widgets/Join'
import { useState } from 'react'

const UseCase = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [showJoin, setShowJoin] = useState(false)
  const handleJoinBetaTestClick = () => {
    window.open("https://discord.com/invite/KSfmSkgmMb", "_blank");
  }
  return <div className='usecase'>
    { showDialog &&  <Launch close={ setShowDialog } /> }
    { showJoin &&  <Join close={ setShowJoin } /> }
    <Header show={ () => setShowDialog(true) } />
    <div className="firstpage">
      <div className="left">
        <h1>Increase NFT transactions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; with your native decentralized NFT marketplace.</h1>
        <p>SeaCows is an easy-to-integrate NFT AMM protocol for GameFi projects.</p>
        <button className='btn' onClick={handleJoinBetaTestClick}>Join beta test</button>
      </div>
      <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/44a35d29-8be7-4281-6ff6-1382962dba00/public" alt="" />
    </div>
    <div className="own">
      <section>
        <div>
          <h2>Boost your play-to-own</h2>
          <h2>experience</h2>
          <p>Easily integrate an NFT marketplace into your game to upgrade your play-to-own experience.</p>
          <a href="https://docs.seacows.io/" target='_blank'>
            <button className='btn'>Documentation</button>
          </a>
        </div>
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/4b2247c7-e467-4c73-8bc9-0ebc76377200/public" alt="" />
      </section>
    </div>
    <div className="streng">
      <section>
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/3d6fb397-6cce-4426-5aeb-dd88de325400/public" alt="" />
        <div>
          <h2>Strengthen your game </h2>
          <h2>economy</h2>
          <p>Set your game native token as payment currency to boost its utility and strenghten your game economy. </p>
        </div>
      </section>
    </div>
    <div className="pric">
      <section>
        <div>
          <h2>Enable utility-based</h2>
          <h2>pricing</h2>
          <p>Make use of the AI price oracle to price NFTs based on their value in-game.</p>
        </div>
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/ff63b43e-a672-44b6-934e-d99cf20cc300/public" alt="" />
      </section>
    </div>
    <div className="streng2">
      <section>
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/2a07e5f9-8e2a-4093-31dd-d3e1f9c66600/public" alt="" />
        <div>
          <h2>Set and earn your own </h2>
          <h2>trading fee</h2>
          <p>Earn a trading fee as a liqudity provider that goes directly back to your project and community. </p>
        </div>
      </section>
    </div>
    <div className="how">
      <section>
        <h2>How to integrate with SeaCows</h2>
        <div className="hows">
          <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/3d7c204b-b412-41d7-8a3a-cb3590779d00/public" alt="" />
          <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/c9143bfb-a391-4776-0f41-05b217f92800/public" alt="" />
          <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/4a3d10ae-3d78-4e30-f336-a0cb4b4b4600/public" alt="" />
        </div>
      </section>
    </div>
    <div className="patterns">
      <section>
        <h2>Partners</h2>
        <div className="hows">
          <a href="https://swagga.io/" target={'_blank'}>
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/1f0abaea-893e-40ba-080a-2b5f95542600/public" alt="" />
          </a>
          <a href="https://projectoasis.io/" target={'_blank'}>
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/d9bab207-693b-49b5-a7e8-39c387757100/public" alt="" />
          </a>
          <a href="https://heartrate.games/" target={'_blank'}>
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/28b4e4fa-61be-49f7-f928-074ef3dd6f00/public" alt="" />
          </a>
          
        </div>
      </section>
    </div>
    <div className="kick">
      <h2>Kick-off your decentralized in-game marketplace!</h2>
      <button className='btn' onClick={() => setShowJoin(true)}>Talk to Us!</button>
    </div>
    <Footer />
  </div>
}

export default UseCase