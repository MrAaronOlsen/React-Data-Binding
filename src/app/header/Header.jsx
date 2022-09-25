import React from 'react'

import { DisplayGlobalMessage } from 'modules/globalmessage'

import styles from './styles.mod.scss'

export default function Header() {
  return (
    <div className={styles.container}>
      <DisplayGlobalMessage />
    </div>
  )
}
