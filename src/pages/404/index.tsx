import './index.module.less'

const PageNotFound: React.FC = () => {

  return (<>
    <section className="notfound">
      <div className='zone'>
        <h2>Oops, we got lost....</h2>
        <p>We are so sorry, something is wrong <a href="/">Redirect to Home.</a></p>
        <img src="/imgs/404-img.png" alt="404" />
      </div>
    </section>
  </>)
}

export default PageNotFound