import {
  withReducer,
  withHandlers,
  compose,
  withProps,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import counterReducer from '../../modules/app/reducer';
import { Button } from '../Button/Button';
import { Counter } from './Counter';
import { INCREMENT, DECREMENT } from '../../modules/app/types';


const incBtn = onPress =>
  withProps({ context: '+', onPress })(Button);

const decBtn = onPress =>
  withProps({ context: '-', onPress })(Button);

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

const enhanceCounter = compose(
  connect(mapStateToProps),
  withReducer('counter', 'dispatch', counterReducer, 0),
  withHandlers({
    increment: props => () => props.dispatch({ type: INCREMENT }),
    decrement: props => () => props.dispatch({ type: DECREMENT }),
  }),
  
  withPropsOnChange(['IncrementButton', 'DecrementButton'], ownerProps => ({
    IncrementButton: incBtn(ownerProps.increment),
    DecrementButton: decBtn(ownerProps.decrement),
  })),
);

export default enhanceCounter(Counter);
