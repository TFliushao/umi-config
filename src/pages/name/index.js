import { connect } from 'dva'

const Name = ({ name }) => {
  console.log(44,name)
  return (
    <div>
      <h1>Layout</h1>
    </div>
  )
}

export default connect(({ name }) => ({ name }))(Name)