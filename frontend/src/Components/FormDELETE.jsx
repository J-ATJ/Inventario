import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../Components-css/FormDELETE.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function FormDELETE() {
  const [state, setState] = useState(false);

  function stateMode() {
    setState(!state)
  }

  return (
    <>
      <Button color="danger" onClick={stateMode}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
      </Button>

      <Modal isOpen={state}>
        <ModalHeader className="bg-danger text-white na">
          <div>Eliminar Libro</div>
        </ModalHeader>
        <ModalBody>
          <Formik
            //valores iniciales
            initialValues={{ title: ""}}

            //validación

            //manejar envío
            onSubmit={async (values, { resetForm }) => {
              alert("DELETE " + values.title)
              resetForm(); //reinicia el formulario
            }}
          >
            <Form>
              <Field
                name="title"
                type="text"
                className="deleteBar"
                placeholder="Título" required>
              </Field>

              <br></br><br />
              <Field
                name="confirm"
                type="checkbox" required>
              </Field>
              <label for="confirm">&nbsp;Confirmar</label>

              <br></br><br></br>
              <button type="submit" className="btn btn-danger">Eliminar</button>
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

export default FormDELETE;