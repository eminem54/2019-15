import React, { useEffect, useContext, useState } from 'react';
import GlobalContext from 'global.context';
import SecretGameContext from 'pages/SecretGame/SecretGame.context';
import GamePlay from 'components/GamePlay/GamePlay';
import GamePlayContext from 'components/GamePlay/GamePlay.context';
import {
  connectGameSocket,
  requestMakeSecretRoom,
  initStartSecretGameHandler,
} from 'logics/socketLogic';

import GamePreparation from 'pages/SecretGame/GamePreparation';
import Room from 'logics/room/index';

const roomType = '비밀방';

const SecretGame = () => {
  const { gameSocket, user, setRoom } = useContext(GlobalContext);
  const { setUserList, setPainter } = useContext(GamePlayContext);
  const [isGamePlaying, setIsGamePlaying] = useState(false);

  useEffect(() => {
    async function init() {
      const { nickname } = user;
      const roomId = window.location.href.split('secret:')[1];
      setUserList([]);
      connectGameSocket(gameSocket);
      requestMakeSecretRoom(gameSocket, { nickname, roomId });
      initStartSecretGameHandler(gameSocket, { setPainter, setIsGamePlaying });
      setRoom(new Room(roomId, roomType));
    }
    init();
  }, [gameSocket, setPainter, setRoom, setUserList, user]);

  if (isGamePlaying) {
    return <GamePlay />;
  }

  return (
    <SecretGameContext.Provider value={{ setIsGamePlaying }}>
      <GamePreparation />
    </SecretGameContext.Provider>
  );
};

export default SecretGame;
