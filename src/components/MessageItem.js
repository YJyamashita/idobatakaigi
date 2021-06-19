import React, { useEffect, useRef } from 'react';
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    makeStyles,
} from '@material-ui/core';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
    inline: {
      display: 'inline',
    },
}));

const MessageItem = ({isLastItem, name, text}) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    useEffect(() => {
        if (isLastItem) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isLastItem]);

    return (
        <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
          }
        />
      </ListItem>
    );
};

export default MessageItem;