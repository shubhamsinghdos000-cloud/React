import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My Custom React App!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Click me to go to Google!'
// }

const anotherElement = (
<a href="https://google.com" target="_blank">Visit Google</a>
)


const anotherUser="Hello User";
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank',
  },
  'Click me to go to Google!',
  anotherUser
)
//createRoot(document.getElementById('root')  ).render(
  // <StrictMode>
  //   <App />
  //   <MyApp />
  // </StrictMode>
  // anotherElement
 // reactElement
//)

// createRoot(document.getElementById('root')  ).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

createRoot(document.getElementById('root')  ).render(
  <StrictMode>
    {reactElement}
  </StrictMode>
)

