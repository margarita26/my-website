import React, { createContext } from 'react';
import { Post } from '../constants';

const BASE_URL = 'http://localhost:8080';

const AUTH = '/auth';
const SIGNUP = '/signup';
const SIGNIN = '/signin';
const GET_CURRENT_USER = '/me';

const BLOG = '/blog';
const CREATE_POST = '/create?';
const TITLE_FOR_NEW_POST = 'title=';
const TEXT_FOR_NEW_POST = 'text=';
const GET_POST = '/postId=';
const UPDATE_POST = '/update?postId=';
const DELETE_POST = '/delete?postId=';

const header = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export type ApiContextProps = {
  getPosts: () => Promise<Post[]>;
};

export const ApiContext = createContext<ApiContextProps>({
  getPosts: async () => (null as unknown) as Post[],
});

export const ApiProvider: React.FC = ({ children }) => {
  const getPosts = async () => {
    const response = await fetch(BASE_URL + BLOG, {
      method: 'GET',
      headers: header,
    });
    if (response.ok) {
      return await response.json();;
    }
    return null;
  };

  return (
    <ApiContext.Provider
      value={{
        getPosts,
      }}>
      {children}
    </ApiContext.Provider>
  );
};
