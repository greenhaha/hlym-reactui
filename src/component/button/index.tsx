import React from 'react';
import classNames from 'classnames';
import { useCallback } from 'react';

export type ButtonTypes = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
export type ButtonSizes = 'tiny' | 'small' | 'medium' | 'large'
export interface ButtonProps {
  type?: ButtonTypes;
  size?: ButtonSizes;
  children: React.ReactNode;
  prefixCls?: string;
  className?: any;
  onClick?: (e: any) => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = props => {
  const {
    type = 'default',
    size = 'medium',
    disabled = false,
    children,
    className,
    prefixCls = 'cz-btn',
    onClick,
  } = props;

  // 处理点击事件
  const handleClick = useCallback(
    e => {
      if (onClick) {
        onClick(e);
      }
    },
    [onClick],
  );

  const classString = classNames (prefixCls, {
    [`${prefixCls}-${type}`]: type && !disabled,
    [`${prefixCls}-${size}`]: size && !disabled,
    [`${prefixCls}-disabled`]: disabled,
    [className]: className,
  })

  return (
    <button
      className = {classString}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
