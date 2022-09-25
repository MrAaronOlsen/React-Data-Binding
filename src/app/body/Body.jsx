import React from 'react'

import { SendGlobalMessage } from 'modules/globalmessage'

import styles from './styles.mod.scss'

export default function Body() {
  return (
    <div className={styles.container}>
      <SendGlobalMessage />
    </div>
  )
}
