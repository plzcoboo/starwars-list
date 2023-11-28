import React from 'react';
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencil } from "react-icons/hi2";





const TableItem = ({item,onEdit,onDel}) => {
   const {actor,date,title,genre,id} = item
    return (
        <tr>
                <td>{genre}</td>
                <td>{title}</td>
                <td>{actor}</td>
                <td>{date}</td>
                <td>
                    <button onClick={()=>onEdit(id)}><HiOutlinePencil /></button>
                    <button onClick={()=>onDel(id)}><CiTrash /></button>
                </td>
        </tr>
    );
};

export default TableItem;