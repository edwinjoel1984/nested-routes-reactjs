import React from 'react';  
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addNewToDo, clearAllTodos} from '../actions/todo.actions'

let TodoInput = ({handleSubmit, addNewToDo, clearAllTodos, reset, pristine, submitting}) => {

    function addTodo(formVals){
        console.log('forms val', formVals.todo);
        if(typeof formVals.todo!=='undefined')
            addNewToDo(formVals.todo);
    }
    function clearAll2(){
        console.log("clearAll")
        clearAllTodos()
    }
    return (
            <form onSubmit={handleSubmit(addTodo)}>
                <label htmlFor="todo">Add ToDo : </label>
                <Field type="text" name="todo" component="input" id="todo"/>
                <p>
                <button type="submit" style={{margin:'10px'}} className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
                <button type="button" style={{margin:'10px'}} className="btn btn-warning" onClick={reset}>Reset</button>
                <button type="button" style={{margin:'10px'}} className="btn btn-danger" onClick={clearAll2}>Clear List</button>
                </p>
            </form>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        addNewToDo: bindActionCreators(addNewToDo, dispatch),
        clearAllTodos: bindActionCreators(clearAllTodos, dispatch)

    }
}
TodoInput = reduxForm({
    // a unique name for the form
    form: 'todo_input'
  })(TodoInput)

export default connect(null,mapDispatchToProps)(TodoInput);

