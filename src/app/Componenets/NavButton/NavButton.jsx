import React from 'react'
import Link from 'next/link';

function NavButton(props) {
    
  return (
    <div>
        <Link href={props.Pageurl} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{props.NavButton}</Link>
    </div>

  )
}

export default NavButton