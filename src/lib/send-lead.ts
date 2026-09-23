export interface LeadSubmissionPayload {
  sourceForm: string;
  name: string;
  phone: string;
  email?: string | undefined;
  address?: string | undefined;
  service?: string | undefined;
  tier?: string | undefined;
  scope?: string | undefined;
  timeline?: string | undefined;
  budget?: string | undefined;
  hearAbout?: string | undefined;
  notes?: string | undefined;
}

export async function submitLeadRequest(
  payload: LeadSubmissionPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/send-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (err: any) {
    console.error("Lead submission error:", err);
    return {
      success: false,
      error: err?.message || "Unable to send your request. Please call us directly at (816) 462-3599.",
    };
  }
}
