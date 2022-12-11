import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface Props {
  children: React.ReactNode;
}

@observer
export class Info extends React.Component<Props> {
  @observable
  anchor?: HTMLElement;

  render() {
    return (
      <>
        <IconButton onClick={(event) => (this.anchor = event.currentTarget)}>
          <InfoIcon />
        </IconButton>
        <Popover
          open={!!this.anchor}
          anchorEl={this.anchor}
          onClose={() => (this.anchor = undefined)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ padding: 16 }}>{this.props.children}</div>
        </Popover>
      </>
    );
  }
}
