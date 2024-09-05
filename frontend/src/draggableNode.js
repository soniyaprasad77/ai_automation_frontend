// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        //backgroundColor: "#1C2536",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid #4F46E5",
        color: "#4F46E5",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      draggable
    >
      <span style={{ marginLeft: "12px", marginRight: "12px" }}>{label}</span>
    </div>
  );
};
