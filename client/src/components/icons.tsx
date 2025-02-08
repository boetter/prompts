import * as React from "react"

export function PromptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3h18v18H3z" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

export function AppIcon() {
  return (
    <svg 
      width="512" 
      height="512" 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="512" height="512" rx="128" fill="#4F46E5"/>
      <path 
        d="M156 156h200v200H156z" 
        stroke="#ffffff" 
        strokeWidth="24"
        fill="none"
      />
      <path 
        d="M256 206v100M206 256h100" 
        stroke="#ffffff" 
        strokeWidth="24"
        strokeLinecap="round"
      />
      <circle 
        cx="256" 
        cy="256" 
        r="150" 
        stroke="#ffffff" 
        strokeWidth="24"
        fill="none"
      />
    </svg>
  )
}
