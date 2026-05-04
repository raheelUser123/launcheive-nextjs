"use client";

import clsx from "clsx";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronDown, CircleCheckBig, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useForm, Controller } from "react-hook-form";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import PhoneInput from 'react-phone-number-input'
import { submitAuditForm } from "@/app/actions/submit-audit";
import { MultiSelect } from "@/components/ui/multi-select";
import { trackEvent } from "@/utils/meta";
import { trackRedditEvent } from "@/utils/reddit";
import { useRouter } from "next/navigation";

const TOOL_OPTIONS = [
  "Lovable",
  "Bolt",
  "Cursor",
  "Replit",
  "Bubble",
  "Webflow",
  "Base44",
  "Custom Code",
  "Other",
] as const;

const PROJECT_STAGES = [
  "Just an idea",
  "Prototype in progress",
  "Prototype completed",
  "Beta with testers",
  "Live product with traction",
] as const;

const LAUNCH_STATUS_OPTIONS = [
  "Not launched yet",
  "Soft launched",
  "Publicly launched",
] as const;

const CHALLENGE_OPTIONS = [
  "Not sure if the idea is worth pursuing",
  "Prototype is breaking or unstable",
  "Don't know what to build next",
  "Need honest feedback before investing more",
  "Ready to build properly but need the right team",
  "Other",
] as const;

const freeAuditSchema = z
  .object({
    agreedToTerms: z.boolean().refine((value) => value, {
      message: "You must agree before continuing.",
    }),
    biggestChallenges: z
      .array(z.string())
      .min(1, "Select at least one challenge."),
    builtWith: z.array(z.string()),
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Use a valid email address."),
    launchStatus: z.string().min(1, "Launch status is required."),
    name: z.string().min(1, "Your name is required."),
    otherChallenge: z.string(),
    phone: z.string().min(1, "Phone number is required."),
    problem: z.string().min(1, "Tell us what problem the product solves."),
    projectStage: z.string().min(1, "Project stage is required."),
    prototypeLink: z
      .string()
      .refine(
        (value) =>
          value.trim() === "" || z.string().url().safeParse(value).success,
        { message: "Use a valid prototype URL." },
      ),
    targetUsers: z.string(),
  })
  .superRefine((values, context) => {
    if (
      values.biggestChallenges.includes("Other") &&
      !values.otherChallenge.trim()
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify the other challenge.",
        path: ["otherChallenge"],
      });
    }

    if (values.phone) {
      const parsedPhoneNumber = parsePhoneNumberFromString(values.phone);

      if (!parsedPhoneNumber?.isValid()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Use a valid phone number.",
          path: ["phone"],
        });
      }
    }
  });

type FreeAuditFormValues = z.infer<typeof freeAuditSchema>;
type Step = 1 | 2;

const DEFAULT_VALUES: FreeAuditFormValues = {
  agreedToTerms: false,
  biggestChallenges: [],
  builtWith: [],
  email: "",
  launchStatus: "",
  name: "",
  otherChallenge: "",
  phone: "",
  problem: "",
  projectStage: "",
  prototypeLink: "",
  targetUsers: "",
};

const STEP_FIELDS: Record<Step, Array<keyof FreeAuditFormValues>> = {
  1: [
    "projectStage",
    "problem",
    "biggestChallenges",
    "otherChallenge",
    "launchStatus",
    "prototypeLink",
  ],
  2: ["name", "email", "phone", "agreedToTerms"],
};

const INPUT_CLASS =
  "w-full rounded-[10px] border border-[#edf1f3] bg-white px-[14px] py-[12px] font-body text-[16px] font-medium text-black shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] outline-none transition focus:border-[#1C5AF9] focus:ring-2 focus:ring-[#1C5AF9]/10 sm:text-[14px]";
const LABEL_CLASS =
  "mb-1.5 block font-body text-[13px] font-medium leading-[1.6] text-black sm:text-[14px]";

