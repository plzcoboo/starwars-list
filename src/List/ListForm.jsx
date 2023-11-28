import React, { useState } from 'react';
import './scss/ListForm.scss'

const ListForm = ({Moive,onChangeInput,onSubmit,isEdit,changeSelet}) => {
    const {date,genre,actor,title} = Moive

    return (
        <div className='List'>
             <select name="" id="" onChange={changeSelet}>
                <option value="genre">장르</option>
                <option value="title">제목</option>
                <option value="actor">주인공</option>
                <option value="date">개봉일</option>
            </select>
            <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="">장르</label>
                <input type="text" onChange={onChangeInput} name='genre' value={genre}/>
            </p>
            <p>
                <label htmlFor="">제목</label>
                <input type="text" onChange={onChangeInput} name='title' value={title}/>
            </p>
            <p>
                <label htmlFor="">주인공</label>
                <input type="text" onChange={onChangeInput} name='actor' value={actor}/>
            </p>
            <p>
                <label htmlFor="">개봉일</label>
                <input type="text" onChange={onChangeInput} name='date' value={date}/>
            </p>
            <p>
                <button type='submit'>{isEdit ? '수정' : '등록'}</button>
            </p>
            </form>
        </div>
    );
};

export default ListForm;