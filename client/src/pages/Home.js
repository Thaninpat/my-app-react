import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Moment from 'react-moment';

const GET_USER = gql`
  query getUsers {
    viewUsers {
      id
      email
      username
      password
      createdAt
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_USER);
  const [count, setCount] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='home'>
      <table>
        <thead>
          <tr>
            <th>email</th>
            <th>username</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {data.viewUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                <Moment format='DD-MM-YYYY HH:mm'>{user.createdAt}</Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
