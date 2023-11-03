import React from 'react'
import Link from 'next/link'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <ul>
            <li>
                <Link rel="stylesheet" href="/">Home</Link>
            </li>
            <li>
                <Link rel="stylesheet" href="/about">About</Link>
            </li>
        </ul>
        {children}
    </div>
  );
};

export default MainLayout

//rafce