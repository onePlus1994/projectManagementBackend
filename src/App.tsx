import { useRoutes } from 'react-router-dom';
import routes from './router';
function App() {
  const outletRoute = useRoutes(routes)
  return (
    <>
      {outletRoute}
    </>
  )
}

export default App
