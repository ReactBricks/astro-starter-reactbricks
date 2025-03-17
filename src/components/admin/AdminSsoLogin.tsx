import { Admin, SsoLogin } from 'react-bricks'
import ReactBricksApp from './ReactBricksApp'

export default function AdminLogin() {
  return (
    <ReactBricksApp>
      <Admin isLogin>
        <SsoLogin />
      </Admin>
    </ReactBricksApp>
  )
}
