import { useRef, useState } from 'react'
import { useLanguage } from './LanguageProvider'

function ContactSection() {
  const { labels } = useLanguage()
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [wantsOrder, setWantsOrder] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const webhook = import.meta.env.VITE_DISCORD_WEBHOOK_URL

    if (!webhook) {
      alert('Discord webhook not configured. Set VITE_DISCORD_WEBHOOK_URL in your .env')
      return
    }

    const form = formRef.current
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // Build a compact embed for Discord
    const embed = {
      title: wantsOrder ? 'New order request' : 'New contact message',
      fields: [
        { name: 'Name', value: data.from_name || '—', inline: true },
        { name: 'Email', value: data.reply_to || '—', inline: true },
        ...(wantsOrder
          ? [
              { name: 'Order type', value: data.order_type || '—', inline: true },
              { name: 'Budget', value: data.budget || '—', inline: true },
            ]
          : []),
      ],
      description: data.message || 'No message provided',
      timestamp: new Date().toISOString(),
    }

    try {
      setIsSending(true)
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] }),
      })

      if (!res.ok) {
        const text = await res.text()
        console.error('Webhook error', res.status, text)
        alert(labels.sentError)
        return
      }

      form.reset()
      alert(labels.sentSuccess)
    } catch (error) {
      console.error('Webhook Error:', error)
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
