type SocialIconProps = {
  className?: string;
};

export function InstagramIcon({
  className = "h-5 w-5",
}: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.25"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

export function FacebookIcon({
  className = "h-5 w-5",
}: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M13.66 21V13.3H16.3L16.7 10.3H13.66V8.38C13.66 7.51 13.9 6.92 15.18 6.92H16.81V4.24C16.53 4.2 15.56 4.12 14.44 4.12C12.1 4.12 10.49 5.53 10.49 8.12V10.3H7.84V13.3H10.49V21H13.66Z" />
    </svg>
  );
}