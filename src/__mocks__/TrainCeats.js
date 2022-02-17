import React, { useEffect, useState } from 'react';
import Card from 'src/components/Card';


export const TrainCeats = () => {

    return (
        <div>
            
             <div className='gap-24 flex bg-blue-100 min-h-screen items-center justify-center align-items: center'>
                <div className=' m-16 grid grid-cols-2 gap-24 align-items: center'>
                    <div className='mr-8 grid grid-cols-2 gap-16 '>
                        <div className='bg-white p-8 rounded-lg bg-red-500'>1</div>
                        <div className='bg-white p-8 rounded-lg'>2</div>
                        <div className='bg-white p-8 rounded-lg'>3</div>
                        <div className='bg-white p-8 rounded-lg'>4</div>
                        <div className='bg-white p-8 rounded-lg bg-yellow-500'>5</div>
                        <div className='bg-white p-8 rounded-lg'>6</div>
                        <div className='bg-white p-8 rounded-lg'>7</div>
                        <div className='bg-white p-8 rounded-lg'>8</div>
                        <div className='bg-white p-8 rounded-lg'>9</div>
                        <div className='bg-white p-8 rounded-lg bg-red-500'>10</div>
                        <div className='bg-white p-8 rounded-lg'>11</div>
                        <div className='bg-white p-8 rounded-lg'>12</div>
                    </div>
                    
                    <div className='ml-8 grid grid-cols-2 gap-16'>
                        <div className='bg-white p-8 rounded-lg'>13</div>
                        <div className='bg-white p-8 rounded-lg'>14</div>
                        <div className='bg-white p-8 rounded-lg'>15</div>
                        <div className='bg-white p-8 rounded-lg'>16</div>
                        <div className='bg-white p-8 rounded-lg'>17</div>
                        <div className='bg-white p-8 rounded-lg bg-red-500'>18</div>
                        <div className='bg-white p-8 rounded-lg'>19</div>
                        <div className='bg-white p-8 rounded-lg'>20</div>
                        <div className='bg-white p-8 rounded-lg'>21</div>
                        <div className='bg-white p-8 rounded-lg'>22</div>
                        <div className='bg-white p-8 rounded-lg'>23</div>
                        <div className='bg-white p-8 rounded-lg'>24</div>
                    </div>  
                </div>
                
                <div className='w-full grid  gap-8'>
                    <div ><Card title="TEMPERATURE" balance={409.0790} icon={0} /></div> 
                    <div><Card title="HUMIDITY" balance={300.0790} icon={1} /></div>
                    <div><Card title="PASSENGER FLOW" balance={100.0790} icon={2} /></div>
                    <div><Card title="test" balance={0} icon={3} /></div>
                </div>
                
                
            </div>
        </div> 
    )
}
