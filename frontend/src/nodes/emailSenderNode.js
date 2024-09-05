import { NodeBase } from './nodeBase';

export const EmailSenderNode = (props) => {
    return (
        <NodeBase
            {...props}
            label="Email Sender"
            fields={[
                { 
                    name: 'recipient', 
                    label: 'Recipient Email', 
                    value: props.data?.recipient || '',
                    onChange: (e) => {
                        const { name, value } = e.target;
                        props.setData({ ...props.data, [name]: value });
                    }
                },
                { 
                    name: 'subject', 
                    label: 'Subject', 
                    value: props.data?.subject || '',
                    onChange: (e) => {
                        const { name, value } = e.target;
                        props.setData({ ...props.data, [name]: value });
                    }
                },
                { 
                    name: 'body', 
                    label: 'Body', 
                    component: (
                        <textarea
                            style={{ width: '100%', padding: '5px', boxSizing: 'border-box', marginTop: '5px' }}
                            value={props.data?.body || ''} 
                            onChange={(e) => props.setData({...props.data, body: e.target.value})}
                        />
                    )
                }
            ]}
            inputs={[]}
            outputs={[
                { id: 'sentStatus' }
            ]}
        />
    );
};
