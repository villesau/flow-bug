// @flow
import * as redux from 'redux'; // redux not found?
import test from '../js/test2';

test(123); // should error since the fn does not take arguments

redux.createStore();