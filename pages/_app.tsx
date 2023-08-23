import { AppProps } from 'next/app'
import '@/styles/global.css'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { monitorWalletConnection } from '@/services/blockchain'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' //CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
    monitorWalletConnection()
  }, [])

  if (!showChild || typeof window === 'undefined') {
    return null
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Provider>
    )
  }
}
