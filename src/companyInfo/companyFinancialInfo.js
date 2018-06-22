import React from 'react'
import { connect } from 'react-redux'
import ReactTable from "react-table"
import "react-table/react-table.css"

const transformData = (data) => {
  const returnData = data[0] ? Object.keys(data[0])
  .slice(1)
  .map(key => ({
    key: key.replace(/([A-Z]+)/g, ' $1'),
    [data[0].reportDate]: data[0][key],
    [data[1].reportDate]: data[1][key],
    [data[2].reportDate]: data[2][key],
    [data[3].reportDate]: data[3][key],
  })) : [];
  return returnData;
}

const CompanyFinancialInfo = ({ finances }) => (
    <ReactTable
      data={finances}
      columns={[
        {
          Header: "Property",
          columns: [
            {
              Header: "Assets",
              accessor: 'key'
            }
          ]
        },
        {
          Header: "Date",
          columns: 
          finances[0] ? Object.keys(finances[0])
          .filter(v => v !== 'key')
          .map((v) => 
            ({
              Header: v,
              accessor: v
            })) : [],
            
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
