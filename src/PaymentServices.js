export default class PaymentServices {
  #payments

  constructor() {
    this.#payments = []
  }

  makePayment(bill) {

    const category = bill.amount > 100 ? 'cara' : 'padrão'

    this.#payments.push({
      barcode: bill.barcode,
      company: bill.company,
      amount: bill.amount,
      category: category
    })
  }

  getLastPayment() {
    return this.#payments.at(-1)
  }
}