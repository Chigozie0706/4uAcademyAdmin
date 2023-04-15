import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { apiURL } from '../../api';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  // const handleDelete = (id) => {
  //   setUsers(users.filter((item) => item.id !== id));
  // };

  const getUser = () => {
    fetch(`${apiURL}/select_all_students`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data....', data )
        setUsers(data.data1)
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    fetch(`${apiURL}/delete_users/` + id, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUser();
      });
    });
  };
  // const deleteUser = (id) => {
  //   fetch('http://localhost:34567/api/delete_users/' + id, {
  //     method: 'DELETE',
  //   }).then(() => {
  //     console.log('deleted');
  //     window.location.reload();
  //     // setUsers();
  //   });
  // };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstname',
      headerName: 'First name',
      width: 150,
    },
    {
      field: 'middlename',
      headerName: 'Middle name',
      width: 150,
    },
    {
      field: 'lastname',
      headerName: 'Last name',
      width: 150,
    },

    {
      field: 'phone',
      headerName: 'Phone No',
      width: 120,
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'dob',
      headerName: ' DOB',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => deleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        // loading={!users.length}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
