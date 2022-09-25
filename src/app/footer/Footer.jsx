import React from 'react'

import { DisplayGlobalMessage } from 'modules/globalmessage'

import styles from './styles.mod.scss'

export default function Footer() {
  return (
    <div className={styles.container}>
      <DisplayGlobalMessage />
    </div>
  )
}
