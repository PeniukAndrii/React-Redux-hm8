import React from 'react';
import '../../App.css'

export default function MyStoreHeader() {
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
                         <img src={'https://icons8.com/iconizer/files/Metal/orig/heart.png'} alt={'favorite'}/>
                         <img src={'https://icons8.com/iconizer/files/Flat_for_Linux/thumb/128/24-Empty%20Trash.png'} alt={'trash'}/>
                     </div>
                  </div>

                </div>

            </div>
        );
}
