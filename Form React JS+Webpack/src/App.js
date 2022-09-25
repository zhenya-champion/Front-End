import React from "react"
import Header from './components/Header'
import Users from "./components/Users"
import AppUser from "./components/AppUser"
import axios from "axios"

const baseUrl = 'https://reqres.in/api/users?page=1' // берем пользователей из сети

class App extends React.Component { // основной компонент
  constructor(props){
    super(props)

    axios.get(baseUrl).then((res) => { // берем пользователей из сети
      this.setState({users: res.data.data})
    })

    this.state = {
        users: []
    }
    this.appUser = this.appUser.bind(this) // позволяем использовать состояния
    this.deleteUser = this.deleteUser.bind(this) // позволяем использовать состояния
    this.editUser = this.editUser.bind(this) // позволяем использовать состояния
}
  render (){
    return(
      <div> 
        <Header title='Список пользователей'/>
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside>
          <AppUser onAdd={this.appUser}/>        
        </aside>
      </div>
    )
  }

  deleteUser(id){ // удаляем
    this.setState({
      users: this.state.users.filter((el) => el.id !== id) // filter - перебирает массив
    })
  }

  editUser(user){ // редактируем
    let allUsers = this.state.users // получили всех пользователей
    allUsers[user.id - 1] = user // нашли нужного и заменили

    this.setState({users: []}, () => { // очистили список
      this.setState({users: [...allUsers]}) // устанавливаем новый список
    })
  }

  appUser(user){
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}]}) // добавляем к нашему списку человека
  }
}

export default App