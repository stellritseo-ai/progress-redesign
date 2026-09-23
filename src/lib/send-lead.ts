export interface LeadSubmissionPayload {
  sourceForm: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  service?: string;
  tier?: string;
  scope?: string;
  timeline?: string;
  budget?: string;
  hearAbout?: string;
  notes?: string;
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
