import { describe, expect, it } from "vitest";
import { getContactMethodError } from "@/lib/contactValidation";

describe("contact method validation", () => {
  it("accepts a phone-only enquiry", () => {
    expect(getContactMethodError("", "+30 697 477 6057")).toBeNull();
  });

  it("accepts an email-only enquiry", () => {
    expect(getContactMethodError("customer@example.com", "")).toBeNull();
  });

  it("rejects an enquiry without email or phone", () => {
    expect(getContactMethodError("  ", " ")).toBe("required");
  });

  it("rejects a malformed email even when a phone is provided", () => {
    expect(getContactMethodError("not-an-email", "+30 697 477 6057")).toBe("invalidEmail");
  });
});
