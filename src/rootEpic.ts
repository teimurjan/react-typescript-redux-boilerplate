import { combineEpics } from 'redux-observable';
import loginEpics from './ui/Login/epics';

export default combineEpics(
  ...loginEpics
);
