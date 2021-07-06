import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase'
import firebase from 'firebase'


function App() {
  const [todos, setTodos] = useState([]);
  // useState is Hooks methods
  // todos=>  is variable name
  // setTodos=>  is function to mainpulate or modify the variable

  //when the app loads, we need to listen the database and fetch new todos as they get added / remove

  //useEffect is loaded once the  App loaded
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data()))
      setTodos(snapshot.docs.map(doc => ({
        id:doc.id,
        todo:doc.data().todo
      })));
    });
  }, []);

  // useEffect(() => {
  //   // this code here... fires when the app.js loads

  //  },dependancies) => dependices is basically its means this useEffect load when the variable and model loads the value

  const [input, setInput] = useState([""]);

  const addTodo = (event) => {
    event.preventDefault(); // will stop refreshing
  
    //push data to firebase
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    //push data to firebase end
  
    // setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>React App</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
