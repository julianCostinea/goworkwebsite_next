import React, { Component } from "react";
import Head from 'next/head';
import classes from "./KontaktForm.module.css";

import Input from "./Input";
import Loader from "./loader";


class KontaktForm extends Component {
  state = {
    kontaktForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "name",
          id: "name",
          autoComplete: "name",
        },
        value: "",
        label: "NAVN*",
        validation: {
          required: true,
          minLength: 2,
        },
        valid: false,
        touched: false,
        errorMessage: "Navn skal være længere end 2 bogstaver",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          id: "email",
          autoComplete: "email",
          name: "email",
        },
        value: "",
        label: "EMAIL*",
        validation: {
          required: true,
          minLength: 5,
          isEmail: true
        },
        valid: false,
        touched: false,
        errorMessage: "Email skal indtastes",
      },
      telefon: {
        elementType: "input",
        elementConfig: {
          type: "tel",
          id: "telefon",
          autoComplete: "tel",
          name: "telefon",
        },
        value: "",
        label: "TELEFON*",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 11
        },
        valid: false,
        touched: false,
        errorMessage: "Telefonnummer skal være mellem 8 og 11 tal",
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "",
          resize: "none",
          rows: 5,
          id: "description",
          name: "description",
        },
        value: "",
        label: "FORTÆL OS KORT OM JERES BEHOV*",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorMessage: "Fortæl os mere om jeres behov",
      },
    },
    formIsValid: false,
    formIsSent: false,
    errorMsg: null,
    isLoading: false,
    isCompleted: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      isValid = value.trim().match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedKontaktForm = {
      ...this.state.kontaktForm,
    };
    const updatedFormElement = {
      ...updatedKontaktForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedKontaktForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedKontaktForm) {
      formIsValid = updatedKontaktForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      kontaktForm: updatedKontaktForm,
      formIsValid: formIsValid,
    });
  };

  kontaktHandler = async (event) => {
    event.preventDefault();
    this.setState({ errorMsg: null });
    this.setState({ isLoading: true });
    this.setState({ formIsSent: true });
    const formData = {};
    for (let formElementIdentifier in this.state.kontaktForm) {
      formData[formElementIdentifier] =
        this.state.kontaktForm[formElementIdentifier].value;
    }
    grecaptcha.ready(async () => {
      grecaptcha.execute('6LcVZSkcAAAAAJq7M6sq2rnUp5FfmPLNG6itAZr8', { action: 'submit' }).then(function (token) {
        console.log(token);
        fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify(formData)
        }).then(function (response) {
          return response.json();
          // if (response.ok) {
          //   this.setState({ isCompleted: true });
          //   setTimeout(function () { window.location.reload(); }, 1800);
          // }
          // if (!response.ok) {
          //   this.setState({ isLoading: false });
          //   this.setState({ errorMsg: data.message });
          // }
        }).then(function(result){
          console.log(result);
          return;
        })
      });
    });
  };

  render() {
    const form = this.state.kontaktForm;
    return (
      <div className={classes.KontaktFormContainer}>
        <Head>
          <script src="https://www.google.com/recaptcha/api.js?render=6LcVZSkcAAAAAJq7M6sq2rnUp5FfmPLNG6itAZr8"></script>
        </Head>
        {this.props.noHeader ? null : (
          <React.Fragment>
            <h1>Kontakt</h1>
            <h3 style={{ color: "#305d95", fontWeight: "bold" }}>
              Er du interesseret i at vide mere? Fortæl os om dit
              personalebehov.
            </h3>
          </React.Fragment>
        )}
        <h3 style={{ color: 'red' }}>{this.state.errorMsg}</h3>
        <form onSubmit={this.kontaktHandler} className={classes.KontaktForm}>
          <Input
            key={form.name.elementConfig.name}
            elementType={form.name.elementType}
            elementConfig={form.name.elementConfig}
            value={form.name.value}
            label={form.name.label}
            errorMessage={form.name.errorMessage}
            invalid={!form.name.valid}
            touched={form.name.touched}
            changed={(event) =>
              this.inputChangedHandler(event, form.name.elementConfig.name)
            }
          />
          <div className={classes.TwoColumn}>
            <Input
              key={form.email.elementConfig.name}
              elementType={form.email.elementType}
              elementConfig={form.email.elementConfig}
              value={form.email.value}
              label={form.email.label}
              errorMessage={form.email.errorMessage}
              invalid={!form.email.valid}
              touched={form.email.touched}
              changed={(event) =>
                this.inputChangedHandler(event, form.email.elementConfig.name)
              }
            />
            <Input
              key={form.telefon.elementConfig.name}
              elementType={form.telefon.elementType}
              elementConfig={form.telefon.elementConfig}
              value={form.telefon.value}
              label={form.telefon.label}
              errorMessage={form.telefon.errorMessage}
              invalid={!form.telefon.valid}
              touched={form.telefon.touched}
              changed={(event) =>
                this.inputChangedHandler(event, form.telefon.elementConfig.name)
              }
            />
          </div>
          <Input
            key={form.description.elementConfig.name}
            elementType={form.description.elementType}
            elementConfig={form.description.elementConfig}
            value={form.description.value}
            label={form.description.label}
            errorMessage={form.description.errorMessage}
            invalid={!form.description.valid}
            touched={form.description.touched}
            changed={(event) =>
              this.inputChangedHandler(
                event,
                form.description.elementConfig.name
              )
            }
          />
          <div style={{ textAlign: "right", padding: "10px" }}>
            <button
              disabled={!this.state.formIsValid || this.state.formIsSent}
              type="submit"
              className={classes.Button}
            >
              &nbsp;&nbsp;&nbsp;SEND <div className={classes.checkmarkDiv}
                style={{ visibility: this.state.isLoading ? 'visible' : 'hidden' }}>
                <Loader hideCheckmark={this.state.isCompleted} />
              </div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default KontaktForm;
