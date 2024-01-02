import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <h1>Hello World</h1>
//   )
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };


// const anotherElement = (
//   <h1>This is a Object</h1>
// )


const username = 'chai aur code'

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  username  // if() not possible bcoz it's object not function
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  
  // <MyApp />  OR  MyApp()

  // anotherElement

  reactElement
)
