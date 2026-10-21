import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'How Earndeck Shipping handles personal information submitted through maritime survey enquiries.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={
          <>
            Privacy <em>notice.</em>
          </>
        }
        wavesFill="#fcfbf8"
      />
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="shell legal">
          <h2>Enquiry information</h2>
          <p>
            When you submit an enquiry, we receive the contact information and operational details you provide so that
            our team can respond, assess the request and arrange potential survey attendance.
          </p>
          <h2>Processing and disclosure</h2>
          <p>
            Enquiries are transmitted to the company&rsquo;s designated email service provider and received by the
            operations team. Do not include passwords, identity documents or unnecessary sensitive personal data in your
            message.
          </p>
          <h2>Career applications</h2>
          <p>When you apply through the Careers page, the company receives your name, contact details, stated experience, position of interest and uploaded PDF CV through its designated email provider. These details are used to review your expression of interest and contact you about relevant opportunities. Sample role profiles do not represent confirmed vacancies.</p>
          <p>Do not submit identity cards, passport scans or other unnecessary sensitive information. The company must establish its retention schedule, deletion procedures and authorized recruitment recipients before production launch.</p>
          <h2>Retention and requests</h2>
          <p>
            Contact {site.email} to request access, correction or deletion where applicable. Retention periods and the
            full privacy policy must be confirmed by the company before production launch.
          </p>
          <h2>Contact</h2>
          <p>
            {site.legal}, {site.address}. Email: {site.email}.
          </p>
          <p>
            <strong>Draft notice:</strong> This page requires legal and operational review before public launch.
          </p>
        </div>
      </section>
    </>
  );
}
