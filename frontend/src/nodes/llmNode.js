import { NodeBase } from "./nodeBase";

export const LLMNode = (props) => {
  return (
    <NodeBase
      {...props}
      label="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
    />
  );
};
