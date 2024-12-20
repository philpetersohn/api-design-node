import { Router } from 'express'
import { body, check, oneOf, validationResult } from 'express-validator'
import { handleInputErrors } from './modules/middleware'

const router = Router()

//Product

router.get('/product', () => {})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), handleInputErrors, () => {})
router.post('/product', body('name').isString(), handleInputErrors, () => {})
router.delete('/product/:id', () => {})

// Update

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put(
  '/update/:id',
  body('title').optional(),
  body('body').optional(),
  oneOf([
    check('status').equals('IN_PROGRESS'),
    check('status').equals('SHIPPED'),
    check('status').equals('DEPRECATED'),
  ]),
  body('version').optional(),
  () => {}
)
router.post(
  '/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  () => {}
)
router.delete('/update/:id', () => {})

// Update Point

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put(
  '/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
)
router.post(
  '/updatepoint',
  body('name').isString(),
  body('description').isString(),
  body('updateId').isString(),
  () => {}
)
router.delete('/updatepoint/:id', () => {})

export default router
