import { Admin, SsoLoginFailure } from 'react-bricks'
import ReactBricksApp from './ReactBricksApp'

export default function AdminSsoFailure() {
  return (
    <ReactBricksApp>
      <Admin isLogin>
        <SsoLoginFailure />
      </Admin>
    </ReactBricksApp>
  )
}
