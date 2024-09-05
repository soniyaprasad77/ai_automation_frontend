
import { useState, useEffect, useRef } from "react";
import { NodeBase } from "./nodeBase";

export const TextNode = (props) => {
  const initialSize = { width: 200, height: 80 };
  const [currText, setCurrText] = useState(props.data?.text || "{{input}}");
  const [size, setSize] = useState(initialSize);
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const debounceTimeoutRef = useRef(null);

  const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\}\}/g;

  useEffect(() => {
    const handleResize = () => {
      if (currText.trim() === "") {
        // Reset to initial size when the textarea is empty
        setSize(initialSize);
      } else {
        // Dynamically adjust node size based on the length of the text
        const padding = 20; // Padding to ensure there's space around the text
        const maxLineLength = Math.max(
          ...currText.split("\n").map((line) => line.length)
        );

        const newWidth = Math.max(200, maxLineLength * 8 + padding);

        // Use the textarea's scrollHeight to determine the required height
        const newHeight = textareaRef.current
          ? textareaRef.current.scrollHeight + padding
          : 80;

        setSize({ width: newWidth, height: newHeight });
      }

      // Extract variables from text and set them as handles
      const matches = [...currText.matchAll(variableRegex)].map(
        (match) => match[1]
      );
      setVariables(matches);
    };

    clearTimeout(debounceTimeoutRef.current);
    debounceTimeoutRef.current = setTimeout(handleResize, 100);

    // Cleanup on unmount
    return () => clearTimeout(debounceTimeoutRef.current);
  }, [currText]);

  return (
    <NodeBase
      id={props.id}
      label='Text'
      fields={[
        {
          name: "text",
          label: "Text",
          component: (
            <textarea
              ref={textareaRef}
              style={{
                width: "100%",
                height: `${size.height - 20}px`,
                resize: "none",
                border: "1px solid #4F46E5",
                boxSizing: "border-box",
              }}
              maxLength={250}
              value={currText}
              onChange={(e) => setCurrText(e.target.value)}
            />
          ),
        },
      ]}
      inputs={variables.map((variable) => ({ id: variable }))}
      outputs={[{ id: "output" }]}
      style={{
        width: size.width,
        height: size.height + 50,
        maxWidth: 350,
        maxHeight: "100%",
      }}
    />
  );
};
