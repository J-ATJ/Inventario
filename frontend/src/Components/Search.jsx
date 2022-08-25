import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../Components-css/Search.css'
import { data } from '../pruebas/database';

function Search() {
  var [datas, setDatas] = useState();

  return (
    <div className="container">
      <Formik
        initialValues={{ search: "" }}

        onSubmit={(values, {resetForm}) => {
          alert("GET: " + values.search); //fetch here
          resetForm();
        }}
      >
        <Form>
          <div className="container searchForm">
            <Field
              name="search"
              type="text"
              placeholder="Buscar..."
              className="searchBar"
            >
            </Field>
            <button type="submit" className="btn btn-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
export default Search;