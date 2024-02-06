import React from 'react'
import styles from './siteTheme.module.css'

function Sitetheme() {
  const mode='light'
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode==='light'?{left:'2px'}:{right:'2px'}}/>
    </div>
  )
}

export default Sitetheme