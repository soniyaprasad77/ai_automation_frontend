
import { Handle, Position } from "reactflow";

export const NodeBase = ({
  id,
  label,
  inputs = [],
  outputs = [],
  fields = [],
  style,
}) => {
  return (
    <div
      style={{
        ...style,
        border: "1px solid #4F46E5",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
        <span>{label}</span>
      </div>
      <div>
        {fields.map((field) => (
          <>
            <label
              key={field.name}
              style={{ display: "block", marginBottom: "10px" }}
            >
              {field.label}:
            </label>
            {field.component ? (
              field.component
            ) : (
              <input
                type={field.type || "text"}
                value={field.value}
                onChange={field.onChange}
                style={{
                  width: "100%",
                  padding: "5px",
                  boxSizing: "border-box",
                  marginTop: "5px",
                  border: "1px solid #4F46E5",
                }}
              />
            )}
          </>
        ))}
      </div>
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type='target'
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(index + 1) * (100 / (inputs.length + 1))}%` }}
        />
      ))}
      {outputs.map((output) => (
        <Handle
          key={output.id}
          type='source'
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: "50%" }}
        />
      ))}
    </div>
  );
};
