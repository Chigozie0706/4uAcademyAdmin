import './clientList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useEffect, useState } from 'react';

export default function ClientList() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = () => {
    fetch('http://localhost:34567/api/select_all_clients')
      .then((res) => res.json())
.then((data) => {
        console.log(data)
        setClient(data.data)
      })
      .catch((err) => console.log(err));
  };

  const deleteClient = (id) => {
    fetch('http://localhost:34567/api/delete_client/' + id, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getClient();
      });
    });
  };

  // const handleDelete = (id) => {
  //   setUsers(users.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstname',
      headerName: 'First name',
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
      field: 'title',
      headerName: ' Title',
      width: 130,
    },
    {
      field: 'company_name',
      headerName: ' Company name',
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
              onClick={() => deleteClient(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={client}
        disableSelectionOnClick
        columns={columns}
        // loading={!client.length}
        // loading={client}
        pageSize={8}
        // checkboxSelection
      />
    </div>
  );
}
