import { useField } from 'formik'
import React from 'react'
import {FormField,Label} from "semantic-ui-react"

function KodlamaIoTextInput({...props}) {
    //console.log(props)
    //bu hareket js de : "reflect api" ile yapılır
    const [field,meta] = useField(props)
    //console.log(meta)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field}{...props}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}

export default KodlamaIoTextInput
