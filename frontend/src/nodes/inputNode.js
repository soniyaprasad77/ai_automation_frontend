import { NodeBase } from "./nodeBase";
export const InputNode = (props) => {
  return (
    <NodeBase
      {...props}
      label="Input"
      fields={[
        {
          name: "inputName",
          label: "Name",
          defaultValue: props.id.replace("customInput-", "input_"),
          component: (
            <input
              type="text"
              defaultValue={props.id.replace("customOutput-", "output_")}
              style={{
                width: "100%",
                padding: "5px",
                boxSizing: "border-box",
                marginTop: "5px",
                border: "1px solid #4F46E5",
              }}
            />
          ),
        },
        {
          name: "inputType",
          label: "Type",
          type: "select",
          component: (
            <select
              style={{
                width: "100%",
                padding: "5px",
                boxSizing: "border-box",
                marginTop: "5px",
                border: "1px solid #4F46E5",
              }}
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          ),
        },
      ]}
      outputs={[{ id: "value" }]}
    />
  );
};
