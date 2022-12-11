import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

export function present<T>(content: (close: (result: T) => void) => React.ReactNode) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  return new Promise<T>((resolve) => {
    const close = (result: T) => {
      unmountComponentAtNode(root);
      resolve(result);
    };
    render(<>{content(close)}</>, root);
  });
}

export function confirm(msg: string): Promise<boolean> {
  return present<boolean>((close) => (
    <Dialog open={true} onClose={() => close(false)}>
      <DialogTitle>Confirm</DialogTitle>
      <DialogContent>
        <DialogContentText>{msg}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close(false)} variant="contained" color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={() => close(true)} variant="outlined" color="secondary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  ));
}
