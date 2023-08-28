import './index.less'
const Footer = () => {
  return  <footer>
  <section>
    <div className="logo">
      <img src="/v2/logo.png" alt="" />
    </div>
    <div className='links'>
      <dl>
        <dt>Developer</dt>
        <dd>GitHub</dd>
        <dd><a href="https://docs.seacows.io/" className="resource"  target="_blank">Documentation</a></dd>
        <dd>Whitepaper</dd>
      </dl>
      <dl>
        <dt>Community</dt>
        <dd><a href="https://discord.gg/BwQZpqJt63" className="resource"  target="_blank">Discord</a></dd>
        <dd><a href="https://twitter.com/SeaCowsNFT" className="resource"  target="_blank">Twitter</a></dd>
        <dd>Telegram</dd>
      </dl>
      <dl>
        <dt>About</dt>
        <dd><a href="https://medium.com/@SeaCows/about" className="resource"  target="_blank">Medium</a></dd>
        <dd> <a href="https://seacows.canny.io/" className="resource" target="_blank" >Feedback</a> </dd>
        <dd>Media Kit</dd>
      </dl>
    </div>
    <div className="joinus">
      <h3>JOIN US</h3>
      <p>Join Discord for Alpha Test!</p>
      <a href="https://discord.gg/BwQZpqJt63" target="_blank">
        <button className='btn'>JOIN US</button>
      </a>
    </div>
  </section>
  <div className="copyright">
    <section>
      <span>2021 - 2022 seacows. All rights reserved.</span>
    </section>
  </div>
</footer>
}

export default Footer