import styles from './Login.module.less';
import './Login.less';
import { Button, Space, Input } from 'antd';


const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox + ' loginBox'}>
        <div className={styles.title}>
          <h1>前端&nbsp;.&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
          <div className='form'>
            <Space direction='vertical' size='large' style={{ display: 'flex' }}>
              <Input placeholder='用户名' />
              <Input.Password placeholder='密码' />
              <Button type='primary' block>登录</Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login