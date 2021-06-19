import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

const MessageField = ({ inputEl, name, setText, text }) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
        <TextField 
        autoFocus
        fullWidth={true}
        inputRef={inputEl}
        onChange={(e) => {
            setText(e.target.value);
        }}
        onKeyDown={(e) => { //余計なリクエストが飛ばないようにする
            if (isComposed) return;

            const text = e.target.value;
            if (text === '') return;

            if (e.key === 'Enter') {
                pushMessage({ name, text });
                setText('');
                e.preventDefault();
            }
        }}
        onCompositionStart={() => setIsComposed(true)} //編集中か判定
        onCompositionEnd={() => setIsComposed(false)}
        value={text}
        />
    );
};

export default MessageField;