import styles from './navigation.module.scss'

export const Navigation = () => {
  const list = [
    {title: 'Summary'}, {title: 'Cards'}, {title: 'Activity'},
    {title: 'Recipients'}, {title: 'Help Center'}, {title: 'Earn Gifts'}
  ]

  const menu = list.map((item: {title: string, href?: string}, index: number) => {
    return (
      <li key={index} className={styles.item}>
        <a href="/" className={styles.link}>{item.title}</a>
      </li>
    )
  })

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menu}
      </ul>
    </nav>
  )
}