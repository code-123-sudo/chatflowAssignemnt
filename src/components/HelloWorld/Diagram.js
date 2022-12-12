import React from "react";
import ReactFlow, {
  Controls,
  Background
} from "react-flow-renderer";
import defaultElements from "./elements";
// useZoompanhelper removed , was not able to fix error in import 
const Diagram = ({ width, height }) => {
  //const { fitView } = useZoomPanHelper();

  const [elements, setElements] = React.useState(defaultElements);

  React.useEffect(() => {
 //   fitView();
  }, [width, height]);

  return (
    <div style={{ height, width }}>
      <ReactFlow
        elements={elements}
        elementsSelectable={false}
        nodesConnectable={false}
        nodesDraggable={false}
        panOnScroll={false}
        paneMoveable={false}
      >
        <Background variant="dots" gap={16} size={1} color="#dddddd" />
        <Controls className="react-flow_controls" showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
