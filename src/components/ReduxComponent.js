import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getAllUsers, resetUsers} from '../actions/user.actions'
import TodoInput from './TodoInput'


class ReduxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { newTodo:'' };
    }
    componentDidMount(){
        this.props.getAllUsers()
    }
    clearAll = (event) => {
        event.preventDefault();
        this.props.clearAllTodos();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("state.newTodo : ", this.state.newTodo)
        if(this.state.newTodo!==''){
            this.props.addNewToDo(this.state.newTodo);
            this.setState({newTodo:''})
        }
    }
    componentWillUnmount(){
        this.props.resetUsers();
    }
    render() {
        let todosList = this.props.todos.map((todo,i) => {
            return (<li key={i}>{todo}</li>)
        }) 
        let userList = this.props.users.map((user) => {
            return (<li key={user.id}>{user.name}</li>)
        }) 
        console.log(this.props)
        return (
            <div className="fragment">
            <div className="row" style={{margin: '20px'}}>
                <div className="col-sm-6">
                <h3>ToDo List</h3>
                <TodoInput/>
                <h4>List of todos</h4>
                <ul>
                    {todosList}
                </ul>
                </div>
                <div className="col-sm-6">
                    <h3>User List</h3>
                    <ul>
                        {userList}
                    </ul>
                </div>
            </div>
                
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.info("state in mpstp",state)
    return {
        todos: state.todos,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: bindActionCreators(getAllUsers, dispatch),
        resetUsers: bindActionCreators(resetUsers, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxComponent);



// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },