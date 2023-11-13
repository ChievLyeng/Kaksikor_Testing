import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShowData } from './components/showData';
import './App.css';

function App() {
  const [userdata, setUserData] = useState();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const id = '6548a0fab6d98bc522c3360b';

  const handleData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:4000/users/account/${id}`);
      const userData = response.data.data;
      // Filter out fields you don't want to display
      // const filteredUserData = Object.keys(userData)
      //   .filter(field => field !== '_id' && field !== '__v' && field != 'Address')
      //   .reduce((obj, key) => {
      //     obj[key] = userData[key];
      //     return obj;
      //   }, {});
      setUserData(userData);
      
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(add.Address?.city)
  // console.log(userdata)

  // const handleInputChange = (event, fieldName) => {
  //   setUserData({
  //     ...userData,
  //     [fieldName]: event.target.value,
  //   });
  // };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <ShowData userdata={userdata} />
  );
}

export default App;
