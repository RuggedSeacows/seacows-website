const Img = (props: any) => {
  const { src, srclight, alt = '', onClick = () => {}, className = '' } = props
  return <>
    {
      props.theme === 'light' ?
        <img src={ srclight } alt={ alt } onClick={onClick} className={className} />
        :
        <img src={ src } alt={ alt } onClick={onClick} className={className} />
    }
  </>
}

export default Img