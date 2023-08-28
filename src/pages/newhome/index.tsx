import './index.module.less'
import Header from '@components/widgets/newheader/index'
import { useState, useEffect } from 'react'
import Footer from '@components/widgets/Footer'
import Launch from '@components/widgets/Launch'
import Downhover from '@components/Icon/Downhover'
declare const Swiper: any;
declare const window: any;
var mySwiper: any = null
let to: any = null
let _step = 1
let doanimate = false
const newHone = () => {
  
  let certifySwiper: any = null
  const [scale, setScale] = useState(1)
  const [showBackToTop, setSHowBackToTop] = useState(false)
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

  const backtotop = () => {
    setSHowBackToTop(false)
    const innerheight = window.innerHeight
    to(0, 5, true)
    const autoscroll =  document.getElementById('autoscroll') as unknown as HTMLElement
    autoscroll.scrollTop = 0
  }
  useEffect(() => {
    const innerheight = window.innerHeight
    if (800 > innerheight ) setScale( innerheight / 800 )
    const animate: HTMLElement = document.getElementById('animate') as unknown as HTMLElement
    
    const step1: HTMLElement = document.querySelector('.step1') as unknown as HTMLElement
    const step2: HTMLElement = document.querySelector('.step2') as unknown as HTMLElement
    const step3: HTMLElement = document.querySelector('.step3') as unknown as HTMLElement
    const step4: HTMLElement = document.querySelector('.step4') as unknown as HTMLElement
    const leftcenter: HTMLElement = document.querySelector('.leftcenter') as unknown as HTMLElement
    const yuanxin: HTMLElement = document.querySelector('.yuanxin') as unknown as HTMLElement
    to = (end: number, timer = 12, top = false) => {
      let start = ~~animate.style.top.replace('px', '') || 0
      const step = (end - start) / 40
      doanimate = true
      const time = setInterval(() => {
        start += step
        animate.style.top = start + 'px'
        if (start >= end && step > 0 || start <= end && step < 0) {         
          clearInterval(time)
          animate.style.top = end + 'px'
          setTimeout(() => {
            doanimate = false
            if (top) {
              _step = 1
              step1.style.display = 'none'
              step2.style.display = 'none'
              step3.style.display = 'none'
              step4.style.display = 'none'
            } else {
              step < 0 ? _step++ : _step--
            }
          }, 1000)
        }
      }, timer)
    }
    document.getElementById('home')?.addEventListener('wheel', (e) => {
      if (!doanimate) {
        if (e.deltaY > 0 && _step === 1) {
          to(-innerheight)
          setTimeout(() => {
            step1.style.display = 'block'
            leftcenter.classList.add('cstep1')
          }, 500);
        } else if (e.deltaY < 0 && _step === 2) { // to sell
          to(0)
          setTimeout(() => {
            step1.style.display = 'none'
            leftcenter.classList.remove('cstep1')
          }, 500)
        } else if (e.deltaY > 0 && _step === 2) {
          step1.style.display = 'none'
          step2.style.display = 'block'
          doanimate = true
          leftcenter.classList.add('cstep2')
          initswiper()
          setTimeout(() => {
            _step++
            setTimeout(() => { doanimate = false }, 500)
          }, 500);
        } else if (e.deltaY < 0 && _step === 3) {
          step1.style.display = 'block'
          step2.style.display = 'none'
          doanimate = true
          certifySwiper.destroy(false);
          leftcenter.classList.remove('cstep2')
          setTimeout(() => {
            _step--
            setTimeout(() => { doanimate = false }, 500)
          }, 500);
        } else if (e.deltaY > 0 && _step === 3) {
          step2.style.display = 'none'
          step3.style.display = 'block'
          doanimate = true
          leftcenter.classList.add('cstep3')
          certifySwiper.destroy(false);
          setTimeout(() => {
            _step++
            setTimeout(() => { doanimate = false }, 500)
          }, 500);
        } else if (e.deltaY < 0 && _step === 4) {
          step2.style.display = 'block'
          step3.style.display = 'none'
          initswiper()
          doanimate = true
          leftcenter.classList.remove('cstep3')
          setTimeout(() => {
            _step--
            setTimeout(() => { doanimate = false }, 500)
          }, 500);
        } else if (e.deltaY > 0 && _step === 4) {
          step3.style.display = 'none'
          step4.style.display = 'block'
          doanimate = true
          leftcenter.classList.add('cstep4')
          yuanxin.classList.add('yuanxinactive')
          setTimeout(() => {
            _step++
            setTimeout(() => { doanimate = false }, 500)
          }, 500);
        } else if (e.deltaY < 0 && _step === 5) {
          step3.style.display = 'block'
          step4.style.display = 'none'
          doanimate = true
          leftcenter.classList.remove('cstep4')
          yuanxin.classList.remove('yuanxinactive')
          setTimeout(() => {
            _step--
            setTimeout(() => { doanimate = false }, 500)
          }, 500);
        } else if (e.deltaY > 0 && _step === 5) {
          to(- 2 * innerheight)
          setSHowBackToTop(true)
        } else if (e.deltaY < 0 && _step === 6 && document.querySelector('.trait')?.getBoundingClientRect().y === 0) {
          to(- innerheight)
          setSHowBackToTop(false)
        }
      }
    })
  }, [])
  const [showDialog, setShowDialog] = useState(false)
  return <div className='newhome' id='home'>
     {
      showDialog &&  <Launch close={ setShowDialog } />
    }
    <div className="animate" id='animate'>
    <section  className='firstpage'>
      <Header show={ () => setShowDialog(true) } />
      
      <div className="context">
        <div>
          <h1>Instantly Trade NFT At A Fair Price </h1>
          <p>SeaCows is a decentralized NFT AMM powered by AI-driven price oracles to enable instant NFT trading.</p>
          <button onClick={() => setShowDialog(true)} className='btn mybtn'>Swap Now</button>
        </div>
      </div>
    </section>
    <div className="sell" id='sell'>
      <div className="left">
        <div className="guidao"></div>
        <div className="center leftcenter ">
          <div className="buy rotate" style={{ left: '40px', top: '120px' }}>
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/fdef1941-1363-4e4f-9aa1-53bbd4b28100/public" alt="" />
            <p>BUY</p>
          </div>
          <div className="sellrol rotate" style={{ right: '40px', top: '120px' }}>
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/72c3aacd-c017-45d9-ecdd-0574622c2500/public" alt="" />
            <p>SELL</p>
          </div>
          <div className="provide rotate"  style={{ left: '260px', bottom: '0px' }}>
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/1fef5e40-8294-44a0-ecb1-ddcbe0bb0b00/public" alt=""/>
            <p>PROVIDE LIQUIDITY</p>
          </div>
          
          <div className="buyarrow">
            <img className='peopel rotate1' src="/v2/Rectangle.png" alt="" />
            <img className='arrow' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/853f4f75-3dee-4d7d-d049-c1d16484a300/public" alt="" />
            <img className='eth rotate1' src="/v2/eth.png" alt="" />
          </div>
          <div className="buyarrow sellarrow">
            <img className='peopel rotate2' src="/v2/Rectangle.png" alt="" />
            <img className='arrow' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/853f4f75-3dee-4d7d-d049-c1d16484a300/public" alt="" />
            <img className='eth rotate2' src="/v2/eth.png" alt="" />
          </div>
          <div className="buyarrow providearrow">
            <img className='peopel rotate3' src="/v2/Rectangle.png" alt="" />
            <img className='arrow' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/e8429c14-fb99-4284-3794-e02cbce3f400/public" alt="" />
            <img className='eth rotate3' src="/v2/eth.png" alt="" />
          </div>
        </div>
        <div className="yuanxin">
          <div className="nft">NFT</div>
          <p>Pool</p>
          <div className="Token">Token</div>
        </div>
      </div>
      <div className="right">
        {/* right */}
        <div className="step1">
          <h3>Sell your NFTs within 1 second</h3>
          <div className="sellcenter inner" style={{ transform: `scale(${scale})` }}>
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
              <button className='btn' onClick={() => setShowDialog(true)}>Swap Now</button>
            </div>
          </div>
          
        </div>
        <div className="step2">
          <h3>Fully decentralised peer-to-pool transactions</h3>
          <div className="inner" style={{ transform: `scale(${scale})` }}>
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
         
        </div>
        <div className="step3">
          <h3>Stake your NFTs and earn</h3>
          <div className="inner" style={{ transform: `scale(${scale})` }}>
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
        </div>
        <div className="step4">
          <h3>Get the real price for each NFT</h3>
          <div className="inner" style={{ transform: `scale(${scale})` }}>
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
      </div>
    </div>
    <div className="autoscroll" id='autoscroll'>
      {
        showBackToTop &&  <div className="backtotop" onClick={backtotop}>
          <Downhover fill="#fff" />
        </div>
      }
      <div className="trait">
        <section style={{ transform: `scale(${scale})` }}>
          <h2>Trait-based NFT price evaluation</h2>
          <p>AI-driven pricing models analyse NFT metadata and transaction history to accurately evaluate NFTs in real-time.</p>
          <div className="train-progress">
            <div className="left">
              <img className='card' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/c5380bca-22a0-40c2-b55c-208735c04200/public" alt="" />
              <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/538182b1-7d44-44c8-4be9-f7674a5c0b00/public" alt="" className="metadata" />
              <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/f25cdf4a-31d1-4a4c-c2c5-eded5dfbc900/public" alt="" className="line" />
            </div>
            <img className='trans' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/1b279fc6-da83-40de-8d1b-be0ace50cf00/public" alt="" />
            <div className="right">
              <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/8553176e-b5e0-4f5f-4d31-cbb09b9b8b00/public" alt="" className="line" />
              <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/94529bf6-6da0-4ccf-705c-8f9a961e0000/public" alt="" className="price" />
              <img className='card2' src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/7cc271d8-96d2-4253-55f4-919cf0e30f00/public" alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="tech">
        <section>
          <h2>Tech Module</h2>
          <div className="techs">
            <div className='linearborder hoveranimate'>
              <div className="techitem ">
                <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/1cfce16e-809e-4846-57a8-3a511d571900/public" alt="" />
                <p>TWAP Oracle</p>
              </div>
            </div>
            <div className='linearborder hoveranimate'>
              <div className="techitem ">
                <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/bcd46d47-cdf4-443e-b29d-a6a97b058400/public" alt="" />
                <p>Seacows Router</p>
              </div>
            </div>
            <div className='linearborder hoveranimate'>
              <div className="techitem ">
                <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/9753b14b-0284-45a8-dc9c-3da076a93c00/public" alt="" />
                  <p>Pool Factory</p>
               </div>
              </div>
            </div>
          <a href="https://docs.seacows.io/" target='_blank'>
            <button className='btn'>Documentation</button>
          </a>
        </section>
      </div>
      <div className="partner">
        <section>
          <h2>Partners</h2>
          <div className="partners">
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/6aeea9be-2419-4353-1dfd-c822776a6a00/public" alt="" />
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/227ceb5b-541f-4cb8-6802-48c46ec1cd00/public" alt="" />
            <img src="https://imagedelivery.net/j_uZAlMAZmPuTZ0wNVvYTA/bb210ded-7580-4a52-56c6-fd99b31f2300/public" alt="" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  
    </div>
   
   
   
  </div>
}

export default newHone