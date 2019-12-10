import React from 'react';
import Button from './Button';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info'

export default { title: 'Button', decorators: [withKnobs, withInfo] };

export const withText = () => <Button disabled={boolean("Disabled", false)} onClick={action('clicked')}>Hello Button 2</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);