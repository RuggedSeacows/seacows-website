import { isMobile } from '@src/utils'
import Pc from './pc'
import Mobile from './mobile'

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
  return {isMobile: isMobile(userAgent)}
}