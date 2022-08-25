import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../Components-css/FormPUT.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function FormPUT() {
  const [state, setState] = useState(false);

  function stateMode() {
    setState(!state)
  }

  return (
    <>
      <Button color="primary" onClick={stateMode}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
      </Button>

      <Modal isOpen={state}>
        <ModalHeader className="bg-primary text-white na">
          <div className="container">Editar Libro</div>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              title: "",
              authors: "",
              description: "",
              price: "",
              stock: "",
              genre: "",
              image: ""
            }}
            onSubmit={(values, { resetForm }) => {
              alert("PUT"); //fetch here
              resetForm();
            }}
          >
            <Form>
              <div>
                <Field
                  name="title"
                  type="text"
                  className="dataBar"
                  placeholder="Título" required>
                </Field>
                <Field
                  name="authors"
                  type="text"
                  className="dataBar"
                  placeholder="Autores" required>
                </Field>
                <Field
                  name="description"
                  type="text"
                  className="dataBar2"
                  placeholder="Descripción" required>
                </Field>
                <Field
                  name="price"
                  type="number"
                  min="0"
                  className="dataBar3"
                  placeholder="Precio" required>
                </Field>
                <Field
                  name="stock"
                  type="number"
                  min="0"
                  className="dataBar3"
                  placeholder="Stock" required>
                </Field>
                <Field
                  name="genre"
                  type="select"
                  className="dataBar"
                  placeholder="Género" required>
                </Field>
                <Field
                  name="image"
                  type="text"
                  className="dataBar2"
                  placeholder="Image URL" required>
                </Field>
                <br></br><br></br>
                <button type="submit" className="btn btn-primary">Aceptar</button>
              </div>
            </Form>
          </Formik>
        </ModalBody>
        <ModalFooter>
          <div><button onClick={stateMode} className="btn btn-secondary">Cerrar ventana</button></div>
        </ModalFooter>
      </Modal>

    </>
  )
}


export default FormPUT;