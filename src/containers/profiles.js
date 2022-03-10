/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
          <Profiles.User>
              <Profiles.Pictures src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
          </Profiles.List>
      </Profiles>
    </>
  );
}
