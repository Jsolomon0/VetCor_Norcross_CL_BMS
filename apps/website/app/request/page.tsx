import {
  FileField,
  FormCard,
  FormGrid,
  KeyValueSummary,
  PageHeader,
  SectionGrid,
  SelectField,
  SimpleList,
  TextAreaField,
  TextField
} from "../../../../packages/ui/src/react/index.tsx";
import { WebsitePageShell } from "../../lib/page-shell.tsx";
import {
  getPublicRequestFormOptions,
  getPublicRequestUploadRules,
  getShortTermRestrictionLabels
} from "../../lib/intake-data.ts";
import { submitProjectRequestAction } from "./actions.ts";

function getSubmissionAlert(searchParams?: {
  error?: string;
  fields?: string;
}) {
  if (searchParams?.error === "validation") {
    const fields = searchParams.fields
      ? searchParams.fields
          .split(",")
          .map((field) => field.trim())
          .filter(Boolean)
      : [];

    return {
      title: "Submission needs correction",
      body: fields.length > 0 ? `Check these fields before resubmitting: ${fields.join(", ")}.` : "Check the required fields and upload rules before resubmitting.",
      meta: "Validation"
    };
  }

  if (searchParams?.error === "submission") {
    return {
      title: "Submission did not complete",
      body: "The request could not be submitted. Please review your information and try again, or call 1-844-VETCOR1 for immediate assistance.",
      meta: "Retry needed"
    };
  }

  return undefined;
}

export default async function WebsiteRequestPage({
  searchParams
}: {
  searchParams?: Promise<{ error?: string; fields?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const consultationOptions = getPublicRequestFormOptions();
  const restrictionLabels = getShortTermRestrictionLabels();
  const uploadRules = getPublicRequestUploadRules();
  const submissionAlert = getSubmissionAlert(resolvedSearchParams);

  return (
    <WebsitePageShell>
      <PageHeader
        eyebrow="Request Service"
        title="Tell us about your restoration emergency."
        description="Fill out the form below and a VetCor specialist will respond as quickly as possible. For immediate 24/7 emergency response, call 1-844-VETCOR1 (838-2671). Office hours: Mon–Fri, 9am–5pm at (770) 455-2343."
        actions={[
          { label: "Call Emergency Line: 1-844-VETCOR1", href: "tel:18448382671" },
          { label: "Return Home", href: "/" }
        ]}
        badges={["24/7 Emergency Line Available", "IICRC Certified Technicians", "Veteran-Owned"]}
      />
      <SectionGrid>
        <div style={{ gridColumn: "span 8" }}>
          <FormCard
            title="Service request form"
            description="Describe your restoration emergency. Our IICRC-certified technicians will contact you promptly. For life-threatening emergencies, call 911 first."
          >
            {submissionAlert ? (
              <div className="bms-form-note" style={{ marginBottom: 18 }}>
                <strong>{submissionAlert.title}</strong> {submissionAlert.body}
              </div>
            ) : null}
            <form action={submitProjectRequestAction} encType="multipart/form-data">
              <FormGrid>
                <TextField label="Full name" name="submitterName" placeholder="Jordan Reed" required span="6" />
                <TextField label="Email address" name="email" placeholder="jordan@example.com" required type="email" span="6" />
                <TextField label="Phone number" name="phone" placeholder="(770) 000-0000" type="tel" span="6" />
                <TextField label="Property / damage type" name="projectTitle" placeholder="Water damage in basement" required span="6" />
                <TextAreaField
                  label="Describe the damage"
                  name="projectSummary"
                  placeholder="Describe the type of damage, the affected area, when it occurred, and any immediate safety concerns. The more detail you provide, the faster we can respond."
                  required
                />
                <SelectField label="When do you need service?" name="consultationPreference" options={consultationOptions} defaultValue="within_7_days" />
                <FileField
                  label="Optional damage photo"
                  name="imageUpload"
                  note="Attach a photo of the affected area to help our team prepare for your job."
                  rules={uploadRules}
                />
              </FormGrid>
              <div className="bms-actions">
                <button className="bms-button bms-button--primary" type="submit">
                  Submit Service Request
                </button>
                <a className="bms-button bms-button--secondary" href="/">
                  Return Home
                </a>
              </div>
            </form>
          </FormCard>
        </div>
        <KeyValueSummary
          title="What to expect"
          description="Once submitted, your request goes directly to our VetCor team for review and rapid response."
          items={[
            { label: "Emergency line", value: "1-844-VETCOR1" },
            { label: "Office line", value: "(770) 455-2343" },
            { label: "Certification", value: "IICRC Certified" },
            { label: "Emergency coverage", value: "24/7" }
          ]}
          span="4"
        />
        <SimpleList
          title="Submission guidelines"
          description="Submitting this form does not create a long-term account."
          items={restrictionLabels.map((label, index) => ({
            title: `Note ${index + 1}`,
            body: label
          }))}
          span="4"
        />
        {submissionAlert ? (
          <SimpleList
            title="Submission feedback"
            description="The request was not accepted yet."
            items={[submissionAlert]}
            span="4"
          />
        ) : null}
      </SectionGrid>
    </WebsitePageShell>
  );
}
