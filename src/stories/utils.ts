import { action as getStoryAction } from '@storybook/addon-actions';
import { Action } from '../typings/redux-custom';
import { ActionCreator } from 'react-redux';

export function reduxAction<T extends string>(type: T): ActionCreator<Action<T>> {
  return () => {
    getStoryAction(type)();
    return {type};
  };
}