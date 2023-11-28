import React, { useRef, useState } from 'react';
import './scss/List.scss'
import ListForm from './ListForm';
import TableList from './TableList';
const dataList = [
    {id:1 ,actor:'Ewan McGregor',date:'1996.06.26',title:'Star Wars: Episode I - The Phantom Menace',genre:'SF'},
    {id:2 ,actor:'Hayden Christensen',date:'2002.07.03',title:'Star Wars: Episode II - Attack of the Clones',genre:'Adventure'},
    {id:3 ,actor:'Ian McDiarmid',date:'2005.05.26',title:'Star Wars: Episode III Revenge of the Sith',genre:'Action'},
    {id:4 ,actor:'Harrison Ford',date:'1978.06.01',title:'Star Wars: Episode IV - A New Hope',genre:'Fantasy'},
]
const List = () => {
    const [data, setData] = useState(dataList)
    const [isEdit, setisEdit] = useState(false);
    const [Moive , setMovie] = useState(
        {id:0 ,actor:'',date:'',title:'',genre:''}
    )
    const no = useRef(data.length + 1)
    const {id,actor,date,title,genre} = Moive
    const changeSelet = (e) => {
        const {value} = e.target
        setData([...data].sort((a,b)=> a[value] > b[value] ? 1 : -1))
    }
    const onChangeInput = (e)=>{
        let {name ,value} = e.target
        setMovie({
            ...Moive,
            [name]:value
        })
    }
const onSubmit = (e)=>{
    e.preventDefault()
    if(isEdit){
        setData(data.map(item => item.id === Moive.id ? Moive : item))
        setisEdit(false)
        setMovie({
            id:0 ,actor:'',date:'',title:'',genre:''
        })
    }else{
        Moive.id = no.current++
        if(actor === "" || date === "" || title === "" || genre === "") return
        setData([...data,Moive])
        setMovie({
            id:0 ,actor:'',date:'',title:'',genre:''
        })
    }
}
const onEdit = (id) =>{
    setisEdit(true)
    setMovie(data.find(item => item.id === id))
    
}
const onDel = (id) => {
    setData(data.filter(item => item.id !== id))
 }

    return (
        <div className='inner'>
            <div className='sub-con'>
            <ListForm Moive={Moive} onChangeInput={onChangeInput} onSubmit={onSubmit} isEdit={isEdit} changeSelet={changeSelet}/>
            <TableList data={data} onEdit={onEdit} onDel={onDel}/>
            </div>
         
        </div>
    );
};

export default List;