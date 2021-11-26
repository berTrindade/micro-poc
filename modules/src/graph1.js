
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { PieChart } from "react-minimal-pie-chart";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "emotion-theming";

const Graph1 = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  
  const graph = [1, 2, 3];

  const theme = useTheme();

  return (
    <div
      css={{
        padding: 10,
        border: `20px solid ${theme.colors.danger}`,
        background: `${theme.colors.success}`,
        fontSize: "x-large",
      }}
    >
      <button
        onClick={() => dispatch({ type: 'ADD_COUNTER', payload: 1 })}
        style={{ fontSize: "x-large" }}
      >
        Hi I'm the remote federated Child!
      </button>
      <div>Data: {JSON.stringify(counter)}</div>
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