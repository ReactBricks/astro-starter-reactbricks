import { Admin, SsoLoginSuccess } from 'react-bricks'
import ReactBricksApp from './ReactBricksApp'

export default function AdminSsoSuccess() {
  return (
    <ReactBricksApp>
      <Admin isLogin>
        <SsoLoginSuccess />
      </Admin>
    </ReactBricksApp>
  )
}
