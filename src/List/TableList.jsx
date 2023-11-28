import React from 'react';
import TableItem from './TableItem';
import './scss/TableList.scss'

const TableList = ({data,onEdit,onDel}) => {
    return (
      <div className='table-box'>
        <table className='table'>
      <colgroup>
        <col width='100px'/>
        <col width='100px'/>
        <col width='100px'/>
        <col width='100px'/>
        <col width='100px'/>
        </colgroup>
        <thead>
            <tr>
                <th>장르</th>
                <th>제목</th>
                <th>주인공</th>
                <th>개봉일</th>
                <th>관리</th>
            </tr>
        </thead>
        <tbody>
   
      {data.map( item =><TableItem key={item.id} item={item} onEdit={onEdit} onDel={onDel}/>)}
        </tbody>
    </table>
      </div>
    );
};

export default TableList;