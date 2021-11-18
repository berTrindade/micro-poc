import './App.css';
import { RecoilRoot, atom, useRecoilState } from "recoil";
import { ThemeProvider } from '@emotion/react';
import DynamicRemoteContainer from './utils/hooks/DynamicRemoteContainer';

const theme = {
  colors: {
    primary: "green",
  },
};

const DashboardWidget = ({ name, ...props }) => (
  <DynamicRemoteContainer 
    url={`http://localhost:3001/${name}/remoteEntry.js`}
    module={name}
    scope={name}
    {...props}
  />
);

const graphState = atom({
  key: "graphState",
  default: [5, 2, 30],
});

function Dashboard() {
  const [graph, ] = useRecoilState(graphState);

  return (
    <div style={{
      padding: 10,
    }}>
      <div style={{ fontSize: "xx-large" }}>
        Hi I'm the non-federated Container! | Data: {JSON.stringify(graph)}
      </div>
      <DashboardWidget 
        name="graph1" 
        state={graphState} 
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
