import React, { useState } from "react";
import { useStore } from "./store";
import { Modal } from "./Modal"; // Ensure Modal component is correctly imported

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = async () => {
    const pipeline = {
      nodes: nodes.map((node) => ({ id: node.id })),
      edges: edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    try {
      const response = await fetch("http://localhost:8080/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipeline),
      });

      if (response.ok) {
        const data = await response.json();
        setModalData(data);
        setModalOpen(true);
      } else {
        setModalData({ error: "Failed to parse pipeline." });
        setModalOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalData({
        error: "An error occurred while submitting the pipeline.",
      });
      setModalOpen(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4F46E5",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          opacity: nodes.length === 0 ? 0.5 : 1, // Add opacity to indicate the button is disabled
        }}
        disabled={nodes.length === 0}
      >
        Submit
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Pipeline Results"
      >
        {modalData && modalData.error ? (
          <p>{modalData.error}</p>
        ) : (
          <div>
            <p>
              <strong>Number of Nodes:</strong> {modalData?.num_nodes}
            </p>
            <p>
              <strong>Number of Edges:</strong> {modalData?.num_edges}
            </p>
            <p>
              <strong>Is DAG:</strong> {modalData?.is_dag ? "Yes" : "No"}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};
