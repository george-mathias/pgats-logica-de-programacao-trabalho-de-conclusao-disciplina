import PaymentServices from '../src/PaymentServices.js'
import assert from 'node:assert'

describe('Payment Service Class Tests', () => {

    let paymentServices
    beforeEach(() => { paymentServices = new PaymentServices() })

    describe('pay', () => {
        context('when the bill amount is greater than 100.00', () => {
            it('should save the payment with "cara" category', function () {

                const bill = {
                    barcode: '0987-7656-3475',
                    company: 'Samar',
                    amount: 156.87
                }
                const category = 'cara'

                paymentServices.makePayment(bill)
                const payment = paymentServices.getLastPayment()

                assert.strictEqual(payment.category, category)
            })
        })

        context('when the bill amount is less than or equal to 100.00', () => {
            it('should save the payment with the "padrão" category', () => {

                const bill = {
                    barcode: '0987-7656-3475',
                    company: 'Samar',
                    amount: 100.00
                }
                const category = 'padrão'

                paymentServices.makePayment(bill)
                const payment = paymentServices.getLastPayment()

                assert.strictEqual(payment.category, category)
            })
        })

        context('when the bill amount is not provided', () => {
            it('should save the payment with the "padrão" category', () => {
 
                const bill = {
                    barcode: '9999-9999-9999',
                    company: 'Missing Amount Co.'
                };

                paymentServices.makePayment(bill)
                const payment = paymentServices.getLastPayment()

                assert.strictEqual(payment.barcode, bill.barcode)
                assert.strictEqual(payment.amount, bill.amount)
                assert.strictEqual(payment.category, 'padrão')
            })
        })

        context('when the barcode is not provided', () => {
            it('should save the payment with the barcode as undefined', () => {

                const bill = {
                    company: 'Missing Barcode Co.',
                    amount: 50.00
                }

                paymentServices.makePayment(bill)
                const payment = paymentServices.getLastPayment()

                assert.strictEqual(payment.barcode, undefined)
                assert.strictEqual(payment.company, bill.company)
                assert.strictEqual(payment.amount, bill.amount)
            })
        })

    })

    describe('get payment', () => {
        context('when no payments have been made yet', () => {
            it('should return undefined', () => {

                const payments = paymentServices.getLastPayment();
                assert.strictEqual(payments, undefined)
            })
        })

        context('when there are multiple payments in the list', () => {
            it('should return strictly the last added object', () => {

                const firstBill = {
                    barcode: '0CBE-345H-354Y',
                    company: 'PGATS',
                    amount: 30.00
                };
                const lastBill = {
                    barcode: '3FNJ-867M-432N',
                    company: 'GenAI',
                    amount: 120.00
                };

                paymentServices.makePayment(firstBill)
                paymentServices.makePayment(lastBill)

                const result = paymentServices.getLastPayment()

                assert.strictEqual(result.barcode, lastBill.barcode)
                assert.strictEqual(result.company, lastBill.company)
            })
        })
    })
})