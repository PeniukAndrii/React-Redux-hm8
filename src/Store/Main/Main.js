import React from 'react';
import '../../App.css'
import Catalog from "../Catalog/Catalog";
import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

export default function Main(){

    const dispatch = useDispatch()
    const item= useSelector(({item})=>[...item])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`).then(value => value.json().then(value=>dispatch({type:'SET_ITEM',payload:[...value]})))
    },[])



     return (
         <div className={'Main-Wrap'}>
             {
                 item.map(value=> value.id<=10 ? <Catalog value={value} key={value.id}/> : null)
             }
         </div>
        );
}
