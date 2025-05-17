import React from 'react'
import Input from '../input'
import Button from '../button'

const NewPassword = () => {
  return (
    <div className="h-[50%] w-[85%]  flex flex-col justify-center items-center gap-4 mt-5 mb-12">
        <Input text="Enter your New Password"/>
        <Input text="Confirm your New Password"/>
        <Button text="Reset Password" />
    </div>
  )
}

export default NewPassword