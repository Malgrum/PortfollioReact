import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from './LanguageProvider'

function ContactSection() {
  const { labels } = useLanguage()
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [wantsOrder, setWantsOrder] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

    if (!publicKey || !serviceId || !templateId) {
      alert(labels.missingConfig)
      return
    }

    try {
      setIsSending(true)
      emailjs.init(publicKey)
      await emailjs.sendForm(serviceId, templateId, formRef.current)
      alert(labels.sentSuccess)
      formRef.current?.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert(labels.sentError)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <h1 className="page-title">{labels.contact}</h1>
      <section className="neon-card contact-card">
        <p className="contact-intro">{labels.contactIntro}</p>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="order-card">
            <label className="checkbox-row">
              <input
                type="checkbox"
                name="order_request"
                checked={wantsOrder}
                onChange={(event) => setWantsOrder(event.target.checked)}
              />
              <span>{labels.orderToggle}</span>
            </label>
            {wantsOrder ? (
              <div className="order-grid">
                <div className="form-row">
                  <label htmlFor="order-type">{labels.orderType}</label>
                  <select id="order-type" name="order_type" defaultValue="" required>
                    <option value="" disabled>
                      {labels.orderPlaceholder}
                    </option>
                    <option value="Impression PLA">Impression PLA</option>
                    <option value="Impression Resine">Impression Resine</option>
                    <option value="Logiciel">Logiciel</option>
                    <option value="Site">Site</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="name">{labels.firstNameLabel}</label>
                  <input type="text" id="name" name="from_name" placeholder="Name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="mail">{labels.emailLabel}</label>
                  <input type="email" id="mail" name="reply_to" placeholder="example@mail.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="budget">{labels.orderBudget}</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder={labels.budgetPlaceholder}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="msg">{labels.messageLabel}</label>
                  <textarea id="msg" name="message" placeholder="..." rows="5" required />
                </div>
              </div>
            ) : (
              <div className="order-grid">
                <div className="form-row">
                  <label htmlFor="name">{labels.firstNameLabel}</label>
                  <input type="text" id="name" name="from_name" placeholder="Name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="mail">{labels.emailLabel}</label>
                  <input type="email" id="mail" name="reply_to" placeholder="example@mail.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="msg">{labels.messageLabel}</label>
                  <textarea id="msg" name="message" placeholder="..." rows="5" required />
                </div>
              </div>
            )}
          </div>
          <button type="submit" className="submit-button" disabled={isSending}>
            {isSending ? labels.sending : labels.send}
          </button>
        </form>
      </section>
    </>
  )
}

export default ContactSection
