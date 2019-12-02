import React, { useContext, useState } from 'react';
import GlobalContext from 'global.context';
import TextInputStyle from './TextInput.style';

export default function Chatting() {
  const { io, room } = useContext(GlobalContext);
  const [inputValue, setValue] = useState('');

  function inputChangeHandler(e) {
    setValue(e.target.value);
  }

  async function pressKeyHandler(e) {
    const { roomType, roomId } = room;
    const socketId = io.socket.id;

    if (e.key === 'Enter') {
      await io.sendMessage({ socketId, roomType, roomId, inputValue });
      setValue('');
    }
  }

  return (
    <TextInputStyle
      value={inputValue}
      onChange={inputChangeHandler}
      onKeyPress={pressKeyHandler}
    />
  );
}
