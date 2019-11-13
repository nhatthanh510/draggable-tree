import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import TreeWrapper from './components/TreeWrapper';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <TreeWrapper />
      </DndProvider>
    </Provider>
  );
}

export default App;
