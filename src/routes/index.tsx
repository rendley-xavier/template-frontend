import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import LayoutSPS from '../components/Layout'
import Home from '../pages/Agentes'

const RoutesGeneral: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <LayoutSPS>
              <Outlet />
            </LayoutSPS>
          }
        >
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesGeneral
