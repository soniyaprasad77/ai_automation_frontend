import { NodeBase } from './nodeBase';

export const ConditionalBranchNode = (props) => {
    return (
        <NodeBase
            {...props}
            label="Conditional Branch"
            fields={[
                { 
                    name: 'condition', 
                    label: 'Condition', 
                    value: props.data?.condition || '',
                    onChange: (e) => {
                        const { name, value } = e.target;
                        props.setData({ ...props.data, [name]: value });
                    }
                }
            ]}
            inputs={[
                { id: 'input' }
            ]}
            outputs={[
                { id: 'trueBranch' },
                { id: 'falseBranch' }
            ]}
        />
    );
};
