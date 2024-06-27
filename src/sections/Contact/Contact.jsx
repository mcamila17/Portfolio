import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contacts" className={styles.container}>
      <h1>Trabajemos juntos</h1>
      <form action="https://formspree.io/f/xqazzonn" method="post">
        <div className="formGroup">
            <label htmlFor="name" hidden> Nombre</label>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
            />
        </div>
        <div className="formGroup">
            <label htmlFor="email" hidden> Email</label>
            <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            />
        </div>
        <div className="formGroup">
            <label htmlFor="message" hidden> Mensaje</label>
            <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            required>
            </textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  )
}

export default Contact
