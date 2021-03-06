import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar, { NavItem } from './index';
import Button from '../Button';

import { withInfo } from '@storybook/addon-info';

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div style={{ height: 1500 }}>
      <style>
        {`
          body{ margin: 0px; }
          .my-custm-className{ background: green;}
          .my-custm-className__left{ background: gold;}
          .my-custm-className__right { background: pink;}
        `}
      </style>
      {story()}
    </div>
  ))
  .add(
    'items',
    withInfo('items')(() => (
      <Navbar>
        <NavItem>
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
          <li>
            <Button onClick={action('clicked')}>Hello Button</Button>
          </li>
        </NavItem>
      </Navbar>
    )),
  )
  .add(
    'fixed',
    withInfo('fixed')(() => (
      <Navbar fixed>
        <NavItem>
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
        </NavItem>
        <NavItem right>
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
          <li>
            <Button onClick={action('clicked')}>Hello Button</Button>
          </li>
        </NavItem>
      </Navbar>
    )),
  )
  .add(
    'left only',
    withInfo('left only')(() => (
      <Navbar fixed>
        <NavItem>
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
        </NavItem>
      </Navbar>
    )),
  )
  .add(
    'right only',
    withInfo('right only')(() => (
      <Navbar fixed>
        <NavItem right>
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
          <li>
            <Button onClick={action('clicked')}>Hello Button</Button>
          </li>
        </NavItem>
      </Navbar>
    )),
  )

  .add(
    'With custom classNames',
    withInfo('With custom classNames')(() => (
      <Navbar fixed className="my-custm-className">
        <NavItem className="my-custm-className__left">
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
        </NavItem>
        <NavItem className="my-custm-className__right" right>
          <li>Something</li>
          <li>
            <a tabIndex="-1">link</a>
          </li>
          <li>
            <Button onClick={action('clicked')}>Hello Button</Button>
          </li>
        </NavItem>
      </Navbar>
    )),
  );
