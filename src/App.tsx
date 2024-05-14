import React from 'react'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

import { token } from './styles/global'
import { ToastContainer } from 'react-toastify'
import RoutesGeneral from './routes'

const App: React.FC = () => {
  return (
    <ConfigProvider
      locale={ptBR}
      theme={{
        token
      }}
    >
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        className='toast-message'
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <RoutesGeneral />
    </ConfigProvider>
  )
}

export default App
