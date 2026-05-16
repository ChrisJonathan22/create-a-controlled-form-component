'use client'
import React, { useState } from 'react';

function Username() {

  const [username, setUsername] = useState("");
  const [usernameValidity, setUsernameValidity] = useState(false);

  function saveUsername (event) {
    let usernameValue = event.target.value;
    
    setUsername(usernameValue);
  }
  
  function validateUsername () {
    if (username.length >= 3) {
      setUsernameValidity(true);
    } else {
      setUsernameValidity(false);
    }
  }

  return (
    <div>
        <label for="user-name" class="block text-sm/6 font-semibold text-gray-900">User name</label>
        <div class="mt-2.5">
          <input onChange={(e) => storeUsername(e)} id="user-name" type="text" name="user-name" placeholder="user name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        </div>
      </div>
  )
}

export default Username