/* eslint-disable react/prop-types */
import React from "react"
const url = "http://localhost:3000/"

export const WebPreview = ({ document }) => {
  const { displayed } = document
  console.log(document);
  const targetURL = url + displayed.slug.current + `/?preview=true`

  return (
    <iframe
      title="preview"
      src={targetURL}
      frameBorder={0}
      width="100%"
      height="100%"
    />
  )
}

export const getDefaultDocumentNode = (S, { schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title("Web Preview"),
    ])
  }
}
