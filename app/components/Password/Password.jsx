'use client'

import React, { useState } from 'react'

function Password() {

  const [password, setPassword] = useState("");
  const [passwordValidity, setPasswordValidity] = useState(false);

  function storePassword (event) {
    let passwordValue = event.target.value;

    setPassword(passwordValue);
  }

  function isPasswordValid () {
    if (password.length >= 12) {
      setPasswordValidity(true);
    } else {
      setPasswordValidity(false);
    }
  }

  return (
    <div>
        <label htmlFor="password" class="block text-sm/6 font-semibold text-gray-900">Password</label>
        <div class="mt-2.5">
          <input onChange={(e) => storePassword(e)} id="password" type="text" name="password" placeholder="password" autocomplete="password" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        </div>
      </div>
  )
}

export default Password