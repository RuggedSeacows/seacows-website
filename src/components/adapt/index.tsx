import { detectDeviceType } from '@utils/index'
import { useEffect, useState } from 'react'

const Adapt = (props: any) => {
  const [device, setDevice] = useState('')
  const { Pc, Mobile } = props
  useEffect(() => {
    try {
      setDevice(detectDeviceType())
    } catch (error) {
      console.log(error)
    }
  },[])
  return (
    <>
      { device === 'Mobile' && <Mobile { ...props } /> }
      { device === 'Desktop' && <Pc { ...props } /> }
    </>
  )
}

// Adapt.getInitialProps = async ({req}: any) => {
//   console.log(req)
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   return {isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( userAgent )}
// }

export default Adapt
