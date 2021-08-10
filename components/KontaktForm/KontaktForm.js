import React, { Component } from 'react';

import classes from './KontaktForm.module.css';

import Input from './Input';

class KontaktForm extends Component {
    state = {
        kontaktForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    name: "name",
                    id: "name",
                    autoComplete: "name",
                },
                value: '',
                label: "NAVN*",
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
                errorMessage: 'This field is required!',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    id:"email" ,
                    autoComplete:"email",
                    name:"email",
                },
                value: '',
                label : "EMAIL*",
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter a valid email!',
            },
            telefon: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    id: "telefon",
                    autoComplete: "tel",
                    name: "telefon",
                },
                value: '',
                label : "TELEFON*",
                validation: {
                    required: true,
                    minLength: 8,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter a valid phone number!',
            },
            description: {
                elementType: 'textarea',
                elementConfig: {
                    type: '',
                    resize:'none',
                    rows:5,
                    id:"description" ,
                    name:"description",
                },
                value: '',
                label: "FORTÆL OS KORT OM DIT BEHOV*",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: 'Please tell us more about your needs!',
            },
        },
        formIsValid: false
    }

    checkValidity = (value, rules)=>{

        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier)=>{
        const updatedKontaktForm = {
            ...this.state.kontaktForm
        }
        const updatedFormElement = {
            ...updatedKontaktForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedKontaktForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for(let inputIdentifier in updatedKontaktForm){
            formIsValid = updatedKontaktForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({kontaktForm: updatedKontaktForm, formIsValid: formIsValid});
    }

    kontaktHandler = (event) =>{
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.kontaktForm) {
                formData[formElementIdentifier] = this.state.kontaktForm[formElementIdentifier].value;
            }
        alert('mail is sent');
        }

    render(){
        const form = this.state.kontaktForm;
        return ( 
            <div className={classes.KontaktFormContainer}>
                        {this.props.noHeader ? null : (
                            <React.Fragment>
                                <h1>Kontakt</h1>
                                <h3 style={{color: '#305d95' , fontWeight: 'bold'}}>Er du interesseret i at vide mere? Fortæl os om dit personalebehov.</h3>
                            </React.Fragment>
                        )}  
                        <form onSubmit={this.kontaktHandler} className={classes.KontaktForm}>
                                <Input 
                                    key = {form.name.elementConfig.name}
                                    elementType = {form.name.elementType}
                                    elementConfig = {form.name.elementConfig}
                                    value = {form.name.value}
                                    label = {form.name.label}
                                    errorMessage = {form.name.errorMessage}
                                    invalid =  {!form.name.valid}
                                    touched = {form.name.touched}
                                    changed = {(event)=>this.inputChangedHandler(event, form.name.elementConfig.name)}
                                    />
                            <div className={classes.TwoColumn}>
                                <Input 
                                        key = {form.email.elementConfig.name}
                                        elementType = {form.email.elementType}
                                        elementConfig = {form.email.elementConfig}
                                        value = {form.email.value}
                                        label = {form.email.label}
                                        errorMessage = {form.email.errorMessage}
                                        invalid =  {!form.email.valid}
                                        touched = {form.email.touched}
                                        changed = {(event)=>this.inputChangedHandler(event, form.email.elementConfig.name)}
                                        />
                                <Input 
                                        key = {form.telefon.elementConfig.name}
                                        elementType = {form.telefon.elementType}
                                        elementConfig = {form.telefon.elementConfig}
                                        value = {form.telefon.value}
                                        label = {form.telefon.label}
                                        errorMessage = {form.telefon.errorMessage}
                                        invalid =  {!form.telefon.valid}
                                        touched = {form.telefon.touched}
                                        changed = {(event)=>this.inputChangedHandler(event, form.telefon.elementConfig.name)}
                                        />
                            </div>
                            <Input 
                                    key = {form.description.elementConfig.name}
                                    elementType = {form.description.elementType}
                                    elementConfig = {form.description.elementConfig}
                                    value = {form.description.value}
                                    label = {form.description.label}
                                    errorMessage = {form.description.errorMessage}
                                    invalid =  {!form.description.valid}
                                    touched = {form.description.touched}
                                    changed = {(event)=>this.inputChangedHandler(event, form.description.elementConfig.name)}
                                    />
                            <div style={{textAlign: 'right', padding: '10px'}}>
                                <button 
                                    disabled = {!this.state.formIsValid}
                                    type='submit'
                                    className={classes.Button}>
                                        SEND
                                </button>
                            </div>
                        </form>
                    </div>
        );
    }
}
 
export default KontaktForm;