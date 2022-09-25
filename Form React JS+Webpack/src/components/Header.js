import React from "react"

class Header extends React.Component {  // шапка
  render(){
    return(
       // props - что передаем
      <header className="header">
        {this.props.title}
        </header>
    )
  }
}

export default Header