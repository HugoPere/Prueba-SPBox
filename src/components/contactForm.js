import React from 'react';
import {contactData} from './contactData';

class ContactForm extends React.Component {
    alert(){
        alert("Correo enviado");
    }
    render(){
        return(
            <section className="box">
                <div className="columns">
                    <div className="column is-half">
                        <div className="box">
                            <form>
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input required id="name" name="name" className="input" type="text" placeholder="Su Nombre"/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input required id="mail_sender" name="mail_sender" className="input" type="email" placeholder="Su Correo"/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Mensaje</label>
                                    <div className="control">
                                        <textarea  required id="content" name="content" className="textarea" placeholder="Buenos días, envio este correo con la intención de..."/>
                                    </div>
                                </div>

                                {contactData.map((contact) =>{
                                    return (
                                        <div>
                                            <p>
                                                El correo será enviado a
                                            </p>
                                                <fieldset disabled>
                                                <input id="mail" name="mail" className="input" type="text" value={contact.email} readOnly={true}/>
                                                </fieldset>
                                        </div>
                                    )
                                })}
                                <div className="field is-grouped">
                                <div className="control">
                                    <button id="button" className="button is-link" onClick={this.alert}>Enviar</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="box">
                            <p>¿Dudas, proposiciones, ofertas, solicitudes, sugerencias?</p>
                            <p>Envianos tu mensaje y responderemos a la brevedad</p>
                            <a href="http://www.spbox.cl">
                                <img src="data:image/png;base64,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" alt="logo_img" className="box"/>
                            </a>
                            <p>Dirección: Calle 123</p>
                            <p>Fono: 123456789</p>
                            <p>Fax: 123456789</p>
                            <p>Made with ReactJS and Bulma frameworks</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactForm