import React from 'react'

function Label(props) {
  return (
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{props.Labelname}</label>
    </div>
  )
}

export default Label