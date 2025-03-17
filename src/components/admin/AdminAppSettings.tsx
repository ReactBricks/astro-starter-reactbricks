import { Admin, AppSettings } from 'react-bricks'
import ReactBricksApp from './ReactBricksApp'

export default function AdminLogin() {
  return (
    <ReactBricksApp>
      <Admin>
        <AppSettings />
      </Admin>
    </ReactBricksApp>
  )
}
