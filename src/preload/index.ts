import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in BrowserWindow.webPreferences')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (error) {
  console.log(error)
}
