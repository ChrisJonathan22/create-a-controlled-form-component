import React from 'react';
import Username from '../Username/Username';
import Password from '../Password/Password';
import SubmitButton from '../Submitbutton/SubmitButton';

function Form() {
  return (
    <>
        <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Username />
            <Password />
            <SubmitButton />
            </div>
        </form>
    </>
  )
}

export default Form