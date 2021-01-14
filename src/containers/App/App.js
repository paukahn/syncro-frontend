import React from 'react';
import { SidebarLeft } from '../SidebarLeft/SidebarLeft';
import { ContentRight } from '../ContentRight/ContentRight';
// TODO: Внести сюда json для сайдбара чтобs менять их через dispatch из правой панели

const App = () => (
  <>
    <SidebarLeft />
    <ContentRight />
  </>
);

export default App;
