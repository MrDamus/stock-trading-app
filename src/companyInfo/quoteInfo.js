import React from 'react'
import { connect } from 'react-redux'
import ReactTable from "react-table"
import "react-table/react-table.css"

const transformData = (data) => {
  const returnData = data[0] ? Object.keys(data[0]).map(key => ({
    key,
    [data[0].reportDate]: data[0][key]
  })) : [];
  return returnData;
}

const CompanyFinancialInfo = ({ finances }) => (
    <ReactTable
      data={finances}
      columns={[
        {
          Header: "",
          columns: [
            {
              Header: "Key",
              accessor: finances.key
            }
          ]
        },
        {
          Header: "Date",
          columns: finances[0] ? Object.keys(finances[0]).map((v) => 
            ({
              Header: v,
              accessor: v
            })) : []
        },
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
);

const mapStateToProps = ({ stockData }) => ({
  finances: stockData.finances ? transformData(stockData.finances) : [{}],
})
      
export default connect(mapStateToProps)(CompanyFinancialInfo);
