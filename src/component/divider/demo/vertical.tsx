/**
 * title: 垂直分割线
 * desc: 使用 `type="vertical"` 设置为行内的垂直分割线。
 *
 */
 import React from 'react';
 import { Divider } from '@hlym/components';
 
 export default () =>  {
     return (
         <>
             <span>这个</span>
             <Divider type="vertical" />
             <span>看起来</span>
             <Divider type="vertical" />
             <span>貌似，好像</span>
             <Divider type="vertical" />
             <span>不太显眼啊......</span>
         </>
     )
 };