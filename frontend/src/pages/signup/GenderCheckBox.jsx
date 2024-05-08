import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex mt-2'>
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-black font-extrabold'>Male</span>
                <input type="checkbox" className='checkbox checkbox-accent' />
            </label>
        </div>

        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-black font-extrabold'>Female</span>
                <input type="checkbox" className='checkbox checkbox-accent' />
            </label>
        </div>

        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-black font-extrabold'>Others</span>
                <input type="checkbox" className='checkbox checkbox-accent' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox