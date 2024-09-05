import { NodeBase } from './nodeBase';

export const DataAggregatorNode = (props) => {
    return (
        <NodeBase
            {...props}
            label="Data Aggregator"
            fields={[
                { 
                    name: 'aggregationMethod', 
                    label: 'Aggregation Method', 
                    type: 'select',
                    options: [
                        { value: 'concat', label: 'Concatenate' },
                        { value: 'merge', label: 'Merge' }
                    ],
                    onChange: (e) => {
                        const { name, value } = e.target;
                        props.setData({ ...props.data, [name]: value });
                    }
                }
            ]}
            inputs={[
                { id: 'input1' },
                { id: 'input2' }
            ]}
            outputs={[
                { id: 'aggregatedOutput' }
            ]}
        />
    );
};
