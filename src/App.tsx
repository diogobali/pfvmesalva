
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';
import { Crm } from './pages/Crm';

import { AuthContextProvider } from './contexts/AuthContexts'
import { AdminRoom } from './pages/AdminRoom';






function App() {

  return(
    <BrowserRouter>  
      <AuthContextProvider>  
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
          <Route path="/crm" component={Crm} />
        </Switch> 
      </AuthContextProvider>  
    </BrowserRouter>
  );

}

export default App;