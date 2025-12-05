import { useState } from "react";
import "./Formulario.scss";
import { supabase } from "../lib/supabaseClient"; // 👈 ruta según donde lo creaste
import videoFondo from "../../videos/fondo.mp4";

type FormValues = {
  name: string;
  company: string;
  email: string;
  countryCode: string;
  phone: string;
  machineType: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  countryCode: "+57", 
  phone: "",
  machineType: "",
  serviceType: "",
  message: "",
};

function Formulario() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError(null);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) newErrors.name = "Escribe tu nombre.";
    if (!values.email.trim()) newErrors.email = "Escribe tu correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      newErrors.email = "Correo no válido.";
    if (!values.phone.trim()) newErrors.phone = "Escribe tu teléfono.";
    if (!values.machineType) newErrors.machineType = "Selecciona una máquina.";
    if (!values.serviceType) newErrors.serviceType = "Selecciona un servicio.";
    if (!values.message.trim())
      newErrors.message = "Cuéntanos qué necesitas.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSent(false);

    if (!validate()) return;

    setIsSubmitting(true);

    // 👇 Insertar en Supabase
    const { error } = await supabase.from("maintenance_requests").insert({
      name: values.name,
      company: values.company || null,
      email: values.email,
      phone: `${values.countryCode}${values.phone}`,
      machine_type: values.machineType,
      service_type: values.serviceType,
      message: values.message,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Error al guardar en Supabase:", error);
      setSubmitError("Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.");
      return;
    }

    setIsSent(true);
    setValues(initialValues);
  };

  return (
    <section className="Formulario" id="Formulario"> 
    {/* VIDEO DE FONDO */}
    <video autoPlay loop muted className="video-fondo" playsInline>
      <source src={videoFondo} type="video/mp4" />
    </video>

    <div className="text">
      <h3>Diseñamos, reparamos y potenciamos</h3>
      <h2>MAQUINAS DE</h2>
      <h2>ALTA FRECUENCIA</h2>
    </div>
    <form className="maintenance-form" onSubmit={handleSubmit} noValidate>
      <h3 className="maintenance-form__title">Nosotros te buscamos</h3>
      <p className="maintenance-form__subtitle">
        Déjanos tus datos y un especialista te contactará.
      </p>

      <div className="maintenance-form__grid">
        {/* Campos igual que antes */}
        <div className="maintenance-form__field">
          <label htmlFor="name">Nombre completo *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Ej. Ana López"
          />
          {errors.name && (
            <span className="maintenance-form__error">{errors.name}</span>
          )}
        </div>

        <div className="maintenance-form__field">
          <label htmlFor="company">Empresa (opcional)</label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div className="maintenance-form__field">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
          />
          {errors.email && (
            <span className="maintenance-form__error">{errors.email}</span>
          )}
        </div>

       <div className="maintenance-form__field">
  <label htmlFor="phone">Teléfono / WhatsApp *</label>

  <div className="phone-input">
    <select
      name="countryCode"
      value={values.countryCode}
      onChange={handleChange}
      className="phone-input__select"
    >
      <option value="+1">🇺🇸 +1 (EE.UU.)</option>
      <option value="+34">🇪🇸 +34 (España)</option>
      <option value="+57">🇨🇴 +57 (Colombia)</option>
      <option value="+52">🇲🇽 +52 (México)</option>
      <option value="+51">🇵🇪 +51 (Perú)</option>
      <option value="+56">🇨🇱 +56 (Chile)</option>
      <option value="+54">🇦🇷 +54 (Argentina)</option>
      <option value="+55">🇧🇷 +55 (Brasil)</option>
      <option value="+58">🇻🇪 +58 (Venezuela)</option>
      <option value="+593">🇪🇨 +593 (Ecuador)</option>
      <option value="+502">🇬🇹 +502 (Guatemala)</option>
      <option value="+503">🇸🇻 +503 (El Salvador)</option>
      <option value="+504">🇭🇳 +504 (Honduras)</option>
      <option value="+505">🇳🇮 +505 (Nicaragua)</option>
      <option value="+506">🇨🇷 +506 (Costa Rica)</option>
      <option value="+507">🇵🇦 +507 (Panamá)</option>
      <option value="+53">🇨🇺 +53 (Cuba)</option>
      <option value="+44">🇬🇧 +44 (Reino Unido)</option>
      <option value="+49">🇩🇪 +49 (Alemania)</option>
      <option value="+33">🇫🇷 +33 (Francia)</option>
      <option value="+39">🇮🇹 +39 (Italia)</option>
    </select>

    <input
      id="phone"
      name="phone"
      type="tel"
      value={values.phone}
      onChange={handleChange}
      placeholder="Número sin prefijo"
      className="phone-input__number"
    />
  </div>

  {errors.phone && (
    <span className="maintenance-form__error">{errors.phone}</span>
  )}
</div>


        <div className="maintenance-form__field">
          <label htmlFor="machineType">Tipo de máquina *</label>
          <select
            id="machineType"
            name="machineType"
            value={values.machineType}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="neumatica">Neumática 6.5 / 7 kW</option>
            <option value="repujadora">Repujadora hidráulica</option>
            <option value="mixta">Neumática e hidráulica</option>
            <option value="carpera">Máquina carpera</option>
            <option value="otra">Otra / no estoy seguro</option>
          </select>
          {errors.machineType && (
            <span className="maintenance-form__error">
              {errors.machineType}
            </span>
          )}
        </div>

        <div className="maintenance-form__field">
          <label htmlFor="serviceType">Tipo de servicio *</label>
          <select
            id="serviceType"
            name="serviceType"
            value={values.serviceType}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="preventivo">Mantenimiento preventivo</option>
            <option value="reparacion">Reparación / avería</option>
            <option value="calibracion">Calibración</option>
            <option value="instalacion">Instalación / puesta en marcha</option>
            <option value="otro">Otro</option>
          </select>
          {errors.serviceType && (
            <span className="maintenance-form__error">
              {errors.serviceType}
            </span>
          )}
        </div>
      </div>

      <div className="maintenance-form__field maintenance-form__field--full">
        <label htmlFor="message">Descripción *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Cuéntanos qué le ocurre a la máquina, modelo, antigüedad, síntomas…"
        />
        {errors.message && (
          <span className="maintenance-form__error">{errors.message}</span>
        )}
      </div>

      {submitError && (
        <p className="maintenance-form__error maintenance-form__error--global">
          {submitError}
        </p>
      )}

      <button
        className="maintenance-form__submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </button>

      {isSent && (
        <p className="maintenance-form__success">
          Hemos recibido tu solicitud. Te contactaremos lo antes posible.
        </p>
      )}
    </form> 
    {/* <div className="contacto-info">
        <h2>Contacto</h2>

    </div> */}
     </section>
    
  );
}

export default Formulario;
