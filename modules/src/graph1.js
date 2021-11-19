/** @jsx jsx */
import { useRecoilState } from "recoil";
import { useTheme, jsx } from '@emotion/react';
import { PieChart } from "react-minimal-pie-chart";

const Graph1 = ({ state }) => {
  
  const [graph, setGraph] = useRecoilState(state);
  const theme = useTheme();

  return (
    <div
      css={{
        padding: 10,
        border: `5px solid ${theme.colors.primary}`,
        background: "#eee",
        fontSize: "x-large",
      }}
    >
      <button
        onClick={() => setGraph(graph.map(item => item * 2))}
        style={{ fontSize: "x-large" }}
      >
        Hi I'm the remote federated Child!
      </button>
      <div>Data: {JSON.stringify(graph)}</div>
      <PieChart
        data={[
          { title: "One", value: graph[0], color: "#E38627" },
          { title: "Two", value: graph[1], color: "#C13C37" },
          { title: "Three", value: graph[2], color: "#6A2135" },
        ]}
        radius={PieChart.defaultProps.radius - 3}
        lineWidth={20}
        animate={true}
      />
    </div>
  );
};

export default Graph1;