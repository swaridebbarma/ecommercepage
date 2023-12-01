"use state"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './header.js';
import Scroll from './scroll';


export default function Home() {
  return (
    <>
      <Header/>
      <Scroll/>

    </>

  );
}