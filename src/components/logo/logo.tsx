import {FC} from 'react'
import logo from '@assets/logo.svg'
import styles from './logo.module.scss'

export const Logo: FC = () => {
  return (
    <a className={styles.logo} href="/">
      <img src={logo} alt="Bank"/>
    </a>
  )
}