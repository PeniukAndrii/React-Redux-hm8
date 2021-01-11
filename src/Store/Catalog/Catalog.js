import React from 'react';
import '../../App.css'
import {useDispatch} from "react-redux";


export default function Catalog({value}){

    const dispatch = useDispatch()

     return (
         <div className={'Catalog-Wrap'}>
            <div className={'Product-image-wrap'}>
                <img src={`${value.image}`} alt="someProduct" className={'Product-image'}/>
            </div>
             <div className={'Catalog-Text'}>
                 {value.title}
             </div>
             <div className={'Like-Add'}>
                 <div className={'Like'} onClick={()=>dispatch({type:'ITEM_ADD',payload:value})}>
                     <img src={'https://icons8.com/iconizer/files/Retina_Display_Icons/orig/favorites_add.png'} alt={'like'}/>
                 </div>
                 <div className={'Like'} onClick={()=>dispatch({type:'ITEM_CART_ADD',payload:value})}>
                     <img src={'https://icons8.com/iconizer/files/Bimbilini/orig/shopping_cart_add.png'} alt={'like'}/>
                 </div>
             </div>
         </div>
     );
}
