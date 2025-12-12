import styles from './styles.module.css'
import getClassNameFactory from '../../lib/get-class-name-factory'
const getClassName = getClassNameFactory('Card', styles)


export const Card = ({ name, date }: { name: string; date: string }) => {
  return (
    <div className={getClassName()}>
      <div className={getClassName('nav')}>
        <p className={getClassName('nav-title')}>{name}</p>
        <p className={getClassName('nav-subtitle')}>Laatste inspectie</p>
        <p className={getClassName('nav-date')}>{date}</p>
      </div>
      <div className={getClassName('footer')}>
        <button className={getClassName('footer-primarybutton')}>Bekijk Kast</button>
        <button className={getClassName('footer-secondarybutton')}>Nieuwe Inspectie</button>
      </div>
    </div>
  )
}
