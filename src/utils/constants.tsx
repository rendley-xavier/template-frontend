import React from 'react'
import { getMenuItem } from './helper'
import { MenuProps } from 'antd'
import { PieChartOutlined } from '@ant-design/icons'
type MenuItem = Required<MenuProps>['items'][number]

export const menuItems: MenuItem[] = [
  getMenuItem('Agentes', 'agentes', <PieChartOutlined />),
  getMenuItem('Armas', 'armas', <PieChartOutlined />),
  getMenuItem('Mapas', 'mapas', <PieChartOutlined />),
  getMenuItem('Títulos de cards', 'titulos-de-cards', <PieChartOutlined />),
  getMenuItem('Níveis', 'niveis', <PieChartOutlined />),
  getMenuItem('Sprays', 'sprays', <PieChartOutlined />)
]
