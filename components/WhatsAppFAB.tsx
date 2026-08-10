export function WhatsAppFAB() {
  return (
    <a
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active-scale transition-all z-50"
      href="https://wa.me/966554918518"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.394.703 4.625 1.914 6.5L4 29l7.688-1.867A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.988 16.988c-.297.836-1.47 1.531-2.406 1.734-.64.133-1.477.242-4.293-.922-3.605-1.492-5.926-5.156-6.106-5.398-.176-.242-1.457-1.937-1.457-3.695 0-1.758.898-2.617 1.219-2.977.32-.36.696-.449.93-.449.234 0 .469.004.672.012.215.008.504-.082.789.602.297.71.008 1.09-.109 1.359-.121.27-.395.598-.594.813-.199.215-.207.379-.078.621.129.242.578 1.028 1.293 1.664.965.867 1.766 1.152 2.023 1.281.258.129.406.109.559-.066.152-.176.652-.762.828-1.023.176-.262.352-.211.598-.129.246.082 1.559.734 1.828.867.27.133.449.199.516.312.066.113.066.652-.234 1.395Z" />
      </svg>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]" />
      </span>
    </a>
  );
}
