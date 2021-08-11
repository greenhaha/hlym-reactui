/**
 * title: 分割文字使用正文样式
 * desc: 使用 plain 可以设置为更轻量的分割文字样式。
 *
 */
import React from 'react';
import { Divider } from '@hlym/components';

export default () =>  {
    return (
        <>
            <p>啊</p>
            <Divider orientation="left" plain>左边</Divider>
            <p>啊 啊</p>
            <Divider orientation="center" plain>中间</Divider>
            <p>啊</p>
            <Divider orientation="right" plain>右边</Divider>
            <p>啊 啊</p>
        </>
    )
};