function FieldShell({
  children,
  error,
  label,
  required,
}: {
  children: ReactNode;
  error?: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className={LABEL_CLASS}>
        {label} {required ? <span className="text-[#ef4444]">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-[12px] font-medium text-[#dc2626]">{error}</p>
      ) : null}
    </div>
  );
}

function StepCard({
  children,
  step,
  onClose,
}: {
  children: ReactNode;
  step: Step;
  onClose: () => void;
}) {
  return (
    <div className="relative rounded-[20px] border border-[#e9ebf1] bg-white px-3.5 py-4 shadow-[0px_24px_80px_rgba(15,23,42,0.24)] sm:rounded-[24px] sm:px-8 sm:py-8">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full p-1.5 text-[#98a2b3] transition hover:bg-[#f3f4f6] hover:text-[#111827] sm:right-6 sm:top-6"
      >
        <span className="sr-only">Close</span>
        <X className="size-5" />
      </button>

      <div className="mb-5 pr-8 sm:mb-7 sm:pr-10">
        <div className="h-[8px] w-full rounded-full bg-[#e5e7eb]">
          <div
            className="h-full rounded-full bg-[#1C5AF9] transition-all duration-300"
            style={{ width: step === 1 ? "58.87%" : "100%" }}
          />
        </div>
      </div>

      <DialogTitle className="mb-5 font-display text-[22px] font-bold tracking-[-0.03em] text-[#1C5AF9] sm:mb-7 sm:text-[25px] sm:tracking-[-0.33px]">
        Free Audit Form
      </DialogTitle>
      <DialogDescription className="sr-only">
        Free audit intake form.
      </DialogDescription>

      {children}
    </div>
  );
}

function updateArrayValue(values: string[], option: string) {
  return values.includes(option)
    ? values.filter((value) => value !== option)
    : [...values, option];
}


export default function FreeAuditModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const form = useForm<FreeAuditFormValues>({
    defaultValues: DEFAULT_VALUES,
    mode: "onTouched",
    resolver: zodResolver(freeAuditSchema),
  });

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
    control,
    trigger,
    watch,
  } = form;

  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const builtWith = watch("builtWith");
  const biggestChallenges = watch("biggestChallenges");
  const agreedToTerms = watch("agreedToTerms");
  const showOtherChallenge = biggestChallenges.includes("Other");

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setIsSubmitting(false);
      reset(DEFAULT_VALUES);
    }
  }, [isOpen, reset]);

  const goToNextStep = async () => {
    const isStepValid = await trigger(STEP_FIELDS[step]);

    if (!isStepValid) {
      return;
    }

    if (step < 2) {
      setStep(2);
    }
  };

  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);

    try {
      const response = await submitAuditForm("Free Audit", data);

      if (response && response.success) {
        // Fire Lead ONLY on confirmed API success
        await trackEvent(
          'Lead',
          { content_name: 'Free Audit Form', content_category: 'Free Audit' },
          {
            email: data.email,
            phone: data.phone,
            contentName: 'Free Audit Form'
          }
        );

        // Reddit Lead tracking with Advanced Matching
        sessionStorage.setItem('audit_email', data.email);
        sessionStorage.setItem('audit_phone', data.phone);
        
        trackRedditEvent(
          'Lead',
          { email: data.email, phoneNumber: data.phone }
        );

        onClose();
        router.push("/thankyou");
      } else {
        console.error(response?.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  });
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onClose();
        }
      }}
    >
      <DialogContent className="border-0 bg-transparent p-0 shadow-none">
        <form
          onSubmit={(event) => {
            event.preventDefault();

            if (step === 2) {
              void onSubmit();
              return;
            }

            void goToNextStep();
          }}
        >
          {step === 1 ? (
            <StepCard step={1} onClose={onClose}>
              <div className="space-y-4 sm:space-y-5">
                <FieldShell
                  error={errors.projectStage?.message}
                  label="What stage is your project at?"
                  required
                >
                  <div className="relative">
                    <select
                      className={clsx(
                        INPUT_CLASS,
                        "appearance-none pr-11 text-[#101828]",
                        !watch("projectStage") && "text-[#98a2b3]",
                      )}
                      {...register("projectStage")}
                    >
                      <option value="">Select Project Stage</option>
                      {PROJECT_STAGES.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-[14px] top-1/2 size-5 -translate-y-1/2 text-black" />
                  </div>
                </FieldShell>

                <FieldShell label="What did you build it with? (Optional)">
                  <MultiSelect
                    options={TOOL_OPTIONS}
                    selectedValues={builtWith}
                    onChange={(newValues) => setValue("builtWith", newValues, { shouldDirty: true })}
                    placeholder="Select the tools you've used..."
                  />
                </FieldShell>

                <FieldShell
                  error={errors.problem?.message}
                  label="What problem does your product solve?"
                  required
                >
                  <textarea
                    className={clsx(
                      INPUT_CLASS,
                      "min-h-[70px] resize-none py-[10px] placeholder:text-[#98a2b3]",
                    )}
                    placeholder="Describe the core problem your product addresses..."
                    rows={2}
                    {...register("problem")}
                  />
                </FieldShell>

                <FieldShell label="Who are your target users? (Optional)">
                  <input
                    className={clsx(INPUT_CLASS, "placeholder:text-[#98a2b3]")}
                    placeholder="e.g., Small business owners, Students, Developers"
                    {...register("targetUsers")}
                  />
                </FieldShell>

                <FieldShell
                  error={
                    errors.biggestChallenges?.message ||
                    errors.otherChallenge?.message
                  }
                  label="What's your biggest challenge right now?"
                  required
                >
                  <MultiSelect
                    options={CHALLENGE_OPTIONS}
                    selectedValues={biggestChallenges}
                    onChange={(newValues) => setValue("biggestChallenges", newValues, { shouldDirty: true, shouldValidate: true })}
                    placeholder="Select your biggest challenges..."
                  />
                </FieldShell>

                {showOtherChallenge ? (
                  <FieldShell error={errors.otherChallenge?.message} label="">
                    <input
                      className={clsx(INPUT_CLASS, "placeholder:text-[#98a2b3]")}
                      placeholder="Please Specify"
                      {...register("otherChallenge")}
                    />
                  </FieldShell>
                ) : null}

                <FieldShell
                  error={errors.launchStatus?.message}
                  label="Have you launched yet?"
                  required
                >
                  <div className="relative">
                    <select
                      className={clsx(
                        INPUT_CLASS,
                        "appearance-none pr-11 text-[#101828]",
                        !watch("launchStatus") && "text-[#98a2b3]",
                      )}
                      {...register("launchStatus")}
                    >
                      <option value="">Select Launch Status</option>
                      {LAUNCH_STATUS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-[14px] top-1/2 size-5 -translate-y-1/2 text-black" />
                  </div>
                </FieldShell>

                <FieldShell
                  error={errors.prototypeLink?.message}
                  label="Link to prototype (Optional)"
                >
                  <input
                    className={clsx(INPUT_CLASS, "placeholder:text-[#98a2b3]")}
                    placeholder="https://yourprototype.com"
                    {...register("prototypeLink")}
                  />
                </FieldShell>

                <div className="flex justify-end pt-2">
                  <button
                    className="inline-flex h-[56px] w-full items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[28px] font-display text-[15px] font-extrabold uppercase text-white transition hover:bg-[#2a68ff] sm:h-[58px] sm:w-auto sm:min-w-[138px] sm:px-[50px] sm:text-[16px]"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </StepCard>
          ) : null}

          {step === 2 ? (
            <StepCard step={2} onClose={onClose}>
              <div className="space-y-4 sm:space-y-5">
                <FieldShell error={errors.name?.message} label="Your Name" required>
                  <input
                    className={clsx(INPUT_CLASS, "placeholder:text-[#98a2b3]")}
                    placeholder="Enter Your Name"
                    {...register("name")}
                  />
                </FieldShell>

                <FieldShell
                  error={errors.email?.message}
                  label="Email Address"
                  required
                >
                  <input
                    className={clsx(INPUT_CLASS, "placeholder:text-[#98a2b3]")}
                    placeholder="Enter Email Address"
                    type="email"
                    {...register("email")}
                  />
                </FieldShell>

                <FieldShell
                  error={errors.phone?.message}
                  label="Phone Number"
                  required
                >
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <PhoneInput
                        limitMaxLength
                        defaultCountry="US"
                        placeholder="Enter Phone No"
                        className={clsx(
                          "flex h-[46px] items-center rounded-[10px] border border-[#edf1f3] bg-white px-[10px] shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] focus-within:border-[#1C5AF9] focus-within:ring-2 focus-within:ring-[#1C5AF9]/10 sm:px-[14px]",
                          "[&_.PhoneInputInput]:min-w-0 [&_.PhoneInputInput]:flex-1 [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:font-body [&_.PhoneInputInput]:text-[14px] [&_.PhoneInputInput]:font-medium [&_.PhoneInputInput]:text-black [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-[#98a2b3]",
                          "[&_.PhoneInputCountry]:mr-2 [&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-[#d1d5db] [&_.PhoneInputCountry]:pr-2 sm:[&_.PhoneInputCountry]:mr-3 sm:[&_.PhoneInputCountry]:pr-3 [&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:items-center [&_.PhoneInputCountry]:justify-between [&_.PhoneInputCountryIcon]:w-[24px] [&_.PhoneInputCountryIcon]:h-auto [&_.PhoneInputCountryIcon]:shadow-sm [&_.PhoneInputCountrySelectArrow]:ml-2 [&_.PhoneInputCountrySelectArrow]:opacity-50 [&_.PhoneInputCountrySelectArrow]:w-[12px] [&_.PhoneInputCountrySelectArrow]:h-[12px]"
                        )}
                        {...field}
                      />
                    )}
                  />
                </FieldShell>

                <div>
                  <button
                    className="flex items-start gap-3 text-left"
                    onClick={() =>
                      setValue("agreedToTerms", !getValues("agreedToTerms"), {
                        shouldDirty: true,
                        shouldValidate: true,
                      })
                    }
                    type="button"
                  >
                    <span
                      className={clsx(
                        "mt-[2px] flex size-[14px] shrink-0 items-center justify-center rounded-[4px] border text-white transition",
                        agreedToTerms
                          ? "border-[#1C5AF9] bg-[#1C5AF9]"
                          : "border-[#667085] bg-white",
                      )}
                    >
                      {agreedToTerms ? <Check className="size-3" /> : null}
                    </span>
                    <span className="text-[13px] font-medium leading-[1.6] text-black sm:text-[14px]">
                      I have read and agree to the{" "}
                      <Link
                        className="font-bold text-[#1C5AF9] underline"
                        href="/terms-and-conditions"
                      >
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        className="font-bold text-[#1C5AF9] underline"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </button>
                  {errors.agreedToTerms?.message ? (
                    <p className="mt-2 text-[12px] font-medium text-[#dc2626]">
                      {errors.agreedToTerms.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col-reverse justify-between gap-3 pt-2 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex h-[56px] w-full items-center justify-center rounded-[80px] border border-[#e9ebf1] bg-white px-[28px] font-display text-[15px] font-extrabold uppercase text-[#475467] transition hover:bg-[#f9fafb] sm:h-[58px] sm:w-auto sm:min-w-[138px] sm:px-[50px] sm:text-[16px]"
                  >
                    Back
                  </button>
                  <button
                    className="inline-flex h-[56px] w-full items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[28px] font-display text-[15px] font-extrabold uppercase text-white transition hover:bg-[#2a68ff] disabled:opacity-60 sm:h-[58px] sm:w-auto sm:min-w-[234px] sm:px-[50px] sm:text-[16px]"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Your Idea"}
                  </button>
                </div>
              </div>
            </StepCard>
          ) : null}
        </form>
      </DialogContent>
    </Dialog>
  );
}
