import { isMobile } from '@src/utils'
import Pc from '@src/pages/newhome/pc'
import Mobile from '@src/pages/newhome/mobile'

const Home = (props: any) => {
  const { isMobile } = props
  return (
    <>
    {
      isMobile ? <Mobile { ...props } /> : <Pc { ...props } />
    }
    </>
  )
}

export default Home

Home.getInitialProps = ({req}: any) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  let isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent)
  return {isMobile: isMobile(userAgent), isSafari}
}