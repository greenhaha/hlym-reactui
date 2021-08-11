import React from 'react';
// import t from 'prop-types';

export interface ButtonProps {
  /**
   * @description Button的类型
   * @default 'info'
   */
  type?: 'info' | 'primary' | 'success' | 'warning' | 'error',
  /**
   * @description Button的尺寸
   * @default 'medium'
   */
  size?: 'tiny' |'small' | 'medium' | 'large',
  /**
   * @description Button的自定义class名
   * @default 'string'｜ -
   */
  className?: string,
  /**
   * @description Button是否虚线
   * @default -
   */
  dashed?: boolean,
  /**
   * @description Button是否禁用
   * @default -
   */
  disabled?: boolean,
  /**
   * @description Button的点击时间
   * @default function
   */
  onClick?: (e: any) => void,
  prefixCls?: string,
  children: React.ReactNode
}



const Button: React.FC<ButtonProps> = props => {
  const {
    type = 'info',
    // disabled = false,
    // dashed,
    // className,
    // size = 'medium',
    // prefixCls = 'hl-btn',
    // onClick,
    children
  } = props

  return (
    <button className={`hl-button-${type}`}>
      {children}
    </button>
  )
}

export default Button