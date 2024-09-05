import { NodeBase } from "./nodeBase";

export const OutputNode = (props) => {
  return (
    <NodeBase
      {...props}
      label="Output"
      fields={[
        {
          name: "outputName",
          label: "Name",
          defaultValue: props.id.replace("customOutput-", "output_"),
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
              onFocus={(e) => e.target.style.color = '#4F46E5'}
              onBlur={(e) => e.target.style.color = '#4F46E5'}
              onChange={(e) => e.target.style.color = '#4F46E5'}
            />
          ),
        },
        {
          name: "outputType",
          label: "Type",
          component: (
            <select
              defaultValue="Text"
              style={{
                width: "100%",
                padding: "5px",
                boxSizing: "border-box",
                marginTop: "5px",
                border: "1px solid #4F46E5",
              }}
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          ),
        },
      ]}
      inputs={[{ id: "value" }]}
    />
  );
};
