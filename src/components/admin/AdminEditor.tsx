import { Admin, Editor } from 'react-bricks'
import ReactBricksApp from './ReactBricksApp'

export default function AdminLogin() {
  return (
    <ReactBricksApp>
      <Admin>
        <Editor />
      </Admin>
    </ReactBricksApp>
  )
}
