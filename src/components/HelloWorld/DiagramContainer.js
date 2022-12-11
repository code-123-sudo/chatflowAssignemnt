import React from "react";
import { Rnd } from "react-rnd";
import { ReactFlowProvider } from "react-flow-renderer";
import Diagram from "./Diagram";

const DiagramContainer = () => {
  const { innerWidth, innerHeight } = window;
  const [diagramWidth, setDiagramWidth] = React.useState(300);
  const [diagramHeight, setDiagramHeight] = React.useState(200);

  return (
    <Rnd
      className="diagram-container"
      minWidth={300}
      minHeight={200}
      maxWidth={innerWidth}
      maxHeight={innerHeight}
      default={{ x: 50, y: 50, width: 300, height: 200 }}
      disableDragging={true}
      onResizeStop={(e, direction, ref, delta, position) => {
        setDiagramWidth(ref.style.width);
        setDiagramHeight(ref.style.height);
      }}
    >
      <ReactFlowProvider>
        <Diagram width={diagramWidth} height={diagramHeight}></Diagram>
      </ReactFlowProvider>
    </Rnd>
  );
};

export default DiagramContainer;
