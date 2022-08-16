import store from './app/store.js';
import { cakeActions } from './features/cake/cakeSlice.js';
import { icecreamActions } from './features/icecream/icecreamSlice.js';
import { fetchUsers } from './features/user/userSlice.js';

console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3));

store.dispatch(fetchUsers());

unsubscribe();
