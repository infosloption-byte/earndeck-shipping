'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/site';

const options = [...services.map((s) => s.name), 'Other maritime enquiry'];

export function EnquiryForm({ service = '' }: { service?: string }) {
  const [status, setStatus] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await r.json();
      if (!r.ok) throw new Error(result.error || 'We could not send your enquiry.');
      setStatus({ kind: 'ok', text: 'Thank you — your enquiry has been sent to our operations team.' });
      form.reset();
    } catch (err) {
      setStatus({
        kind: 'err',
        text: err instanceof Error ? err.message : 'Unable to send the enquiry. Please email us instead.',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="enquiry" onSubmit={submit}>
      <h2>Request a survey</h2>
      <p>Tell us the vessel, location, service and preferred attendance date. Fields marked * are required.</p>

      <div className="form-row">
        <label>
          Name *
          <input name="name" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          Work email *
          <input name="email" type="email" required maxLength={254} autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Company
          <input name="company" maxLength={150} autoComplete="organization" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" maxLength={50} autoComplete="tel" />
        </label>
      </div>
      <label>
        Service *
        <select name="service" defaultValue={service} required>
          <option value="" disabled>
            Select a service
          </option>
          {options.map((x) => (
            <option value={x} key={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      <div className="form-row">
        <label>
          Port / location
          <input name="port" maxLength={140} placeholder="e.g. Colombo" />
        </label>
        <label>
          Preferred date
          <input type="date" name="date" />
        </label>
      </div>
      <label>
        Enquiry *
        <textarea
          name="message"
          rows={5}
          minLength={15}
          maxLength={4000}
          required
          placeholder="Vessel name, expected arrival, cargo and survey scope"
        />
      </label>

      <div className="trap" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" required value="yes" />
        <span>
          I agree to be contacted about this enquiry and have read the <a href="/privacy">privacy notice</a>.
        </span>
      </label>

      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? 'Sending enquiry…' : 'Send enquiry'} <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className={status ? 'status ' + status.kind : 'status'} role="status" aria-live="polite">
        {status?.text}
      </p>
    </form>
  );
}
