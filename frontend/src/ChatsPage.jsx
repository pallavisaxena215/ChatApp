import React from 'react';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="3e4ea540-83cc-44b5-b759-c532475455b7"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100vh'}}
      />
    </div>
  );
};

export default ChatsPage;