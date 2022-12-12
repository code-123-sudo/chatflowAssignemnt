import React from "react";
import { Rnd } from "react-rnd";
import { ReactFlowProvider } from "react-flow-renderer";
import Diagram from "./Diagram";

const DiagramContainer = () => {
  const { innerWidth, innerHeight } = window;
  const [diagramWidth, setDiagramWidth] = React.useState(600);
  const [diagramHeight, setDiagramHeight] = React.useState(600);

  return (
    <Rnd
      className="diagram-container"
      minWidth={600}
      minHeight=600}
      maxWidth={innerWidth}
      maxHeight={innerHeight}
      default={{ x: 50, y: 50, width: 600, height: 600 }}
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
