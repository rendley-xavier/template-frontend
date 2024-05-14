import React, { useState } from 'react'
import { Button, Col, Dropdown, Layout, Menu, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'

import logoestado from '../../assets/images/SPS_2023_clara.png'
import {
  DownOutlined,
  LogoutOutlined,
  UnlockOutlined,
  UserOutlined
} from '@ant-design/icons'
import { getMenuItem } from '../../utils/helper'
import { NavLink } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider'
import { menuItems } from '../../utils/constants'

interface LayoutSPSProps {
  children: React.ReactNode
}

const LayoutSPS: React.FC<LayoutSPSProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout>
      <Header
        style={{
          height: '90px',
          padding: 40,
          backgroundColor: '#2D4040',
          borderBottom: '.5rem solid #87c878',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <img
          src={logoestado}
          alt='Governo do Estado do Ceará'
          style={{ width: 200, marginRight: 7 }}
        />
        <Col>
          <Dropdown
            placement='bottomRight'
            trigger={['hover', 'click']}
            overlay={
              <Menu
                items={[
                  getMenuItem(
                    'ALTERAR SENHA',
                    'Senha',
                    <UnlockOutlined style={{ fontSize: '1rem' }} />
                  ),
                  getMenuItem(
                    <NavLink to={'/login'} style={{ color: 'red' }}>
                      SAIR
                    </NavLink>,
                    'Sair',
                    <LogoutOutlined
                      style={{ fontSize: '1rem', color: 'red' }}
                    />
                  )
                ]}
              />
            }
          >
            <Button
              style={{
                fontSize: '14px',
                border: 'none',
                background: 'none',
                color: '#fff'
              }}
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <Row style={{ gap: 5 }}>
                <UserOutlined style={{ fontSize: '1rem', color: '#87c878' }} />{' '}
                <p>
                  Olá, <strong> Usuário </strong>
                </p>
                <DownOutlined style={{ fontSize: '1rem', color: '#87c878' }} />
              </Row>
            </Button>
          </Dropdown>
        </Col>
      </Header>
      <Layout>
        <Sider
          collapsible
          theme='light'
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          breakpoint='lg'
          className='edit-sider'
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'space-between'
          }}
        >
          <Menu
            // onClick={onClick}
            // selectedKeys={[currentMenu]}
            subMenuCloseDelay={0.2}
            style={{
              marginTop: '2rem'
            }}
            items={menuItems}
            mode={'vertical'}
          />
        </Sider>
        <Layout
          style={{
            backgroundColor: '#EEF2F8',
            height: '92vh',
            padding: 16
          }}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutSPS
