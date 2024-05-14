import React from 'react'
import { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label
  }
}

export const formatarCNPJ = (value: string): string => {
  const onlyNumbers = value.replace(/[^\d]/g, '')

  if (onlyNumbers.length >= 14) {
    return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(
      2,
      5
    )}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(
      8,
      12
    )}-${onlyNumbers.slice(12, 14)}`
  }

  return onlyNumbers
}

export const formatarCPF = (value: string): string => {
  const onlyNumbers = value.replace(/[^\d]/g, '')

  if (onlyNumbers.length >= 11) {
    return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(
      3,
      6
    )}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9, 11)}`
  }

  return onlyNumbers
}

export const formatarCEP = (value: string): string => {
  const onlyNumbers = value.replace(/[^\d]/g, '')

  if (onlyNumbers.length >= 8) {
    return `${onlyNumbers.slice(0, 5)}-${onlyNumbers.slice(5, 8)}`
  }

  return onlyNumbers
}
