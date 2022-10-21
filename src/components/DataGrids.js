import React, { useState, useEffect } from 'react'

import { DataGrid } from '@mui/x-data-grid'

import axios from "axios"



const columns = [

  { field: 'id', headerName: 'ID' },

  { field: 'ename', headerName: 'Employeename', width: 300 },

  { field: 'key', headerName: 'key', width: 600 }

]



const DataGrids = () => {



  const [tableData, setTableData] = useState([])



  useEffect(() => {

    axios.get("http://192.168.3.113:8080/QuestyTasks/queryOptFull.jsp")

      .then(e => setTableData(e.data))

  }, [])



  console.log(tableData)



  return (

    <div style={{ height: 400, width: '60%' }}>

      <DataGrid

        rows={tableData}

        columns={columns}

        pageSize={6}      

      />

    </div>

  )

}



export default DataGrids