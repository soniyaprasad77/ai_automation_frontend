import { NodeBase } from "./nodeBase";

export const FileDownloaderNode = (props) => {
  return (
    <NodeBase
      {...props}
      label="File Downloader"
      fields={[
        {
          name: "url",
          label: "File URL",
          value: props.data?.url || "",
          onChange: (e) => {
            const { name, value } = e.target;
            props.setData({ ...props.data, [name]: value });
          },
        },
      ]}
      inputs={[]}
      outputs={[{ id: "fileContent" }]}
    />
  );
};
