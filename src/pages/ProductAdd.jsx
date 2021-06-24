import React from 'react'
import { Formik, Form} from "formik"
import * as Yup from "yup"
import { Button } from "semantic-ui-react"
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput"

//REDUX THUNK : SENKRON İŞLEMLER İÇİN. STATE İ VERİTABANINDAN ÇEKTİĞİMİZ ZAMAN VE ONU YÖNETMEK İSTEDİĞİMİZDE KULLANACAĞIMIZ PAKET

function ProductAdd() {
    const initialValues = { name: "", unitPrice: 10 }

    const schema = Yup.object({
        name: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })
    return (
        <Formik
            initialValues={initialValues} 
            validationSchema={schema} 
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
            <Form className="ui form">
                <KodlamaIoTextInput name="name" placeholder="Ürün Adı"/>
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    )
}

export default ProductAdd
