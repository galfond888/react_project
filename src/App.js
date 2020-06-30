import React  from 'react'

class Memo extends React.Component {
  render() {
    return (
      <div className="memo">
       <h1>厲害啦 List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default Memo