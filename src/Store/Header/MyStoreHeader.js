import React, {useState} from 'react';
import '../../App.css'
import {useSelector} from "react-redux";


export default function MyStoreHeader() {
    const [state,setState] = useState(false);
    const [carts,setCart] = useState(false);

    const chose = useSelector(({chose})=>[...chose])
    const cart= useSelector(({cart})=>[...cart])
    return (
            <div>
                <div className={'Header'}>
                  <div className={'Logo-wrap'}>
                      <div className={'Logo'}>
                          <span>YourClothes</span>
                      </div>
                  </div>
                  <div className={'Trash-wrap'}>
                     <div className={'Trash'}>
                         <img src={'https://icons8.com/iconizer/files/Metal/orig/heart.png'} alt={'favorite'} onClick={()=>setState(!state)}/>
                         <img src={'https://icons8.com/iconizer/files/Flat_for_Linux/thumb/128/24-Empty%20Trash.png'} alt={'trash'} onClick={()=>setCart(!carts)}/>
                     </div>
                  </div>
                </div>
                <div className={`${state}-Menu`}>
                    <div className={'Menu-inside-wrap'}>
                        <div className={'Menu-Id'}>Count-{chose.length}</div>
                         {
                             chose.map(value=><div className={'Menu-Id'} key={value.id}>ID:{value.id}</div>)
                         }
                    </div>
                </div>
                <div className={`${carts}-Menu`}>
                    <div className={'Menu-inside-wrap'}>
                        <div className={'Menu-Id'}>Count-{cart.length}</div>
                        {
                            cart.map(value=><div className={'Menu-Id'} key={value.id}>ID:{value.id}</div>)
                        }
                    </div>
                </div>

            </div>
        );
}
