
import './index.less'

const Launch = (props: any) => {
  const { close } = props
  return <div className="pcdialog">
    <div className="inner">
      <i onClick={() => close(false)}></i>
      <h2>Testnet App launched!</h2>
      <p>Apply for access on Discord.</p>
      <a href="https://discord.gg/BwQZpqJt63" target="_blank">
        <button onClick={() => close(false)} className='btn'> <img src="/v2/discord_hover.png" alt="" /> Join Discord</button>
      </a>
    </div>
  </div>
}

export default Launch