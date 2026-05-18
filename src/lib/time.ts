export type TimestampZone = "local" | "utc";

export function unixSecondsToDate(
  seconds: number,
  zone: TimestampZone,
): string {
  const d = new Date(seconds * 1000);
  return formatDate(d, zone);
}

export function unixMsToDate(ms: number, zone: TimestampZone): string {
  const d = new Date(ms);
  return formatDate(d, zone);
}

export function dateToUnixSeconds(
  isoLocal: string,
  zone: TimestampZone,
): number {
  const ms = parseLocalOrUtc(isoLocal, zone);
  return Math.floor(ms / 1000);
}

export function dateToUnixMs(isoLocal: string, zone: TimestampZone): number {
  return parseLocalOrUtc(isoLocal, zone);
}

export function secondsToMs(seconds: number): number {
  return seconds * 1000;
}

export function msToSeconds(ms: number): number {
  return ms / 1000;
}

export function nowUnixSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

export function nowUnixMs(): number {
  return Date.now();
}

function formatDate(d: Date, zone: TimestampZone): string {
  if (zone === "utc") {
    return d.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, " UTC");
  }
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} (local)`;
}

function parseLocalOrUtc(isoLocal: string, zone: TimestampZone): number {
  const trimmed = isoLocal.trim();
  if (!trimmed) return NaN;
  if (zone === "utc") {
    const normalized = trimmed.includes("T")
      ? trimmed.endsWith("Z")
        ? trimmed
        : `${trimmed}Z`
      : `${trimmed.replace(" ", "T")}Z`;
    return Date.parse(normalized);
  }
  const normalized = trimmed.includes("T")
    ? trimmed
    : trimmed.replace(" ", "T");
  return Date.parse(normalized);
}

export function defaultDatetimeLocalValue(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
