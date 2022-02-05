import React, { useState, useEffect }  from 'react';
import Login from './Login';
import {SEA } from 'gun/sea';

import ChatMessage from './ChatMessage';
import { username, user } from './user';
import debounce from 'lodash.debounce';
import GUN from 'gun';


export function Chat() {

    const db = GUN();

    const [newMessage, setnewMessage] = useState("");

    let messages = [];

    useEffect(() => {
        db.get('chat')
        .map()
        .once(async (data, id) => {
            if (data) {
                const key = "mugiwara"

                let message = {
                    who: await db.user(data).get('alias'),
                    what: (await SEA.decrypt(data.what, key)) + '',
                    when: GUN.state.is(data, 'what'),
                };
                if (message.what) {
                    messages = [...messages.slice(-100), message].sort((a, b) => a.when - b.when);
                  }
            }

            
        })
    }, []);

    async function sendMessage() {
        const secret = await SEA.encrypt(newMessage, '#mugiwara');
        const message = user.get('all').set({ what: secret });
        const index = new Date().toISOString();
        db.get('chat').get(index).put(message);
        newMessage = '';
      }
    //   if (username) {
    //     username 
    //   } else {
    //     loginButton = <Login />;
    //   }

        return (
            <div>
    <form onSubmit={sendMessage}>
      <input type="text" placeholder="Type a message..." value={newMessage} maxlength="100" />

      <button type="submit" disabled={!setnewMessage}>💥</button>
    </form>

    <main>
      <Login />
    </main>
            </div>
        );
    
}

export default Chat;