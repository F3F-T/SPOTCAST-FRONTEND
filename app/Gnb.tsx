import Link from 'next/link';
import React from 'react'


const Gnb = () => {
    const menu = [
        {name: "캐스팅/오디션", href: "/casting"},
        {name: "공개 포트폴리오", href: "/portfolio"},
        {name: "구인 공고", href: "/crew"},
        {name: "커뮤니티", href: "/community"},
    ]
    const aside = [
        {name: "로그인", href: "/login"},
        {name: "회원가입", href: "/signup"},
    ]

  return (
    <nav>
        <div>
            <a href="/">SPOTCAST</a>
        </div>
        <ul>
            {
                menu.map(({name, href}) => (
                       <li>
                        <Link href={href}>{name}</Link>
                       </li>
                    ))
            }
        </ul>
        <aside>
        <ul>
            {
                aside.map(({name, href})=>(
                    <li>
                        <Link href={href}>{name}</Link>
                    </li>
                ))
            }
        </ul>
        </aside>
    </nav>
  )
}

export default Gnb