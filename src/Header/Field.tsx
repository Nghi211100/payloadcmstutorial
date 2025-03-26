import type React from 'react'
import { TextField } from '@payloadcms/ui'
import type { TextFieldServerComponent } from 'payload'

export const Field: TextFieldServerComponent = ({ clientField, path, schemaPath, permissions }) => {
  return (
    <TextField field={clientField} path={path} schemaPath={schemaPath} permissions={permissions} />
  )
}
