import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class contributeForm extends Component{
    state = {
        value: '',
        loading: false,
        errorMessage: ''
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        
        this.setState({loading: true});

        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            

            Router.reload(`./${this.props.address}`)
        } catch(err){
                this.setState({errorMessage: err.message});
        }

        this.setState({loading: false, value:''})
    };
    render() {
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input 
                        value= {this.state.value}
                        onChange= {event => this.setState({ value: event.target.value})}
                        label= "ether"
                        labelPosition = "right"
                    />
                    <Message error header="oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Contribute!</Button>
                </Form.Field>
            </Form>
        );
    }
}

export default contributeForm;



