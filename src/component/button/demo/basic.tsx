import React from 'react';
import { Button } from '@hlym/components';

export default () => {
  const setStyle = () => {
    console.log('1112');
  };
  return (
    <>
      <Button
        onClick={() => {
          setStyle();
        }}
      >
        defalut
      </Button>
      <Button type="info">info</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">error</Button>
      <Button type="primary" disabled>
        disabled
      </Button>
    </>
  );
};