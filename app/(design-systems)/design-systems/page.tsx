"use client";

import { useState } from "react";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { LeadText } from "@/components/globals/typography/lead-text";
import { Button } from "@/components/globals/buttons/button";
import { AppInput } from "@/components/globals/inputs/app-input";
import { AppCheckbox } from "@/components/globals/inputs/app-checkbox";
import { AppRadio } from "@/components/globals/inputs/app-radio";
import { AppBreadcrumb } from "@/components/globals/others/app-breadcrumb";
import { appToast } from "@/components/globals/others/app-toast";
import { COLOR_PALETTE } from "@/constants/colors";
import { RADIUS_SCALE } from "@/constants/design-systems";
import {
  Sparkle,
  ArrowRight,
  EnvelopeSimple,
  Lock,
  MagnifyingGlass,
} from "@phosphor-icons/react";

export default function DesignSystemsPage() {
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "buttons" | "inputs" | "radius">("colors");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option-1");

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 dark:bg-[#081226]/50">
      <div className="site-container">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <AppBreadcrumb items={[{ label: "Design Systems", href: "/design-systems" }]} />
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#0F2B5C] dark:bg-[#173BA2]/40 dark:text-[#9EBEFA] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkle weight="fill" className="h-3.5 w-3.5 text-[#F59E0B]" />
                Brand Token & Component Spec
              </div>
              <HeadingText variant="display" className="text-3xl md:text-5xl font-extrabold text-[#0F2B5C] dark:text-white">
                AUST Alumni Germany
              </HeadingText>
              <LeadText className="mt-2 text-base text-slate-600 dark:text-slate-300">
                Foundational design tokens, typography scales, color palettes, and primitive UI components.
              </LeadText>
            </div>

            {/* Interactive Toast Triggers */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => appToast.success("Design token copied to clipboard!", "Color hex #0F2B5C")}
              >
                Toast Success
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => appToast.error("Verification failed", "Please review inputs")}
              >
                Toast Error
              </Button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto gap-2">
          {(
            [
              { id: "colors", label: "1. Color Tokens" },
              { id: "typography", label: "2. Typography Scale" },
              { id: "buttons", label: "3. Button Matrix" },
              { id: "inputs", label: "4. Form Inputs" },
              { id: "radius", label: "5. Radius & Surfaces" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#0F2B5C] text-[#0F2B5C] dark:border-[#6093F5] dark:text-[#6093F5]"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: COLORS */}
        {activeTab === "colors" && (
          <div className="space-y-10">
            {/* Main Brand & Surface Palette */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Primary */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-black/5"
                  style={{ backgroundColor: COLOR_PALETTE.primary.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.primary.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.primary.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.primary.role}
                  </div>
                </div>
              </div>

              {/* Secondary */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-black/5"
                  style={{ backgroundColor: COLOR_PALETTE.secondary.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.secondary.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.secondary.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.secondary.role}
                  </div>
                </div>
              </div>

              {/* Tertiary */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-black/5"
                  style={{ backgroundColor: COLOR_PALETTE.tertiary.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.tertiary.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.tertiary.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.tertiary.role}
                  </div>
                </div>
              </div>

              {/* Neutral */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-black/5"
                  style={{ backgroundColor: COLOR_PALETTE.neutral.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.neutral.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.neutral.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.neutral.role}
                  </div>
                </div>
              </div>

              {/* Surface (Light Blue) */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-slate-200 dark:ring-slate-700"
                  style={{ backgroundColor: COLOR_PALETTE.surfaceLightBlue.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.surfaceLightBlue.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.surfaceLightBlue.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.surfaceLightBlue.role}
                  </div>
                </div>
              </div>

              {/* Surface (Pure White) */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl border border-slate-200 shadow-inner dark:border-slate-700"
                  style={{ backgroundColor: COLOR_PALETTE.surfacePureWhite.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.surfacePureWhite.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.surfacePureWhite.hex} / {COLOR_PALETTE.surfacePureWhite.borderHex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.surfacePureWhite.role}
                  </div>
                </div>
              </div>

              {/* Dark Blue */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-black/5"
                  style={{ backgroundColor: COLOR_PALETTE.darkBlue.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.darkBlue.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.darkBlue.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.darkBlue.role}
                  </div>
                </div>
              </div>

              {/* Desc Text */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div
                  className="h-24 w-full rounded-xl shadow-inner ring-1 ring-black/5"
                  style={{ backgroundColor: COLOR_PALETTE.descText.hex }}
                />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {COLOR_PALETTE.descText.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {COLOR_PALETTE.descText.hex}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {COLOR_PALETTE.descText.role}
                  </div>
                </div>
              </div>
            </div>

            {/* STATUS & SEMANTIC TOKENS Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Status & Semantic Tokens
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Success */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg shadow-inner ring-1 ring-black/5"
                    style={{ backgroundColor: COLOR_PALETTE.status.success.hex }}
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {COLOR_PALETTE.status.success.name}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {COLOR_PALETTE.status.success.hex}
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg shadow-inner ring-1 ring-black/5"
                    style={{ backgroundColor: COLOR_PALETTE.status.warning.hex }}
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {COLOR_PALETTE.status.warning.name}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {COLOR_PALETTE.status.warning.hex}
                    </div>
                  </div>
                </div>

                {/* Error */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg shadow-inner ring-1 ring-black/5"
                    style={{ backgroundColor: COLOR_PALETTE.status.error.hex }}
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {COLOR_PALETTE.status.error.name}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {COLOR_PALETTE.status.error.hex}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg shadow-inner ring-1 ring-black/5"
                    style={{ backgroundColor: COLOR_PALETTE.status.info.hex }}
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {COLOR_PALETTE.status.info.name}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {COLOR_PALETTE.status.info.hex}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TYPOGRAPHY */}
        {activeTab === "typography" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <HeadingText variant="h3" className="mb-4">
                Plus Jakarta Sans Hierarchy
              </HeadingText>
              <div className="space-y-8 divide-y divide-slate-100 dark:divide-slate-800">
                <div className="pt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Display / Hero (Desktop: 64/72 Bold — Mobile: 36/44 Bold)
                  </div>
                  <HeadingText variant="display">AUST Alumni in Germany</HeadingText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    H1 (Desktop: 48/56 Bold — Mobile: 32/40 Bold)
                  </div>
                  <HeadingText variant="h1">Connecting Engineers & Researchers</HeadingText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    H2 (Desktop: 36/44 SemiBold — Mobile: 28/36 SemiBold)
                  </div>
                  <HeadingText variant="h2">Annual German Alumni Reunion 2026</HeadingText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    H3 (Desktop: 28/36 SemiBold — Mobile: 22/30 SemiBold)
                  </div>
                  <HeadingText variant="h3">Upcoming Tech Talks & Career Workshops</HeadingText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    H4 (Desktop: 22/30 SemiBold — Mobile: 18/26 SemiBold)
                  </div>
                  <HeadingText variant="h4">Berlin & Munich Regional Chapters</HeadingText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    H5 (Desktop: 18/24 SemiBold — Mobile: 17/24 SemiBold)
                  </div>
                  <HeadingText variant="h5">Member Spotlight & Career Milestones</HeadingText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Lead Text
                  </div>
                  <LeadText>
                    Empowering graduates from Ahsanullah University of Science and Technology across German academia,
                    automotive, software, and industrial innovation hubs.
                  </LeadText>
                </div>

                <div className="pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Body Large, Regular, Small, Overline
                  </div>
                  <div className="space-y-3">
                    <BodyText variant="large">
                      Body Large (18/26 Regular): Key feature intros and emphasized paragraphs.
                    </BodyText>
                    <BodyText variant="regular">
                      Body Regular (16/24 Regular): Standard article and interface content copy.
                    </BodyText>
                    <BodyText variant="small">
                      Body Small (14/22 Regular): Form labels, secondary card details, timestamps.
                    </BodyText>
                    <BodyText variant="overline">
                      Overline (+8% Letter Spacing, Uppercase): Category tags and badge headlines.
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BUTTON MATRIX */}
        {activeTab === "buttons" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-8">
              <div>
                <HeadingText variant="h3">Button Variants</HeadingText>
                <BodyText variant="small" className="mb-4">
                  Primary (#0F2B5C), Secondary (#F59E0B), Outline, Dark, Link, and Text variants.
                </BodyText>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Primary Action
                  </Button>
                  <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Secondary Gold
                  </Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="dark">Dark Variant</Button>
                  <Button variant="link">Link Button &rarr;</Button>
                  <Button variant="text">Text Button</Button>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 dark:border-slate-800">
                <HeadingText variant="h4" className="mb-3">
                  Button Sizes
                </HeadingText>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small (h-8)</Button>
                  <Button size="md">Medium (h-10)</Button>
                  <Button size="lg">Large (h-12)</Button>
                  <Button size="icon" aria-label="Search">
                    <MagnifyingGlass className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 dark:border-slate-800">
                <HeadingText variant="h4" className="mb-3">
                  Interactive States & Loading
                </HeadingText>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    isLoading={isButtonLoading}
                    onClick={() => {
                      setIsButtonLoading(true);
                      setTimeout(() => setIsButtonLoading(false), 2000);
                    }}
                  >
                    {isButtonLoading ? "Authenticating..." : "Click to Test Loading"}
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled Primary
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled Secondary
                  </Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FORM INPUTS */}
        {activeTab === "inputs" && (
          <div className="space-y-8">
            <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
              <HeadingText variant="h3">Form Controls</HeadingText>

              <AppInput
                label="Email Address"
                type="email"
                placeholder="alumni@austalumnigermany.de"
                leftIcon={<EnvelopeSimple className="h-4 w-4" />}
                helperText="We'll never share your email with third parties."
              />

              <AppInput
                label="Password"
                type="password"
                placeholder="••••••••••••"
                leftIcon={<Lock className="h-4 w-4" />}
              />

              <AppInput
                label="Error State Input"
                placeholder="Enter postal code"
                error="Invalid German postal code format (e.g., 10115)"
                defaultValue="ABCDE"
              />

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <HeadingText variant="h4">Checkbox & Radio Controls</HeadingText>
                <AppCheckbox
                  label="Subscribe to monthly Germany chapter newsletter"
                  description="Receive invitations to local gatherings in Munich, Berlin, Frankfurt, and Stuttgart."
                  defaultChecked
                />
                <AppCheckbox
                  label="I agree to the AUST Alumni Germany Community Code of Conduct"
                  error="You must accept the terms before joining."
                />

                <div className="pt-4 space-y-2">
                  <BodyText variant="small" className="font-bold text-slate-800 dark:text-slate-200">
                    Alumni Status:
                  </BodyText>
                  <div className="space-y-2">
                    <AppRadio
                      name="status"
                      label="Working Professional in Germany"
                      checked={selectedRadio === "option-1"}
                      onChange={() => setSelectedRadio("option-1")}
                    />
                    <AppRadio
                      name="status"
                      label="Master / PhD Researcher"
                      checked={selectedRadio === "option-2"}
                      onChange={() => setSelectedRadio("option-2")}
                    />
                    <AppRadio
                      name="status"
                      label="Prospective Student / Job Seeker"
                      checked={selectedRadio === "option-3"}
                      onChange={() => setSelectedRadio("option-3")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: RADIUS */}
        {activeTab === "radius" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
              <HeadingText variant="h3">Radius Scale (--radius-sm through --radius-4xl)</HeadingText>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(RADIUS_SCALE).map(([name, value]) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center p-6 border border-slate-200 bg-[#F1F6FF] dark:border-slate-800 dark:bg-[#081226]"
                    style={{ borderRadius: value }}
                  >
                    <span className="font-mono text-xs font-bold text-[#0F2B5C] dark:text-[#9EBEFA]">
                      --radius-{name}
                    </span>
                    <span className="text-[11px] text-slate-500">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
