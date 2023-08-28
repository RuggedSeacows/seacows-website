import '@mobile/style/join.less'

const Join = (props: any) => {
  const { close } = props
  return <div className="dialogjoin">
    <div className="inner">
      <i onClick={() => close(false)}></i>
      <h2>We are collaborating with selected GameFi project to test the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SeaCows protocol.</h2>
      <p>Get in touch with <a onClick={ () => close(false) } href="https://t.me/jwaitforitk" target={'_blank'}>John</a> to reach out! </p>
    </div>
  </div>
}

export default Join