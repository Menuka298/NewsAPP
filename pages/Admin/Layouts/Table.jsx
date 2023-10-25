import React from 'react'
import "../../main.css";

function Table(props) {
  return (
    <div class='flex mt-5'>
        <table class="m-4 w-full text-sm text-center text-gray-500 dark:text-gray-400 p-6">
                {props.children}
                
        </table>
    </div>
  )
}

export default Table