import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import { FlexRowStyle } from 'components/globalComponents/Container/Flex.style';
import GlobalContext from 'global.context';
import UserList from 'components/GamePlay/Userlist/Userlist';
import CanvasSection from 'components/GamePlay/CanvasSection/CanvasSection';
import Chatting from 'components/GamePlay/Chatting/Chatting';
import GamePlayContext from 'components/GamePlay/GamePlay.context';
import {
  initUserListMsgHandler,
  initGameStartMsgHandler,
  setEndQuestionHandler,
  closeSocket,
} from 'logics/socketLogic';

const GamePlay = () => {
  const { gameSocket, setGameSocket } = useContext(GlobalContext);

  const [userList, setUserList] = useState([]);
  const [painter, setPainter] = useState(null);

  useEffect(() => {
    const initSocket = () => {
      if (!gameSocket) return;
      initUserListMsgHandler(gameSocket, { setUserList });
      initGameStartMsgHandler(gameSocket, { setPainter });
      setEndQuestionHandler(gameSocket);
    };
    initSocket();

    return () => {
      closeSocket(gameSocket, { setGameSocket });
    };
  }, [gameSocket, setGameSocket, setPainter, setUserList]);

  if (!gameSocket || gameSocket.connected === false) {
    return <Redirect to="main" />;
  }

  return (
    <GamePlayContext.Provider
      value={{
        userList,
        setUserList,
        painter,
        setPainter,
      }}
    >
      <NavigationBar />
      <>
        <FlexRowStyle>
          <UserList />
          <CanvasSection />
          <Chatting />
        </FlexRowStyle>
      </>
    </GamePlayContext.Provider>
  );
};

export default GamePlay;
