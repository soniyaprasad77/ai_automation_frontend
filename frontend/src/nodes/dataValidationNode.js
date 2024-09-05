import { NodeBase } from './nodeBase';

export const DataValidationNode = (props) => {
    return (
        <NodeBase
            {...props}
            label="Data Validation"
            fields={[
                { 
                    name: 'validationRule', 
                    label: 'Validation Rule', 
                    type: 'select', 
                    options: [
                        { value: 'notEmpty', label: 'Not Empty' },
                        { value: 'isEmail', label: 'Is Email' },
                        { value: 'isNumber', label: 'Is Number' }
                    ],
                    onChange: (e) => {
                        const { name, value } = e.target;
                        props.setData({ ...props.data, [name]: value });
                    }
                },
                { 
                    name: 'errorMessage', 
                    label: 'Error Message', 
                    value: props.data?.errorMessage || 'Invalid input',
                    onChange: (e) => {
                        const { name, value } = e.target;
                        props.setData({ ...props.data, [name]: value });
                    }
                }
            ]}
            inputs={[
                { id: 'inputData' }
            ]}
            outputs={[
                { id: 'validatedData' },
                { id: 'error' }
            ]}
        />
    );
};
