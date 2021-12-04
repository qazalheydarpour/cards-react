import logo from './logo.svg';
import './App.css'
import Profile_container from './component/profile.container'
import './component/profile.Style.css'
import Profile from './component/profile.js'

const user = [
    {
        id : 1,
        img : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
        name : 'User #1',
        status : 'Developer'
    },
    {
        id : 2,
        img : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
        name : 'User #2',
        status : 'Designer'
    },
    {
        id : 3,
        img : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
        name : 'User #3',
        status : 'photographer'
    },
    {
        id : 4,
        img : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
        name : 'User #4',
        status : 'Programmer'
    }
]
function App() {
  return (
    <div className="App">
     <Profile_container>
      {
        user.map(user=>
          (<Profile key={user.id} img={user.img} name={user.name} status={user.status}/>))
      }
    </Profile_container>
    </div>
  );
}

export default App;
 