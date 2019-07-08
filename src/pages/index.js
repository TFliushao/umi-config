import styles from './index.css'
import url from '../public/favicon.ico'
import { connect } from 'dva'
import { Button } from 'antd-mobile'

const Layout = ({dispatch, indexPage: { list }}) => {
  const handleJump = (e) => {
    dispatch({
      type: 'indexPage/jump',
      payload: {
        name: 'indexPage'
      }
    })
  }

  const handleFetch = () => {
    dispatch({
      type: 'indexPage/fetch'
    })
  }

  return (
    <div>
      <div className={styles.welcome} />
      <img src={url} alt=""/>
      <Button onClick={handleJump}>JUMP</Button>
      <Button onClick={handleFetch}>FETCH</Button>
      <ul>
      {
        list.map((item, key) => <li key={key}>{item.id}</li>)
      }
      </ul>
    </div>
  );
}

export default connect(({ indexPage }) => ({ indexPage }))(Layout);