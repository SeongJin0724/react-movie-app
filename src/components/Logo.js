import {Link} from 'react-router-dom';
import bg from '../img/YTS_logo.png';
import style from './Logo.module.scss';

export default function Logo() {
  return(
    <h1 className={style.bg}>
      <Link to={`/`}>
        <img className={style.bg_img} src={bg} alt="YTS"/>
      </Link>
    </h1>
  )
}