import { connect } from 'dva'

const User = ({ user }) => {
  const handle = (a, b) => {
    b.sort()
  }

  return (
    <div>
      <h1>111</h1>
      <button onClick={handle}>报错</button>
    </div>
  )
}

export default connect(({ user }) => ({ user }))(User)