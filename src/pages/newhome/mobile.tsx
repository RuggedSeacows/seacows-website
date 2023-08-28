import '@mobile/style/home.less'
import Header from '@components/mobile/header'
import Footer from '@src/components/mobile/footer';
import { useState, useEffect } from 'react'
import Launch from '@src/components/mobile/Launch'
declare const Swiper: any;
declare const window: any;
const mobile = (props: any) => {
  const { isSafari } = props
  const [showDialog, setShowDialog] = useState(false)
  const [showLaunch, setShowLaunch] = useState(false)
  
  let certifySwiper: any = null
  const initswiper = () => {
    certifySwiper = new Swiper('#certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      autoplay: true,
      on: {
        progress: function(progress: any): any {
          const _this: any = this;
          for (let i = 0; i < _this?.slides.length; i++) {
            var slide = _this.slides.eq(i);
            var slideProgress = _this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 260 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
          }
        },
        setTransition: function(transition: any) {
          const _this: any = this;
          for (var i = 0; i < _this.slides.length; i++) {
            var slide = _this.slides.eq(i)
            slide.transition(transition);
          }
        }
      }
    })
  }
  useEffect(() => {
    initswiper()
  }, [])
  return <div className="m-newhome">
    <Header />
    <div className={ `firstpage ${isSafari && 'safarifirstpage'}` }>
      <h1>Instantly Trade NFT at a Fair Price</h1>
      <p>SeaCows is a decentralized NFT AMM powered by AI-driven price oracles to enable instant NFT trading.</p>
      <button className='btn' onClick={() => setShowLaunch(true)}>Swap Now</button>
    </div>
    <img className='roll' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/65946960-b7f8-418e-33eb-0f1d8b9d2100/public" alt="" />
    <div className="steps">
      <div className="step1">
        <h3>Sell your NFTs within 1 second</h3>
        <div className="sellcenter inner">
          <div>
            <div className="cardbox">
              <div className="card">
                <div className="tag">SELL</div>
                <div className="inner">
                  <img src="/v2/userblock.png" alt="" />
                  <div className="info">
                    <h4>CryptoPunk #3325</h4>
                    <div className="id">ID: 3325</div>
                    <p>Quote :  12.35 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardbox">
              <div className="card">
                <div className="tag">Receive</div>
                <div className="eths">
                  <div className="eth">ETH</div>
                  <p>Balance: 0</p>
                </div>
                <p className='price'>12.35 <span>ETH</span></p>
              </div>
            </div>
            <button className='btn' onClick={() => setShowLaunch(true)}>Swap Now</button>
          </div>
        </div>
        
      </div>
      <div className="step2">
        <h3>Fully decentralised peer-to-pool transactions</h3>
        <div className="s-box" id='certify'>
          <div className="swiper-container">
            <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="s-border">
                <div className="s-item">
                  <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/fa448cab-c8e6-469f-bdc2-6e875bd99e00/public" alt="" />
                  <div className="title">
                    <img src="/v2/person/p4.png" alt="" />
                    <span>Doodles</span>
                  </div>
                  <div className="tags">
                    <div className="tag">20 NFTs</div>
                    <div className="tag">Floor: 10 ETH</div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="swiper-slide">
              <div className="s-border">
                <div className="s-item">
                  <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/2ae16163-f116-4e4a-026b-8ea52d667b00/public" alt="" />
                  <div className="title">
                    <img src="/v2/person/p6.png" alt="" />
                    <span>The Sandbox</span>
                  </div>
                  <div className="tags">
                    <div className="tag">20 NFTs</div>
                    <div className="tag">Floor: 50 ETH</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="s-border">
                <div className="s-item">
                  <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/61755120-c2fb-46f3-c941-58bd72edde00/public" alt="" />
                  <div className="title">
                    <img src="/v2/person/p1.png" alt="" />
                    <span>CryptoPunks</span>
                  </div>
                  <div className="tags">
                    <div className="tag">20 NFTs</div>
                    <div className="tag">Floor: 50 ETH</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
      </div>
      <div className="step3">
        <h3>Stake your NFTs and earn</h3>
        <div className="listbox">
          <div className="list">
            <div className="title">
              <p>Pool Pair</p>
              <span>APY</span>
            </div>
            <ul>
              <li>
                <div className='leftbox'>
                  <div className="eth">
                    <img src="/v2/ethereum-eth-logo.png" alt="" />
                  </div>
                  <img className='person' src="/v2/person/p1.png" alt="" />
                  <p>ETH - CryptoPunks</p>
                </div>
                <p>4.80%</p>
              </li>
              <li>
                <div className='leftbox'>
                  <div className="eth">
                    <img src="/v2/ethereum-eth-logo.png" alt="" />
                  </div>
                  <img className='person' src="/v2/person/p2.png" alt="" />
                  <p>ETH - Bored Ape Yacht Club</p>
                </div>
                <p>4.80%</p>
              </li>
              <li>
                <div className='leftbox'>
                  <div className="eth">
                    <img src="/v2/ethereum-eth-logo.png" alt="" />
                  </div>
                  <img className='person' src="/v2/person/p3.png" alt="" />
                  <p>ETH - Otherdeed for Otherside</p>
                </div>
                <p>4.80%</p>
              </li>
              <li>
                <div className='leftbox'>
                  <div className="eth">
                    <img src="/v2/ethereum-eth-logo.png" alt="" />
                  </div>
                  <img className='person' src="/v2/person/p4.png" alt="" />
                  <p>ETH - Doodles</p>
                </div>
                <p>4.80%</p>
              </li>
              <li>
                <div className='leftbox'>
                  <div className="eth">
                    <img src="/v2/ethereum-eth-logo.png" alt="" />
                  </div>
                  <img className='person' src="/v2/person/p5.png" alt="" />
                  <p>ETH - Azuki</p>
                </div>
                <p>4.80%</p>
              </li>
              <li>
                <div className='leftbox'>
                  <div className="eth">
                    <img src="/v2/ethereum-eth-logo.png" alt="" />
                  </div>
                  <img className='person' src="/v2/person/p6.png" alt="" />
                  <p>ETH - The Sandbox</p>
                </div>
                <p>4.80%</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="step4">
        <h3>Get the real price for each NFT</h3>
        <div className="trends">
          <div className="linearborder">
            <div className="trend">
              <div className="tag">Bonding Curve</div>
              <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/afa318bd-cef9-4b11-a001-f2c1650b1f00/public" alt="" />
            </div>
          </div>
          <img className='add' src="/v2/add.png" alt="" />
          <div className="linearborder">
            <div className="trend">
              <div className="tag">AI Price Evaluation</div>
              <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/0d2374fc-a4a3-43d4-7578-73968b237c00/public" alt="" />
            </div>
          </div>
          
        </div>
        <p>Bonding Curve + AI Price Evaluation as Pricing Strategy</p>
      </div>
    </div>
    <div className="evaluation">
      <h3>Trait-based NFT price evaluation</h3>
      <p>AI-driven pricing models analyse NFT metadata and transaction history to accurately evaluate NFTs in real-time.</p>
      <div className="progress">
        <img src="/imgs/mobile/ev1.png" alt="" />
        <img src="/imgs/mobile/ev2.png" alt="" />
        <img src="/imgs/mobile/ev3.png" alt="" />
        <img className='line1' src="/imgs/mobile/line.png" alt="" />
        <img className='line2' src="/imgs/mobile/line.png" alt="" />
      </div>
    </div>
    <div className="tech">
      <h3>Tech Module</h3>
      <div className="techs">
        <div className='linearborder'>
          <div className="techitem ">
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/1cfce16e-809e-4846-57a8-3a511d571900/public" alt="" />
            <p>TWAP Oracle</p>
          </div>
        </div>
        <div className='linearborder'>
          <div className="techitem ">
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/bcd46d47-cdf4-443e-b29d-a6a97b058400/public" alt="" />
            <p>Seacows Router</p>
          </div>
        </div>
        <div className='linearborder'>
          <div className="techitem ">
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/9753b14b-0284-45a8-dc9c-3da076a93c00/public" alt="" />
              <p>Pool Factory</p>
            </div>
          </div>
        </div>
      <a href="https://docs.seacows.io/" target='_blank'>
        <button className='btn'>Documentation</button>
      </a>
    </div>
    <div className="partner">
      <h3>Partners</h3>
      <div className="partners">
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/6aeea9be-2419-4353-1dfd-c822776a6a00/public" alt="" />
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/227ceb5b-541f-4cb8-6802-48c46ec1cd00/public" alt="" />
        <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/bb210ded-7580-4a52-56c6-fd99b31f2300/public" alt="" />
      </div>
    </div>
    <Footer />
    {
      showLaunch  && <Launch close={ () => setShowLaunch(false) } />
    }
  </div>
}

export default mobile