import { body } from "express-validator"
import { ValidatorHandler } from "./error.handler"

const addProduct = [
    body('product', 'errrors')
    .custom((val) => true).withMessage('something is error').bail(),
]

export const ProductValidation: any = {
    add: [addProduct, ValidatorHandler],
}