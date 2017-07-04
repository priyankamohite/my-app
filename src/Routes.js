import test from './test.js';

export default (
    <Route component={Application} path='/'>
      <Route component={test} path='/test' />
    </Route>
);
