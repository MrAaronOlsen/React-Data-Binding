import React from 'react'

import { Header } from './header'
import { Body } from './body'
import { Footer } from './footer'

import './root.scss'
import styles from './styles.mod.scss'

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
