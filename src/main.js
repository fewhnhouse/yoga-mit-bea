import App from './App.svelte'
import cssVars from 'css-vars-ponyfill'
cssVars({
  // Options...
})
const app = new App({
  target: document.body,
})

export default app
