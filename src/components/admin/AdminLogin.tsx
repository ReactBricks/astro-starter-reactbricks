import { Admin, Login } from 'react-bricks'
import ReactBricksApp from './ReactBricksApp'

export default function AdminLogin() {
  return (
    <ReactBricksApp>
      <Admin isLogin>
        <Login />
      </Admin>
    </ReactBricksApp>
  )
}
