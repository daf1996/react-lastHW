import React from 'react'
import { Redirect } from 'react-router'
import {  CounterPage, FetchPage } from './components'
import fakeAuth from './Auth'

const routes = [
  {
    'path':'/',
    'component': CounterPage,
    'exact': true
  },
  {
    'path': '/Counter',
    'component': CounterPage
  },
  {
    'path': '/Fetch',
    'component': FetchPage
  }
];

export default routes;
