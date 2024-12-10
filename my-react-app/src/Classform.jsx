class Classform extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        text: ""
      };
    }
  
    handleChange = (event) => {
      this.setState({
        text: event.target.value
      });
    };
  
    handleUsernameChange = (event) => {
      this.setState({
        username: event.target.value
      });
    };
  
    render() {
      
      return (
        <>
          <h1>Class Based Component</h1>
          <input type="text" value={this.state.text}
               onchange={this.handleChange}
            
          />
          <h2>{this.state.text}</h2>
          <input type="text" value={this.state.username}
              onchange={(e)=>this.setState({usename:e.target.value})}
            
          />
          <h2>{this.state.username}</h2>
        </>
      );
    }
  }
  
  export default Classform;
  