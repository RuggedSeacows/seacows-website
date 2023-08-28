import './index.module.less'
import { useState } from 'react'
import { message } from 'antd'
import MyFetch from '@utils/fetch'
const Survey: React.FC = (props: any) => {
  const question1 = 'Where did you hear about seacow?'
  const question2 = 'What game NFT do you want to buy? (multiple）'
  const q1 = [
    { key: 'A', ans: 'Discord' },
    { key: 'B', ans: 'Twitter' },
    { key: 'C', ans: 'Friend recommendation' },
    { key: 'D', ans: 'Google search' },
    { key: 'E', ans: 'Medium' },
    { key: 'F', ans: 'other(fill in the blank)' },
  ]
  const q2 = [
    { key: 'A', ans: 'VOX collectibles - Town Star' },
    { key: 'B', ans: 'VOX collectibles - Mirandus' },
    { key: 'C', ans: 'Town Star NFT' },
    { key: 'D', ans: 'Mirandus NFT' },
    { key: 'E', ans: 'Voxies' },
    { key: 'E', ans: 'Spider Tanks NFT' },
    { key: 'E', ans: 'Mini Royale: Nations NFT' },
    { key: 'F', ans: 'other(fill in the blank)' },
  ]
  const [topPosition, setTopPosition] =  useState(0)
  const [code, setCode] =  useState('')
  const jump = () => {
    let height = window.innerHeight
    setTopPosition(topPosition - height)
    const inner: HTMLElement = document.getElementById('inner') as HTMLElement
    inner.style.top = topPosition - height + 'px'
  }
  const [q1ans, setQ1ans] = useState('')
  const [q2ans, setQ2ans] = useState<Array<string>>([])
  const setQ1 = (ans: string) => {
    setQ1ans(ans)
  }
  const setQ2 = (ans: string) => {
    const index = q2ans.findIndex(item => ans === item)
    if (index > -1) {
      q2ans.splice(index, 1)
    } else {
      q2ans.push(ans)
    }
    setQ2ans(q2ans.slice(0))
  }
  const Q1Next = () => {
    if (!q1ans) {
      message.error('please choose！')
    } else {
      jump()
    }
  }
  const Q2Next = () => {
    if (!q2ans.length) {
      message.error('please choose！')
    } else {
      jump()
    }
  }
  const submit = () => {
    const email:HTMLInputElement = document.getElementById('email') as HTMLInputElement
    const reg = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/
    if (email.value && reg.test(email.value)) {
      MyFetch({
        url: '/survey/',
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          questions: [
            {
              q: question1,
              type: 'single',
              a: q1ans
            },
            {
              q: question2,
              type: 'multiply',
              a: q2ans
            }
          ]
        })
      }).then(() => {
        // setCode()
        jump()
      }).catch(() => {
        jump()
      })
    } else {
      message.error('Email is required！')
    }
  }
  return (
    <>
      <div className="survey" id="inner">
        <div className="page page1">
          <h2>Seacows</h2>
          <p>yolominds</p>
          <button id="start" onClick={ jump }>start</button>
        </div>
        <div className="page">
          <h3>1、{ question1 }</h3>
          {
            q1.map((item, index) => {
              return (
                <div key={index} onClick={ () => { setQ1(item.ans)  }  } className="q1"> <i className= { item.ans=== q1ans ? 'active' : '' } >{ item.key }</i> <p>{ item.ans }</p></div>
              )
            })
          }
          <button id="start" onClick={ Q1Next }>next</button>
        </div>
        <div className="page">
          <h3>2、{ question2 }</h3>
          {
            q2.map((item, index) => {
              return (
                <div key={index} onClick={ () => { setQ2(item.ans)  }  } className="q1"> <i className= { q2ans.some(_item => _item === item.ans) ? 'active' : '' } >{ item.key }</i> <p>{ item.ans }</p></div>
              )
            })
          }
          <button id="start" onClick={ Q2Next }>next</button>
        </div>
        <div className="page page4">
          <h3>3、Contact(email) </h3>
          <input id="email" type="text" placeholder="name@example.com" />
          <button id="submit" onClick={submit}>ok</button>
        </div>
        <div className="page">
          <h3 className='success'>Succeed</h3>
          <p>Thank you for completing the survey</p>
          <p>here's the invitation code</p>
          <p>{ code }</p>
        </div>
      </div>
    </>
  )
}

export default Survey