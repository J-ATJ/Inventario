import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function FormPOST() {
  const [state, setState] = useState(false);

  function stateMode() {
    setState(!state)
  }

  return (
    <>
      <Button color="success" onClick={stateMode}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </Button>

      <Modal isOpen={state}>
        <ModalHeader className="bg-success text-white">
          <div className="container">Agregar Libro</div>
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
              alert("POST"); //fetch here
              resetForm();
            }}
          >
            <Form>
              <div className="container">
                <Field
                  name="title"
                  type="text"
                  placeholder="Título" required>
                </Field>
                <Field
                  name="authors"
                  type="text"
                  placeholder="Autores" required>
                </Field>
                <Field
                  name="description"
                  type="text"
                  placeholder="Descripción" required>
                </Field>
                <Field
                  name="price"
                  type="number"
                  min="0"
                  placeholder="Precio" required>
                </Field>
                <Field
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="Stock" required>
                </Field>
                <Field
                  name="genre"
                  type="text"
                  placeholder="Género" required>
                </Field>
                <Field
                  name="image"
                  type="text"
                  placeholder="Image URL" required>
                </Field>
                <br></br><br></br>
                <button type="submit" className="btn btn-success">Aceptar</button>
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
export default FormPOST;