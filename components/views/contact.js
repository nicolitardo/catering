import React from 'react';
class Faq extends React.Component {
	render() {
        const { contact, form, formValidation, submitForm, handleChange, formStatus } = this.props;
		return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="h2">{contact.title}</p>
                        <div dangerouslySetInnerHTML={{__html: contact.content}} />
                    </div>
                    <div className="col-sm-6">
                            <div className={`form-group ${formValidation.name ? 'has-error' : ''}`}>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" value={form.name} onChange={handleChange} placeholder="Ingrese su Nombre y Apellido" name="name" className="form-control" />
                            </div>
                            <div className={`form-group ${formValidation.email ? 'has-error' : ''}`}>
                                <label htmlFor="email">Email</label>
                                <input type="email" value={form.email} onChange={handleChange} placeholder="Ingrese su direccion de Email" name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono de contacto (Opcional)</label>
                                <input type="text" value={form.phone} onChange={handleChange} placeholder="Ingrese su numero de Telefono" name="phone" className="form-control" />
                            </div>
                            <div className={`form-group ${formValidation.message ? 'has-error' : ''}`}>
                                <label htmlFor="message">Mensaje</label>
                                <textarea name="message" value={form.message} onChange={handleChange} className="form-control" placeholder="Ingrese la consulta que quiere realizar" id="" cols="10" rows="5"></textarea>
                            </div>
                            {
                                formStatus.status == 'success' &&
                                <div className="alert alert-success success-message">
                                    { formStatus.message }
                                </div>
                            }
                            {
                                formStatus.status == 'error' &&
                                <div className="alert alert-danger error-message">
                                    { formStatus.message }
                                </div>
                            }
                            <a className="btn btn-primary" onClick={() => submitForm()}>Enviar</a>
                    </div>
                </div>
            </div>
		);
	}
}

export default Faq;
