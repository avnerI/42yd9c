import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'websiteName', headerName: 'websiteName header', width: 90 },
];

const rows = [
  { id: 1, websiteName: 'CNN' },
  { id: 2, websiteName: 'ynet' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
