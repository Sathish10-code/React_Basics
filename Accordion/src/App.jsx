import React from 'react'
import Accordion from './Accordion';

const App = () => {
  const items =[
    {
      title:"JavaScript Basics",
      content:"Learn variables, functions, and loops in JavaScript"
    },
    {
      title:"React.js Overview",
      content:"Understand components, state, and pops in React."
    },
    {
      title:"Node.js",
      content:"Basics of server-side development with Node.js."
    },
    {
      title:"Full-Stack Development",
      content:"Build full-stack apps with React and Node.js"
    },
  ];

  return (
    <div class="app-center-wrapper">
      <Accordion items={items}/>
    </div>
  )
}

export default App
