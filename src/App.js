
import React, { useState } from 'react';
import './App.css';




function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');

  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);  //index
  


  const [users, setUsers] = useState([]);
  

  const addUser =(e)=>{
      e.preventDefault();
      const user = {
        name,
        email,
        adress,
      }
      if (edit){
          // updateUser
          let copy = users;
          Object.assign(copy[active], user);
          setUsers([...copy]);
          setEdit(false);
          setActive(null)
//   const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget);// {a: 1, b: 4, c: 5}

      }else{
          //addUser
          setUsers([...users, user]);
      // console.log(users);
      } 
      setName('')
      setEmail('')
      setAdress('')  
  }

  const onEditClick = (index)=>{
     const user = users[index];

     setName(user.name);
     setEmail(user.email);
     setAdress(user.adress);

     setActive(index);
     setEdit(true);
  }
  
  const deleteUser = (user)=>{
    if(window.confirm('Are you sure you want to delete')){
      let copy = users.filter(item => item !== user)
      setUsers([...copy]);
     }
   
  };

  return (
    <div className="App">
      <h1 className='my-5 text-center'>React Js CRUD App</h1>
          <div className="container">
              <div className="row   justify-content-center">
                <div className="col-md-8 col-lg-6">

                    <form onSubmit={addUser}>
                      <div className="form-group">
                        <label className='mb-2' htmlFor=''>Name</label>                   
                        <input onChange={e => setName(e.target.value)}  value={name} type="text" className="form-control mb-3"/>
                      </div>
                      <div className="form-group">
                        <label className='mb-2' htmlFor=''>Email</label>                   
                        <input onChange={e => setEmail(e.target.value)}  value={email} type="email" className="form-control mb-3"/> 
                      </div>
                      <div className="form-group">
                        <label className='mb-2' htmlFor=''>Adress</label>                   
                        <input onChange={e => setAdress(e.target.value)}  value={adress} type="text" className="form-control mb-3"/>
                      </div>
                      <button className='btn btn-success form-control mt-3'>
                        {
                          edit ? 'Update' : 'Add'
                        }                      
                      </button>

                  
                    </form>

                </div>
              </div>
              
     
      
      <table className="table table-bordered my-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index)=>{
              return (<tr key={user.name}>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.adress}</td>
                 <td>
                  <button onClick={()=>{onEditClick(index)} } className='btn btn-info form-control'>
                    Edit
                  </button>
                 </td>
                 <td>
                  <button onClick={()=>{deleteUser(user)} }  className='btn btn-danger form-control'>
                    Delete
                  </button>
                 </td>
                 
                </tr> )
            })
          }
        </tbody>
      </table>
      
    </div>
    </div>
  );
}

export default App;
